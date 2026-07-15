#!/usr/bin/env python3
"""Build complete English and French locale assets from the Chinese corpus.

Generated JSON is committed, so browsers never depend on a live translation
service. Argos Translate is only required when rebuilding these assets.
"""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import subprocess
from pathlib import Path
from typing import Any, Iterable

os.environ.setdefault("OMP_NUM_THREADS", "1")
os.environ.setdefault("MKL_NUM_THREADS", "1")
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")


ROOT = Path(__file__).resolve().parents[1]
ATLAS_SOURCE = ROOT / "data" / "research-atlas.json"
CACHE_PATH = ROOT / ".cache" / "locale-translations.json"

HAN_RE = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]")
HTML_TAG_RE = re.compile(r"(<[^>]+>)")
OPAQUE_KEYS = {
    "id", "chapter", "collection", "contentType", "sourceId", "src", "href",
    "url", "color", "type", "language", "sourceIndex", "blockIndex",
}
OPAQUE_VALUE_RE = re.compile(
    r"^(?:https?://|assets/|data:|#[0-9a-fA-F]{3,8}$|[a-z0-9]+(?:-[a-z0-9]+){1,})"
)
EN_RESIDUAL_REPLACEMENTS = (
    ("Sarah Bruyt (萨拉)", "Sarah Bruyt"),
    ("数字 Digital", "Digital"),
    ("权威 authoritative", "authoritative"),
    ('"open" 民族', "open access to Indigenous knowledge"),
)


def load_frontier_source() -> dict[str, Any]:
    script = r"""
const fs = require('fs');
const vm = require('vm');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('frontier-catalog.js', 'utf8'), context);
process.stdout.write(JSON.stringify({
  catalog: context.window.LITERARY_FRONTIER_CATALOG,
  quizzes: context.window.LITERARY_QUIZ_BANK
}));
"""
    result = subprocess.run(
        ["node", "-e", script], cwd=ROOT, check=True, capture_output=True,
        text=True, encoding="utf-8"
    )
    return json.loads(result.stdout)


def is_translatable(value: str, key: str | None = None) -> bool:
    text = html.unescape(value).strip()
    if not text or key in OPAQUE_KEYS:
        return False
    if OPAQUE_VALUE_RE.match(text) and not HAN_RE.search(text):
        return False
    return bool(re.search(r"[A-Za-z\u3400-\u9fff]", text))


def html_text_segments(value: str) -> Iterable[str]:
    for part in HTML_TAG_RE.split(value):
        if not part.startswith("<") and is_translatable(part, "htmlText"):
            yield html.unescape(part).strip()


def collect_strings(value: Any, found: set[str], key: str | None = None) -> None:
    if isinstance(value, dict):
        for child_key, child in value.items():
            collect_strings(child, found, child_key)
    elif isinstance(value, list):
        for child in value:
            collect_strings(child, found, key)
    elif isinstance(value, str):
        if key == "html":
            found.update(html_text_segments(value))
        elif is_translatable(value, key):
            found.add(value.strip())


def load_cache() -> dict[str, str]:
    if not CACHE_PATH.exists():
        return {}
    return json.loads(CACHE_PATH.read_text(encoding="utf-8"))


def save_cache(cache: dict[str, str]) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(
        json.dumps(cache, ensure_ascii=False, sort_keys=True, separators=(",", ":")),
        encoding="utf-8",
    )


def value_chunks(values: list[str], max_characters: int = 2_000) -> list[list[str]]:
    chunks: list[list[str]] = []
    current: list[str] = []
    current_size = 0
    for value in sorted(values, key=len, reverse=True):
        if current and current_size + len(value) > max_characters:
            chunks.append(current)
            current = []
            current_size = 0
        current.append(value)
        current_size += len(value)
    if current:
        chunks.append(current)
    return chunks


