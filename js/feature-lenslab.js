/* Lens Lab: read one public-domain passage through different theories.
 * Marked phrases are annotated with rough.js strokes that draw themselves like a pen;
 * the data lens computes frequencies and sentence rhythm in the browser. */
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const STYLES = ["highlight", "underline", "circle", "box", "bracket"];
  const STOPWORDS = new Set("a an and are as at be by for from had has have he her his i in is it its of on or she that the their them they this to was were what which who will with would 's ’s".split(" "));
  const view = { passage: 0, lens: 0 };
  let root = null;
  let data = null;
  let resizeObserver = null;

  const passage = () => data.passages[view.passage];
  const isData = () => view.lens === passage().lenses.length;

  function markedHtml(text, marks) {
    const intervals = [];
    marks.forEach((mark, index) => {
      const start = text.indexOf(mark);
      if (start < 0) return;
      const end = start + mark.length;
      if (intervals.some((item) => start < item.end && end > item.start)) return;
      intervals.push({ start, end, index });
    });
    intervals.sort((a, b) => a.start - b.start);
    let cursor = 0;
    let html = "";
    intervals.forEach(({ start, end, index }) => {
      html += LC.escapeHtml(text.slice(cursor, start));
      html += `<mark class="lc-lens-mark" data-mark="${index}">${LC.escapeHtml(text.slice(start, end))}</mark>`;
      cursor = end;
    });
    html += LC.escapeHtml(text.slice(cursor));
    return html.replace(/\n/g, "<br>");
  }

  function renderTabs() {
    root.querySelector("[data-lab-passages]").innerHTML = data.passages.map((item, index) => `
      <button type="button" data-lab-passage="${index}" aria-pressed="${index === view.passage}">
        <strong>${LC.escapeHtml(LC.pick(item.title))}</strong><span>${LC.escapeHtml(LC.pick(item.author))} · ${LC.escapeHtml(item.year)}</span>
      </button>
    `).join("");
    const current = passage();
    root.querySelector("[data-lab-lenses]").innerHTML = `
      ${current.lenses.map((lens, index) => {
        const movement = LC.volume(lens.volume);
        return `<button type="button" data-lab-lens="${index}" aria-pressed="${index === view.lens}" style="--lens:${movement?.palette[2] || "#75f5ff"}">${LC.escapeHtml(LC.volumeTitle(lens.volume))}</button>`;
      }).join("")}
      <button type="button" data-lab-lens="${current.lenses.length}" aria-pressed="${isData()}" style="--lens:#e8c877">${t("labData")}</button>
    `;
  }

  function renderText() {
    const current = passage();
    const lens = current.lenses[view.lens];
    const textRoot = root.querySelector("[data-lab-text]");
    textRoot.lang = current.lang === "zh" ? "zh-CN" : current.lang;
    textRoot.classList.toggle("is-cjk", current.lang === "zh");
    textRoot.innerHTML = markedHtml(current.text, lens ? lens.marks : []);
    const translation = current.translation[LC.lang()];
    const translationRoot = root.querySelector("[data-lab-translation]");
    translationRoot.hidden = !translation || current.lang === LC.lang();
    translationRoot.innerHTML = translation ? `<strong>${t("labTranslation")}</strong><p>${LC.escapeHtml(translation).replace(/\n/g, "<br>")}</p><small>${t("labTranslationNote")}</small>` : "";
    root.querySelector("[data-lab-source]").textContent = `${LC.pick(current.author)} · ${LC.pick(current.title)} · ${current.year}`;
  }

  function drawAnnotations(animate = true) {
    const stage = root.querySelector("[data-lab-stage]");
    const svg = root.querySelector(".lc-lab__ink");
    svg.innerHTML = "";
    if (!window.rough || isData()) return;
    const box = stage.getBoundingClientRect();
    svg.setAttribute("width", box.width);
    svg.setAttribute("height", box.height);
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    const rc = rough.svg(svg);
    const movement = LC.volume(passage().lenses[view.lens].volume);
    const color = movement?.palette[2] || "#75f5ff";
    const style = STYLES[view.lens % STYLES.length];
    const shapes = [];
    root.querySelectorAll(".lc-lens-mark").forEach((mark, markIndex) => {
      Array.from(mark.getClientRects()).forEach((rect, rectIndex) => {
        const x = rect.left - box.left;
        const y = rect.top - box.top;
        const w = rect.width;
        const h = rect.height;
        const seed = 13 + markIndex * 7 + rectIndex;
        let shape;
        if (style === "highlight") {
          shape = rc.rectangle(x - 2, y + h * 0.12, w + 4, h * 0.82, { fill: color, fillStyle: "zigzag", fillWeight: 2.2, hachureGap: 4, stroke: "none", roughness: 1.4, seed });
          shape.classList.add("is-fill");
        } else if (style === "underline") {
          shape = rc.line(x, y + h + 2, x + w, y + h + 2, { stroke: color, strokeWidth: 2.2, roughness: 1.6, bowing: 2, seed });
        } else if (style === "circle") {
          shape = rc.ellipse(x + w / 2, y + h / 2, w + 22, h + 16, { stroke: color, strokeWidth: 1.8, roughness: 1.3, seed });
        } else if (style === "box") {
          shape = rc.rectangle(x - 4, y - 2, w + 8, h + 4, { stroke: color, strokeWidth: 1.8, roughness: 1.6, seed });
        } else {
          shape = rc.linearPath([[x - 5, y], [x - 9, y], [x - 9, y + h], [x - 5, y + h]], { stroke: color, strokeWidth: 2, roughness: 1, seed });
          const tail = rc.linearPath([[x + w + 5, y], [x + w + 9, y], [x + w + 9, y + h], [x + w + 5, y + h]], { stroke: color, strokeWidth: 2, roughness: 1, seed: seed + 1 });
          svg.appendChild(tail);
          shapes.push(tail);
        }
        svg.appendChild(shape);
        shapes.push(shape);
      });
    });
    if (!animate || !window.anime || LC.reducedMotion()) return;
    const paths = shapes.flatMap((shape) => Array.from(shape.querySelectorAll("path")));
    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 0;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
    anime({ targets: paths, strokeDashoffset: 0, duration: 700, delay: anime.stagger(60), easing: "easeOutQuad" });
  }

  function tokens(text, language) {
    if (language === "zh") return Array.from(text).filter((character) => /[一-鿿]/.test(character));
    return (text.toLowerCase().match(/[a-z’']+/g) || []).filter((word) => !STOPWORDS.has(word) && word.length > 1);
  }

  function renderData() {
    const current = passage();
    const counts = new Map();
    tokens(current.text, current.lang).forEach((token) => counts.set(token, (counts.get(token) || 0) + 1));
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 8);
    const max = top[0]?.[1] || 1;
    const sentences = current.text.split(/(?<=[。！？!?；;:：])|\n/).map((part) => part.trim()).filter(Boolean);
    const lengths = sentences.map((sentence) => tokens(sentence, current.lang).length || sentence.length);
    const panel = root.querySelector("[data-lab-note]");
    panel.innerHTML = `
      <span class="lc-lab__kicker">${t("labData")}</span>
      <p>${t("labDataLead")}</p>
      <strong>${t("labFrequency")}</strong>
      <div class="lc-lab__bars">${top.map(([token, count]) => `<div class="lc-lab__bar"><span>${LC.escapeHtml(token)}</span><i style="--w:${(count / max) * 100}%"></i><b>${count}</b></div>`).join("")}</div>
      <strong>${t("labRhythm")}</strong>
      <canvas class="lc-lab__rhythm" width="560" height="120" aria-label="${t("labRhythm")}: ${lengths.join(", ")}"></canvas>
    `;
    const canvas = panel.querySelector(".lc-lab__rhythm");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const peak = Math.max(...lengths, 1);
    context.clearRect(0, 0, width, height);
    context.strokeStyle = "rgba(25,35,44,0.18)";
    context.beginPath();
    context.moveTo(0, height - 18);
    context.lineTo(width, height - 18);
    context.stroke();
    const step = width / Math.max(1, lengths.length);
    lengths.forEach((length, index) => {
      const barHeight = (length / peak) * (height - 34);
      const x = index * step + step * 0.2;
      context.fillStyle = index % 2 ? "rgba(61,117,130,0.75)" : "rgba(180,140,60,0.8)";
      context.fillRect(x, height - 18 - barHeight, step * 0.6, barHeight);
      context.fillStyle = "rgba(25,35,44,0.7)";
      context.font = "11px 'Space Grotesk', sans-serif";
      context.fillText(String(length), x, height - 4);
    });
    if (window.anime && !LC.reducedMotion()) {
      anime({ targets: panel.querySelectorAll(".lc-lab__bar i"), width: (element) => ["0%", element.style.getPropertyValue("--w")], duration: 700, delay: anime.stagger(50), easing: "easeOutCubic" });
    }
  }

  function renderNote() {
    if (isData()) {
      renderData();
      return;
    }
    const current = passage();
    const lens = current.lenses[view.lens];
    const [heading, note, question] = LC.pick(lens);
    const movement = LC.volume(lens.volume);
    const panel = root.querySelector("[data-lab-note]");
    panel.style.setProperty("--lens", movement?.palette[2] || "#75f5ff");
    panel.innerHTML = `
      <span class="lc-lab__kicker">${LC.escapeHtml(LC.volumeTitle(lens.volume))}</span>
      <h3>${LC.escapeHtml(heading)}</h3>
      <p>${LC.escapeHtml(note)}</p>
      <div class="lc-lab__question"><strong>${t("labQuestion")}</strong><p>${LC.escapeHtml(question)}</p></div>
      <button type="button" class="lc-button lc-button--ink" data-lab-open="${lens.volume}">${t("labOpen")} →</button>
    `;
    if (window.anime && !LC.reducedMotion()) {
      anime({ targets: panel.children, opacity: [0, 1], translateY: [8, 0], duration: 380, delay: anime.stagger(45), easing: "easeOutQuad" });
    }
    LC.progress.record("lenses", `${current.id}:${lens.volume}`);
  }

  function render(animate = true) {
    renderTabs();
    renderText();
    renderNote();
    requestAnimationFrame(() => drawAnnotations(animate));
  }

  function bind() {
    root.addEventListener("click", (event) => {
      const passageButton = event.target.closest("[data-lab-passage]");
      if (passageButton) {
        view.passage = Number(passageButton.dataset.labPassage);
        view.lens = 0;
        render();
        playSound("book");
        return;
      }
      const lensButton = event.target.closest("[data-lab-lens]");
      if (lensButton) {
        view.lens = Number(lensButton.dataset.labLens);
        render();
        playSound("select");
        return;
      }
      const open = event.target.closest("[data-lab-open]");
      if (open) LC.openVolume(open.dataset.labOpen, open);
    });
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => drawAnnotations(false));
      resizeObserver.observe(root.querySelector("[data-lab-stage]"));
    }
    document.fonts?.ready?.then(() => drawAnnotations(false));
  }

  function init() {
    root = document.querySelector("#lenslab");
    data = window.LC_LENSLAB;
    if (!root || !data) return;
    bind();
    render(false);
    LC.whenVisible(root, () => drawAnnotations(true), "-80px");
    LC.onLanguage(() => render(false));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
