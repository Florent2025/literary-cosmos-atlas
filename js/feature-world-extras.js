/* Enhancements injected into every opened volume ("world"): progress bar, Then → Now bridges,
 * Manim animations, a rough.js concept sketch, cross-links, private notes, citation and navigation. */
(() => {
  const NS = "http://www.w3.org/2000/svg";
  let manifestRequest = null;
  let progressHandler = null;

  const loadManifest = () => {
    if (!manifestRequest) {
      manifestRequest = fetch("./assets/motion/manifest.json").then((response) => (response.ok ? response.json() : { scenes: {} })).catch(() => ({ scenes: {} }));
    }
    return manifestRequest;
  };

  const section = (className, title, body, lead = "") => `
    <section class="world-section lc-world ${className}">
      <h3>${title}</h3>
      ${lead ? `<p class="lc-world__lead">${lead}</p>` : ""}
      ${body}
    </section>
  `;

  function bridgesMarkup(id) {
    const bridges = window.LC_BRIDGES?.[id];
    if (!bridges) return "";
    return section("lc-world--bridges", t("bridgesTitle"), `
      <div class="lc-bridges">
        ${bridges.map((bridge, index) => {
          const [heading, text] = LC.pick(bridge);
          const target = LC.volume(bridge.link);
          return `
            <article class="lc-bridge" style="--bridge:${target?.palette[2] || "#3d7582"}">
              <span class="lc-bridge__index">0${index + 1}</span>
              <h4>${LC.escapeHtml(heading)}</h4>
              <p>${LC.escapeHtml(text)}</p>
              <ul>${bridge.refs.map((ref) => `<li>${LC.escapeHtml(ref)}</li>`).join("")}</ul>
              ${target ? `<button type="button" data-open="${target.id}">${t("bridgesOpen")} · ${LC.escapeHtml(LC.volumeTitle(target.id))} →</button>` : ""}
            </article>
          `;
        }).join("")}
      </div>
    `, t("bridgesLead"));
  }

  function motionMarkup(id, manifest) {
    const scenes = Object.entries(manifest.scenes || {}).filter(([, scene]) => scene.volumes.includes(id));
    if (!scenes.length) return "";
    const language = LC.lang();
    return section("lc-world--motion", t("motionTitle"), `
      <div class="lc-motion">
        ${scenes.map(([name, scene]) => `
          <figure class="lc-motion__clip">
            <video controls playsinline muted loop preload="none" poster="./assets/motion/${name}-${language}.webp" aria-label="${t("motionTitle")}: ${name}">
              <source src="./assets/motion/${name}-${language}.mp4" type="video/mp4">
            </video>
            <figcaption>${t("motionCaption")} · ${Math.round(scene.durations[language] || 0)}s</figcaption>
          </figure>
        `).join("")}
      </div>
    `);
  }

  function connectionsMarkup(id) {
    const concepts = (window.LC_LEXICON || []).filter((entry) => entry.volumes.includes(id));
    const events = (window.LC_TIMELINE || []).filter((event) => event.volume === id);
    const blips = (window.LC_RADAR?.blips || []).filter((blip) => blip.volume === id);
    if (!concepts.length && !events.length && !blips.length) return "";
    return section("lc-world--links", t("conceptsTitle"), `
      ${concepts.length ? `<dl class="lc-lexicon">${concepts.map((entry) => {
        const [term, definition] = LC.pick(entry);
        return `<div><dt>${LC.escapeHtml(term)} <small>${LC.escapeHtml(entry.origin)}</small></dt><dd>${LC.escapeHtml(definition)}<cite>${LC.escapeHtml(entry.who)}</cite></dd></div>`;
      }).join("")}</dl>` : ""}
      ${events.length ? `<h4>${t("timelineMiniTitle")}</h4><ol class="lc-mini-timeline">${events.map((event) => `<li><b>${LC.escapeHtml(LC.yearLabel(event))}</b><span>${LC.escapeHtml(LC.pick(event)[0])}</span></li>`).join("")}</ol>` : ""}
      ${blips.length ? `<h4>${t("radarMiniTitle")}</h4><ul class="lc-mini-radar">${blips.map((blip) => `<li><strong>${LC.escapeHtml(LC.pick(blip)[0])}</strong><span>${LC.escapeHtml(LC.pick(blip)[1])}</span></li>`).join("")}</ul>` : ""}
    `);
  }

  function sketchMarkup() {
    return section("lc-world--sketch", t("sketchTitle"), `<div class="lc-sketch" data-sketch></div>`, t("sketchLead"));
  }

  function toolsMarkup(id) {
    const notes = LC.progress.get().notes?.[id] || "";
    const index = MOVEMENTS.findIndex((movement) => movement.id === id);
    const previous = MOVEMENTS[(index - 1 + MOVEMENTS.length) % MOVEMENTS.length];
    const next = MOVEMENTS[(index + 1) % MOVEMENTS.length];
    return `
      <section class="world-section lc-world lc-world--tools">
        <div class="lc-tools">
          <div class="lc-tools__notes">
            <h3>${t("notesTitle")}</h3>
            <textarea data-world-notes rows="5" placeholder="${LC.escapeHtml(t("notesPlaceholder"))}" aria-label="${LC.escapeHtml(t("notesTitle"))}">${LC.escapeHtml(notes)}</textarea>
            <small data-notes-status aria-live="polite"></small>
          </div>
          <div class="lc-tools__cite">
            <h3>${t("citeTitle")}</h3>
            <button type="button" class="lc-button lc-button--ink" data-world-copy="link">${t("copyLink")}</button>
            <button type="button" class="lc-button lc-button--ink" data-world-copy="cite">${t("copyCitation")}</button>
          </div>
        </div>
        <nav class="lc-volume-nav" aria-label="${t("prevVolume")} / ${t("nextVolume")}">
          <button type="button" data-open="${previous.id}"><small>← ${t("prevVolume")}</small><strong>${LC.escapeHtml(LC.volumeTitle(previous.id))}</strong></button>
          <button type="button" data-open="${next.id}"><small>${t("nextVolume")} →</small><strong>${LC.escapeHtml(LC.volumeTitle(next.id))}</strong></button>
        </nav>
      </section>
    `;
  }

  function citation(id) {
    const title = LC.volumeTitle(id);
    const url = `${location.origin}${location.pathname}#theory/${id}`;
    const date = new Date().toISOString().slice(0, 10);
    if (LC.lang() === "zh") return `文学理论宇宙编辑部：《${title.replace(/[《》]/g, "")}》，载《文学理论宇宙》，2026 年，${url}，访问日期：${date}。`;
    if (LC.lang() === "fr") return `Le Cosmos littéraire. « ${title} ». Le Cosmos littéraire : atlas mondial de la théorie littéraire, 2026. ${url} (consulté le ${date}).`;
    return `The Literary Cosmos. “${title}.” The Literary Cosmos: A Global Atlas of Literary Theory, 2026. ${url}. Accessed ${date}.`;
  }

  function drawSketch(container, id) {
    if (!window.rough || !container) return;
    const movement = LC.volume(id);
    const local = localizedMovement(movement);
    const width = 720;
    const height = 380;
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${t("sketchTitle")}: ${local.title}`);
    const rc = rough.svg(svg);
    const cx = width / 2;
    const cy = height / 2;
    const ink = "#19232c";
    const accent = movement.palette[1];
    const keywords = local.keywords.slice(0, 6);
    const relations = movement.relations.slice(0, 5);
    const label = (x, y, text, size, weight = 600, color = ink) => {
      const node = document.createElementNS(NS, "text");
      node.setAttribute("x", x);
      node.setAttribute("y", y);
      node.setAttribute("text-anchor", "middle");
      node.setAttribute("dominant-baseline", "middle");
      node.setAttribute("font-size", size);
      node.setAttribute("font-weight", weight);
      node.setAttribute("fill", color);
      node.setAttribute("class", "lc-sketch__label");
      node.textContent = text;
      return node;
    };
    keywords.forEach((keyword, index) => {
      const angle = -Math.PI / 2 + (index / keywords.length) * Math.PI * 2;
      const x = cx + Math.cos(angle) * 170;
      const y = cy + Math.sin(angle) * 118;
      svg.appendChild(rc.line(cx, cy, x, y, { stroke: accent, strokeWidth: 1.2, roughness: 1.4, seed: 30 + index }));
      const textWidth = Math.max(70, Array.from(keyword).length * (/[一-鿿]/.test(keyword) ? 16 : 8.4) + 22);
      svg.appendChild(rc.rectangle(x - textWidth / 2, y - 16, textWidth, 32, { stroke: ink, strokeWidth: 1, roughness: 1.3, fill: "rgba(255,255,255,0.65)", fillStyle: "solid", seed: 50 + index }));
      svg.appendChild(label(x, y + 1, keyword, 14, 600));
    });
    relations.forEach((relation, index) => {
      const angle = -Math.PI / 2 + Math.PI / relations.length + (index / relations.length) * Math.PI * 2;
      const x = cx + Math.cos(angle) * 300;
      const y = cy + Math.sin(angle) * 160;
      const group = document.createElementNS(NS, "g");
      group.setAttribute("class", "lc-sketch__relation");
      group.setAttribute("data-open", relation);
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
      const title = LC.volumeTitle(relation);
      group.setAttribute("aria-label", title);
      group.appendChild(rc.line(cx + Math.cos(angle) * 120, cy + Math.sin(angle) * 80, x - Math.cos(angle) * 60, y - Math.sin(angle) * 26, { stroke: "rgba(25,35,44,0.35)", strokeWidth: 1, roughness: 2, seed: 70 + index }));
      group.appendChild(rc.ellipse(x, y, 132, 50, { stroke: LC.volume(relation)?.palette[1] || ink, strokeWidth: 1.4, roughness: 1.6, fill: "rgba(236,235,228,0.9)", fillStyle: "solid", seed: 90 + index }));
      group.appendChild(label(x, y + 1, title.length > 10 ? `${title.slice(0, 10)}…` : title, 13, 600, "#1d4f5c"));
      svg.appendChild(group);
    });
    svg.appendChild(rc.ellipse(cx, cy, 210, 84, { stroke: ink, strokeWidth: 2, roughness: 1.5, fill: accent, fillStyle: "hachure", hachureGap: 7, fillWeight: 1.2, seed: 7 }));
    svg.appendChild(rc.ellipse(cx, cy, 196, 72, { stroke: ink, strokeWidth: 1, roughness: 2.2, seed: 8 }));
    svg.appendChild(label(cx, cy + 1, local.title.length > 12 ? `${local.title.slice(0, 12)}…` : local.title, 20, 900));
    container.replaceChildren(svg);
    svg.addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) return;
      const target = event.target.closest?.("[data-open]");
      if (!target) return;
      event.preventDefault();
      target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    if (window.anime && !LC.reducedMotion()) {
      const paths = svg.querySelectorAll("path");
      paths.forEach((path) => {
        const length = path.getTotalLength?.() || 0;
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });
      LC.whenVisible(container, () => {
        anime({ targets: paths, strokeDashoffset: 0, duration: 900, delay: anime.stagger(8), easing: "easeOutQuad" });
      }, "0px");
    }
  }

  function bindProgress(panel) {
    let bar = panel.querySelector(".lc-read-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "lc-read-progress";
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuemin", "0");
      bar.setAttribute("aria-valuemax", "100");
      bar.innerHTML = "<i></i>";
      panel.prepend(bar);
    }
    bar.setAttribute("aria-label", t("readProgress"));
    if (progressHandler) panel.removeEventListener("scroll", progressHandler);
    progressHandler = () => {
      const max = panel.scrollHeight - panel.clientHeight;
      const value = max > 0 ? Math.round((panel.scrollTop / max) * 100) : 0;
      bar.firstChild.style.transform = `scaleX(${value / 100})`;
      bar.setAttribute("aria-valuenow", String(value));
    };
    panel.addEventListener("scroll", progressHandler, { passive: true });
    progressHandler();
  }

  async function enhance(event) {
    const { id, content } = event.detail;
    const pages = content.querySelector(".world-pages");
    if (!pages) return;
    const deep = pages.querySelector(".world-section--deep");
    const figures = Array.from(pages.querySelectorAll(".world-section")).find((node) => node.querySelector(".portrait-grid"));
    deep?.insertAdjacentHTML("beforebegin", bridgesMarkup(id) + sketchMarkup());
    figures?.insertAdjacentHTML("beforebegin", connectionsMarkup(id));
    pages.insertAdjacentHTML("beforeend", toolsMarkup(id));
    drawSketch(pages.querySelector("[data-sketch]"), id);
    bindProgress(document.querySelector(".world__panel"));

    const notes = pages.querySelector("[data-world-notes]");
    let notesTimer = 0;
    notes?.addEventListener("input", () => {
      window.clearTimeout(notesTimer);
      notesTimer = window.setTimeout(() => {
        LC.progress.update((data) => {
          data.notes = data.notes || {};
          if (notes.value.trim()) data.notes[id] = notes.value;
          else delete data.notes[id];
        });
        pages.querySelector("[data-notes-status]").textContent = t("notesSaved");
      }, 400);
    });
    pages.querySelectorAll("[data-world-copy]").forEach((button) => button.addEventListener("click", () => {
      LC.copyText(button.dataset.worldCopy === "link" ? `${location.origin}${location.pathname}#theory/${id}` : citation(id));
    }));

    const manifest = await loadManifest();
    if (state.currentWorldId !== id || !pages.isConnected) return;
    const anchor = pages.querySelector(".lc-world--sketch");
    anchor?.insertAdjacentHTML("afterend", motionMarkup(id, manifest));
  }

  document.addEventListener("literary-world-open", enhance);
})();