def create_batch_translator(source_language: str, target_language: str):
    import ctranslate2
    from argostranslate import settings, translate

    languages = {language.code: language for language in translate.get_installed_languages()}
    if source_language not in languages or target_language not in languages:
        raise RuntimeError(f"Missing Argos model: {source_language}->{target_language}")
    cached = languages[source_language].get_translation(languages[target_language])
    packaged = cached.underlying
    translator = ctranslate2.Translator(
        str(packaged.pkg.package_path / "model"),
        device=settings.device,
        inter_threads=1,
        intra_threads=1,
        compute_type=settings.compute_type,
    )
    return packaged, translator


def translate_batch_values(values: list[str], packaged, translator) -> dict[str, str]:
    from argostranslate import settings
    from argostranslate.translate import ITranslation

    layouts: dict[str, list[list[int]]] = {}
    tokenized: list[list[str]] = []
    for value in values:
        paragraph_layouts: list[list[int]] = []
        for paragraph in ITranslation.split_into_paragraphs(value):
            sentence_indexes: list[int] = []
            for sentence in packaged.sentencizer.split_sentences(paragraph):
                sentence_indexes.append(len(tokenized))
                tokenized.append(packaged.pkg.tokenizer.encode(sentence))
            paragraph_layouts.append(sentence_indexes)
        layouts[value] = paragraph_layouts

    target_prefix = None
    if packaged.pkg.target_prefix:
        target_prefix = [[packaged.pkg.target_prefix]] * len(tokenized)
    results = translator.translate_batch(
        tokenized,
        target_prefix=target_prefix,
        replace_unknowns=True,
        max_batch_size=16,
        batch_type="tokens",
        beam_size=1,
        num_hypotheses=1,
        length_penalty=0.2,
        return_scores=False,
    )

    translated: dict[str, str] = {}
    for source, paragraph_layouts in layouts.items():
        paragraphs = []
        for sentence_indexes in paragraph_layouts:
            tokens = []
            for index in sentence_indexes:
                tokens.extend(results[index].hypotheses[0])
            value = packaged.pkg.tokenizer.decode(tokens)
            if packaged.pkg.target_prefix and value.startswith(packaged.pkg.target_prefix):
                value = value[len(packaged.pkg.target_prefix):]
            paragraphs.append(value.lstrip())
        translated[source] = ITranslation.combine_paragraphs(paragraphs).strip()
    return translated


def fill_translations(
    cache: dict[str, str], values: Iterable[str], source_language: str,
    target_language: str, workers: int
) -> None:
    prefix = f"{source_language}>{target_language}:"
    missing = [value for value in values if f"{prefix}{value}" not in cache]
    if not missing:
        return
    chunks = value_chunks(missing)
    print(
        f"Translating {len(missing):,} strings / {sum(map(len, missing)):,} chars "
        f"({source_language}->{target_language}, {len(chunks)} batches)", flush=True
    )
    packaged, translator = create_batch_translator(source_language, target_language)
    for index, chunk in enumerate(chunks, 1):
        translated_chunk = translate_batch_values(chunk, packaged, translator)
        for source, translated in translated_chunk.items():
            cache[f"{prefix}{source}"] = translated
        save_cache(cache)
        print(f"  completed batch {index}/{len(chunks)}", flush=True)


def translated_text(value: str, language: str, cache: dict[str, str]) -> str:
    source = value.strip()
    if language == "en":
        return cache.get(f"zh>en:{source}", source)
    english = cache.get(f"zh>en:{source}", source) if HAN_RE.search(source) else source
    return cache.get(f"en>fr:{english}", english)


def clean_residuals(value: Any, language: str, path: str = "root") -> Any:
    if isinstance(value, dict):
        return {
            key: clean_residuals(child, language, f"{path}.{key}")
            for key, child in value.items()
        }
    if isinstance(value, list):
        return [clean_residuals(child, language, f"{path}[{index}]") for index, child in enumerate(value)]
    if not isinstance(value, str):
        return value
    if language == "en":
        for source, replacement in EN_RESIDUAL_REPLACEMENTS:
            value = value.replace(source, replacement)
    if HAN_RE.search(value):
        raise RuntimeError(f"Residual Han text in {language} locale at {path}: {value[:160]}")
    return value


