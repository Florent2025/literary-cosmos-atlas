/* Command palette: one search box for volumes, concepts, people, works, timeline events,
 * radar directions, sections and actions. Ctrl/⌘ + K or "/" opens it. */
(() => {
  const LIMIT = 36;
  const SECTIONS = [
    ["#library", "navLibrary"], ["#atlas", "navAtlas"], ["#timeline", "navTimeline"], ["#radar", "navRadar"],
    ["#lenslab", "navLab"], ["#archive", "navArchive"], ["#researchLibrary", "navResearch"], ["#passport", "navPassport"]
  ];
  let dialog = null;
  let input = null;
  let list = null;
  let results = [];
  let active = 0;
  let returnFocus = null;
  let index = null;

  const normalise = (value) => String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase();

  function buildIndex() {
    const items = [];
    MOVEMENTS.forEach((movement) => {
      const local = localizedMovement(movement);
      items.push({
        group: "paletteVolumes", title: local.title, meta: `${collectionLabel(movement)} · ${local.lens}`,
        haystack: [local.title, movement.title, local.lens, local.era, local.region, ...local.keywords, ...movement.keywords].join(" "),
        color: movement.palette[2], run: (trigger) => LC.openVolume(movement.id, trigger)
      });
      local.figures.forEach((figure, figureIndex) => items.push({
        group: "palettePeople", title: figure.name, meta: `${local.title} · ${figure.role}`,
        haystack: `${figure.name} ${movement.figures[figureIndex]?.name || ""} ${figure.role}`,
        color: movement.palette[1], run: (trigger) => LC.openVolume(movement.id, trigger)
      }));
      local.works.forEach((work, workIndex) => items.push({
        group: "paletteWorks", title: work.title, meta: `${work.author} · ${local.title}`,
        haystack: `${work.title} ${movement.works[workIndex]?.title || ""} ${work.author}`,
        color: movement.palette[1], run: (trigger) => LC.openVolume(movement.id, trigger)
      }));
    });
    (window.LC_LEXICON || []).forEach((entry) => {
      const [term, definition] = LC.pick(entry);
      items.push({
        group: "paletteConcepts", title: `${term} · ${entry.origin}`, meta: definition,
        haystack: `${entry.zh[0]} ${entry.en[0]} ${entry.fr[0]} ${entry.origin} ${entry.who}`,
        color: "#e8c877", run: (trigger) => LC.openVolume(entry.volumes[0], trigger)
      });
    });
    (window.LC_TIMELINE || []).forEach((event, eventIndex) => {
      const [title, note] = LC.pick(event);
      items.push({
        group: "paletteEvents", title: `${LC.yearLabel(event)} · ${title}`, meta: note,
        haystack: `${Math.round(event.year)} ${event.zh[0]} ${event.en[0]} ${event.fr[0]}`,
        color: "#75f5ff", run: () => window.LCTimeline?.focusEvent(eventIndex)
      });
    });
    (window.LC_RADAR?.blips || []).forEach((blip, blipIndex) => {
      const [name, summary] = LC.pick(blip);
      items.push({
        group: "paletteRadar", title: name, meta: summary,
        haystack: `${blip.zh[0]} ${blip.en[0]} ${blip.fr[0]} ${blip.refs.join(" ")}`,
        color: "#89f2c1", run: () => window.LCRadar?.focusBlip(blipIndex)
      });
    });
    SECTIONS.forEach(([hash, key]) => items.push({
      group: "paletteActions", title: fmt(t("actionSection"), { section: t(key) }), meta: hash,
      haystack: `${t(key)} ${UI_COPY.zh[key]} ${UI_COPY.en[key]} ${UI_COPY.fr[key]}`,
      run: () => document.querySelector(hash)?.scrollIntoView({ behavior: LC.reducedMotion() ? "auto" : "smooth" })
    }));
    [["zh", "中文"], ["en", "English"], ["fr", "Français"]].forEach(([code, name]) => items.push({
      group: "paletteActions", title: fmt(t("actionLanguage"), { lang: name }), meta: code.toUpperCase(),
      haystack: `language langue 语言 ${name} ${code}`, run: () => document.querySelector(`[data-lang="${code}"]`)?.click()
    }));
    items.push(
      { group: "paletteActions", title: t("actionPrologue"), meta: "Remotion", haystack: "prologue video 序章 视频 film", run: () => window.LCPrologue?.open() },
      { group: "paletteActions", title: t("actionGame"), meta: "Phaser", haystack: "game moon lunar 游戏 月球 jeu lune", run: () => openSpaceGame() },
      { group: "paletteActions", title: t("actionSound"), meta: "♪", haystack: "sound audio 声音 声效 son", run: () => document.querySelector("#soundToggle")?.click() },
      { group: "paletteActions", title: t("actionMotion"), meta: "◐", haystack: "motion animation reduce 动画 动态 animations", run: () => window.LCShell?.toggleMotion() },
      { group: "paletteActions", title: t("actionTop"), meta: "#hero", haystack: "top hero home 开场 首页 accueil", run: () => window.scrollTo({ top: 0, behavior: LC.reducedMotion() ? "auto" : "smooth" }) }
    );
    return items.map((item) => ({ ...item, key: normalise(`${item.title} ${item.haystack}`) }));
  }

  function score(item, query) {
    if (!query) return 0;
    const title = normalise(item.title);
    if (title.startsWith(query)) return 100;
    if (title.split(/[\s·,:：/（(]+/).some((word) => word.startsWith(query))) return 80;
    if (title.includes(query)) return 70;
    if (item.key.includes(query)) return 50;
    if (/^[a-z]+$/.test(query) && query.length > 2) {
      let position = 0;
      for (const character of query) {
        position = item.key.indexOf(character, position);
        if (position < 0) return -1;
        position += 1;
      }
      return 10;
    }
    return -1;
  }

  function search(raw) {
    if (!index) index = buildIndex();
    const query = normalise(raw.trim());
    if (!query) {
      return index.filter((item) => item.group === "paletteActions").concat(index.filter((item) => item.group === "paletteVolumes").slice(0, 6));
    }
    const terms = query.split(/\s+/).filter(Boolean);
    return index
      .map((item) => {
        const scores = terms.map((term) => score(item, term));
        return { item, score: scores.some((value) => value < 0) ? -1 : scores.reduce((sum, value) => sum + value, 0) };
      })
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, LIMIT)
      .map((entry) => entry.item);
  }

  function render() {
    results = search(input.value);
    active = Math.min(active, Math.max(0, results.length - 1));
    if (!results.length) {
      list.innerHTML = `<li class="lc-palette__empty" role="presentation">${t("paletteEmpty")}</li>`;
      input.removeAttribute("aria-activedescendant");
      return;
    }
    let lastGroup = "";
    list.innerHTML = results.map((item, position) => {
      const header = item.group !== lastGroup ? `<li class="lc-palette__group" role="presentation">${t(item.group)}</li>` : "";
      lastGroup = item.group;
      return `${header}<li id="lc-option-${position}" role="option" aria-selected="${position === active}" class="lc-palette__option" data-option="${position}" style="--dot:${item.color || "#9eb0c2"}">
        <i aria-hidden="true"></i><span><strong>${LC.escapeHtml(item.title)}</strong><em>${LC.escapeHtml(String(item.meta || "")).slice(0, 140)}</em></span>
      </li>`;
    }).join("");
    input.setAttribute("aria-activedescendant", `lc-option-${active}`);
  }

  function move(step) {
    if (!results.length) return;
    active = (active + step + results.length) % results.length;
    list.querySelectorAll("[role='option']").forEach((option) => option.setAttribute("aria-selected", String(Number(option.dataset.option) === active)));
    input.setAttribute("aria-activedescendant", `lc-option-${active}`);
    list.querySelector(`#lc-option-${active}`)?.scrollIntoView({ block: "nearest" });
  }

  function choose(position) {
    const item = results[position];
    if (!item) return;
    close(false);
    window.setTimeout(() => item.run(returnFocus), 30);
  }

  function open() {
    if (!dialog) return;
    returnFocus = document.activeElement;
    index = buildIndex();
    dialog.hidden = false;
    dialog.removeAttribute("inert");
    document.body.classList.add("lc-palette-open");
    input.value = "";
    active = 0;
    render();
    requestAnimationFrame(() => input.focus());
    if (window.anime && !LC.reducedMotion()) anime({ targets: dialog.querySelector(".lc-palette__panel"), opacity: [0, 1], translateY: [-12, 0], scale: [0.98, 1], duration: 260, easing: "easeOutQuad" });
  }

  function close(restore = true) {
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    dialog.setAttribute("inert", "");
    document.body.classList.remove("lc-palette-open");
    if (restore) returnFocus?.focus?.({ preventScroll: true });
  }

  function init() {
    dialog = document.querySelector("#palette");
    if (!dialog) return;
    input = dialog.querySelector("[data-palette-input]");
    list = dialog.querySelector("[data-palette-list]");
    input.addEventListener("input", () => {
      active = 0;
      render();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") { event.preventDefault(); move(1); }
      else if (event.key === "ArrowUp") { event.preventDefault(); move(-1); }
      else if (event.key === "Enter") { event.preventDefault(); choose(active); }
      else if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); close(); }
      else if (event.key === "Tab") event.preventDefault();
    });
    list.addEventListener("click", (event) => {
      const option = event.target.closest("[data-option]");
      if (option) choose(Number(option.dataset.option));
    });
    list.addEventListener("pointermove", (event) => {
      const option = event.target.closest("[data-option]");
      if (option && Number(option.dataset.option) !== active) move(Number(option.dataset.option) - active);
    });
    dialog.querySelector("[data-palette-close]").addEventListener("click", () => close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    document.querySelectorAll("[data-palette-open]").forEach((button) => button.addEventListener("click", open));
    document.addEventListener("keydown", (event) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
      if ((event.key === "k" || event.key === "K") && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        if (dialog.hidden) open();
        else close();
      } else if (event.key === "/" && !typing && dialog.hidden && !state.worldOpen && !document.body.classList.contains("game-open")) {
        event.preventDefault();
        open();
      }
    });
    LC.onLanguage(() => {
      index = null;
      input.placeholder = t("palettePlaceholder");
      if (!dialog.hidden) render();
    });
    input.placeholder = t("palettePlaceholder");
  }

  window.LCPalette = { open, close };
  document.addEventListener("DOMContentLoaded", init);
})();
