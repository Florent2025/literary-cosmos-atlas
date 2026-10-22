"""Render every theory-in-motion scene in zh/en/fr and publish web-ready clips.

    python tools/manim/render_all.py [--quality m] [Scene ...]

Requires manim (Community) and ffmpeg. Outputs to assets/motion/:
  <Scene>-<lang>.mp4   H.264, faststart, no audio
  <Scene>-<lang>.webp  poster frame
  manifest.json        scene → volumes, durations
"""

import json
import os
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
OUT = os.path.join(ROOT, "assets", "motion")
LANGS = ("zh", "en", "fr")

# Which atlas volumes show each animation.
SCENES = {
    "PlotArc": ["classical-poetics"],
    "FabulaSyuzhet": ["russian-formalism"],
    "JakobsonAxes": ["structuralism", "russian-formalism"],
    "SemioticSquare": ["structuralism"],
    "SignifierChain": ["poststructuralism"],
    "HermeneuticCircle": ["reader-response"],
    "ThreeHorizons": ["marxism"],
    "DistantReading": ["digital-humanities"],
    "SlowViolence": ["environmental-humanities", "ecocriticism-world"],
    "DreamWork": ["psychoanalysis"],
}


def run(cmd, env=None):
    subprocess.run(cmd, check=True, env=env, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def duration(path):
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", path],
        check=True, capture_output=True, text=True,
    )
    return round(float(probe.stdout.strip()), 2)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    scenes = args or list(SCENES)
    manim = os.environ.get("MANIM_BIN", "manim")
    os.makedirs(OUT, exist_ok=True)
    manifest_path = os.path.join(OUT, "manifest.json")
    manifest = json.load(open(manifest_path)) if os.path.exists(manifest_path) else {"scenes": {}}
    with tempfile.TemporaryDirectory() as media:
        for scene in scenes:
            entry = {"volumes": SCENES[scene], "durations": {}}
            for lang in LANGS:
                env = dict(os.environ, LC_LANG=lang)
                media_dir = os.path.join(media, lang)
                run([manim, "-qm", "--disable_caching", "--media_dir", media_dir, os.path.join(HERE, "scenes.py"), scene], env=env)
                raw = os.path.join(media_dir, "videos", "scenes", "720p30", f"{scene}.mp4")
                clip = os.path.join(OUT, f"{scene}-{lang}.mp4")
                run(["ffmpeg", "-y", "-i", raw, "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "30",
                     "-pix_fmt", "yuv420p", "-movflags", "+faststart", clip])
                seconds = duration(clip)
                run(["ffmpeg", "-y", "-sseof", "-0.6", "-i", clip, "-frames:v", "1", "-vf", "scale=960:-2",
                     "-c:v", "libwebp", "-quality", "78", os.path.join(OUT, f"{scene}-{lang}.webp")])
                entry["durations"][lang] = seconds
                print(f"{scene} [{lang}] {seconds}s {os.path.getsize(clip) // 1024} KiB", flush=True)
            manifest["scenes"][scene] = entry
            with open(manifest_path, "w", encoding="utf-8") as handle:
                json.dump(manifest, handle, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