def translate_html(value: str, language: str, cache: dict[str, str]) -> str:
    parts = HTML_TAG_RE.split(value)
    for index, part in enumerate(parts):
        plain = html.unescape(part).strip()
        if part.startswith("<") or not is_translatable(plain, "htmlText"):
            continue
        translated = translated_text(plain, language, cache)
        parts[index] = part.replace(plain, html.escape(translated, quote=False))
    output = "".join(parts)
    if language != "zh":
        output = output.replace("Noto Sans SC", "Noto Sans").replace("Noto Serif SC", "Noto Serif")
    return output


def localize(value: Any, language: str, cache: dict[str, str], key: str | None = None) -> Any:
    if isinstance(value, dict):
        return {
            child_key: localize(child, language, cache, child_key)
            for child_key, child in value.items() if child_key != "i18n"
        }
    if isinstance(value, list):
        return [localize(child, language, cache, key) for child in value]
    if isinstance(value, str):
        if key == "language":
            return "en-US" if language == "en" else "fr-FR"
        if key == "html":
            return translate_html(value, language, cache)
        if is_translatable(value, key):
            return translated_text(value, language, cache)
    return value


def overlay_authored_locale(
    localized: dict[str, Any], original: dict[str, Any], language: str,
    cache: dict[str, str]
) -> dict[str, Any]:
    def authored_value(value: Any, key: str | None = None) -> Any:
        if isinstance(value, dict):
            return {child_key: authored_value(child, child_key) for child_key, child in value.items()}
        if isinstance(value, list):
            return [authored_value(child, key) for child in value]
        if isinstance(value, str) and HAN_RE.search(value):
            return translated_text(value, language, cache)
        return value

    authored = original.get("i18n", {}).get(language, {})
    for key, value in authored.items():
        localized[key] = authored_value(value, key)
    return localized


def build_assets(workers: int) -> None:
    atlas = json.loads(ATLAS_SOURCE.read_text(encoding="utf-8"))
    frontier = load_frontier_source()
    source_strings: set[str] = set()
    collect_strings(atlas, source_strings)
    collect_strings(frontier, source_strings)

    cache = load_cache()
    chinese_strings = sorted(value for value in source_strings if HAN_RE.search(value))
    fill_translations(cache, chinese_strings, "zh", "en", workers)
    english_strings = {
        cache.get(f"zh>en:{value}", value) if HAN_RE.search(value) else value
        for value in source_strings
    }
    fill_translations(cache, sorted(english_strings), "en", "fr", workers)

    notices = {
        "en": "Complete English research edition with source identifiers, tables and figure structure preserved.",
        "fr": "Édition française intégrale conservant les identifiants de source, les tableaux et la structure des figures.",
    }
    titles = {
        "en": "Global Literary Research Frontiers: Complete Atlas",
        "fr": "Frontières mondiales de la recherche littéraire : atlas intégral",
    }
    locale_payload: dict[str, Any] = {"schemaVersion": 2}
    for language in ("en", "fr"):
        localized_atlas = clean_residuals(localize(atlas, language, cache), language, "atlas")
        localized_atlas["title"] = titles[language]
        localized_atlas["sourceNotice"] = notices[language]
        (ROOT / "data" / f"research-atlas.{language}.json").write_text(
            json.dumps(localized_atlas, ensure_ascii=False, separators=(",", ":")),
            encoding="utf-8",
        )

        movements = {}
        for movement in frontier["catalog"]:
            translated = localize(movement, language, cache)
            movements[movement["id"]] = overlay_authored_locale(
                translated, movement, language, cache
            )
        locale_payload[language] = clean_residuals({
            "movements": movements,
            "quizzes": localize(frontier["quizzes"], language, cache),
        }, language, f"frontier.{language}")

    (ROOT / "data" / "frontier-locales.json").write_text(
        json.dumps(locale_payload, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    save_cache(cache)
    print("Locale assets written.")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--workers", type=int,
        default=max(1, min(4, (os.cpu_count() or 2) // 2)),
        help="Parallel translator processes (default: up to 4)",
    )
    args = parser.parse_args()
    build_assets(max(1, args.workers))


if __name__ == "__main__":
    main()
