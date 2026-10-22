/* Frontier Radar 2026: four sectors × four maturity rings of current research directions.
 * Canvas draws the instrument; blips are buttons; a CSS sweep and per-blip pings share one period. */
(() => {
  const SWEEP_SECONDS = 8;
  const RING_RADII = [0.27, 0.52, 0.76, 1];
  const SECTOR_COLORS = { form: "#75f5ff", subject: "#b99cff", world: "#89f2c1", method: "#e8c877" };
  const view = { sector: "all", active: null };
  let root = null;
  let data = null;
  let placed = [];

  function place() {
    const sectors = data.sectors.map((sector) => sector.id);
    const rings = data.rings.map((ring) => ring.id);
    return data.blips.map((blip) => {
      const sectorIndex = sectors.indexOf(blip.sector);
      const ringIndex = rings.indexOf(blip.ring);
      const peers = data.blips.filter((item) => item.sector === blip.sector && item.ring === blip.ring);
      const slot = peers.indexOf(blip);
      const start = -90 + sectorIndex * 90;
      const angle = start + ((slot + 1) / (peers.length + 1)) * 90;
      const inner = ringIndex === 0 ? 0.06 : RING_RADII[ringIndex - 1];
      const outer = RING_RADII[ringIndex];
      const radius = inner + (outer - inner) * (peers.length > 2 ? (slot % 2 ? 0.66 : 0.38) : 0.52);
      return { ...blip, angle, radius, sectorIndex, ringIndex };
    });
  }

  function drawInstrument() {
    const canvas = root.querySelector(".lc-radar__canvas");
    const size = canvas.parentElement.clientWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    const context = canvas.getContext("2d");
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const centre = size / 2;
    const radius = size / 2 - 6;
    context.clearRect(0, 0, size, size);
    data.sectors.forEach((sector, index) => {
      const start = ((-90 + index * 90) * Math.PI) / 180;
      const end = start + Math.PI / 2;
      const dimmed = view.sector !== "all" && view.sector !== sector.id;
      const gradient = context.createRadialGradient(centre, centre, 0, centre, centre, radius);
      gradient.addColorStop(0, `${SECTOR_COLORS[sector.id]}${dimmed ? "05" : "1f"}`);
      gradient.addColorStop(1, `${SECTOR_COLORS[sector.id]}${dimmed ? "02" : "08"}`);
      context.beginPath();
      context.moveTo(centre, centre);
      context.arc(centre, centre, radius, start, end);
      context.closePath();
      context.fillStyle = gradient;
      context.fill();
    });
    RING_RADII.forEach((ring, index) => {
      context.beginPath();
      context.arc(centre, centre, ring * radius, 0, Math.PI * 2);
      context.strokeStyle = index === RING_RADII.length - 1 ? "rgba(214,183,106,0.55)" : "rgba(219,232,237,0.18)";
      context.lineWidth = index === RING_RADII.length - 1 ? 1.4 : 1;
      context.setLineDash(index === RING_RADII.length - 1 ? [] : [3, 5]);
      context.stroke();
    });
    context.setLineDash([]);
    for (let tick = 0; tick < 72; tick += 1) {
      const angle = (tick / 72) * Math.PI * 2;
      const long = tick % 6 === 0;
      context.beginPath();
      context.moveTo(centre + Math.cos(angle) * (radius - (long ? 12 : 6)), centre + Math.sin(angle) * (radius - (long ? 12 : 6)));
      context.lineTo(centre + Math.cos(angle) * radius, centre + Math.sin(angle) * radius);
      context.strokeStyle = long ? "rgba(214,183,106,0.7)" : "rgba(214,183,106,0.3)";
      context.stroke();
    }
    [0, 1, 2, 3].forEach((index) => {
      const angle = ((-90 + index * 90) * Math.PI) / 180;
      context.beginPath();
      context.moveTo(centre, centre);
      context.lineTo(centre + Math.cos(angle) * radius, centre + Math.sin(angle) * radius);
      context.strokeStyle = "rgba(219,232,237,0.22)";
      context.stroke();
    });
  }

  function blipPosition(blip) {
    const rad = (blip.angle * Math.PI) / 180;
    return { x: 50 + Math.cos(rad) * blip.radius * 50, y: 50 + Math.sin(rad) * blip.radius * 50 };
  }

  function renderBlips() {
    const layer = root.querySelector("[data-radar-blips]");
    layer.innerHTML = placed.map((blip, index) => {
      const { x, y } = blipPosition(blip);
      const [name] = LC.pick(blip);
      const delay = (((blip.angle + 90 + 360) % 360) / 360) * SWEEP_SECONDS;
      const hidden = view.sector !== "all" && view.sector !== blip.sector;
      return `<button type="button" class="lc-blip lc-blip--${blip.ring}" data-radar-blip="${index}" style="left:${x}%;top:${y}%;--blip:${SECTOR_COLORS[blip.sector]};--ping-delay:${delay.toFixed(2)}s" ${hidden ? "hidden" : ""} aria-label="${LC.escapeHtml(name)}"><span>${index + 1}</span></button>`;
    }).join("");
    const sectorLabels = root.querySelector("[data-radar-sectors]");
    sectorLabels.innerHTML = data.sectors.map((sector, index) => `<span class="lc-radar__sector lc-radar__sector--${index}" style="--sector:${SECTOR_COLORS[sector.id]}">${LC.escapeHtml(LC.pick(sector))}</span>`).join("");
    root.querySelector("[data-radar-rings]").innerHTML = data.rings.map((ring, index) => `<span style="bottom:${50 + (index === 0 ? RING_RADII[0] / 2 : (RING_RADII[index - 1] + RING_RADII[index]) / 2) * 50}%">${LC.escapeHtml(LC.pick(ring))}</span>`).join("");
  }

  function renderIndex() {
    const index = root.querySelector("[data-radar-index]");
    index.innerHTML = data.rings.map((ring) => `
      <div class="lc-radar__ring-list">
        <strong>${LC.escapeHtml(LC.pick(ring))}</strong>
        <div>${placed.map((blip, number) => ({ blip, number })).filter(({ blip }) => blip.ring === ring.id && (view.sector === "all" || blip.sector === view.sector)).map(({ blip, number }) => `
          <button type="button" data-radar-blip="${number}" style="--blip:${SECTOR_COLORS[blip.sector]}"><i>${number + 1}</i>${LC.escapeHtml(LC.pick(blip)[0])}</button>
        `).join("")}</div>
      </div>
    `).join("");
  }

  function renderFilters() {
    root.querySelector("[data-radar-filters]").innerHTML = `
      <button type="button" data-radar-sector="all" aria-pressed="${view.sector === "all"}">${t("radarAllSectors")}</button>
      ${data.sectors.map((sector) => `<button type="button" data-radar-sector="${sector.id}" aria-pressed="${view.sector === sector.id}" style="--chip:${SECTOR_COLORS[sector.id]}">${LC.escapeHtml(LC.pick(sector))}</button>`).join("")}
    `;
  }

  function renderCard() {
    const card = root.querySelector("[data-radar-card]");
    const blip = placed[view.active ?? 0];
    if (!blip) return;
    const [name, summary] = LC.pick(blip);
    const sector = data.sectors.find((item) => item.id === blip.sector);
    const ring = data.rings.find((item) => item.id === blip.ring);
    card.style.setProperty("--card-glow", SECTOR_COLORS[blip.sector]);
    card.innerHTML = `
      <div class="lc-radar__card-tags">
        <span class="lc-tag" style="--tag:${SECTOR_COLORS[blip.sector]}">${LC.escapeHtml(LC.pick(sector))}</span>
        <span class="lc-tag lc-tag--ring">${LC.escapeHtml(LC.pick(ring))}</span>
        <span class="lc-radar__card-number">${(view.active ?? 0) + 1} / ${placed.length}</span>
      </div>
      <h3>${LC.escapeHtml(name)}</h3>
      <p>${LC.escapeHtml(summary)}</p>
      <strong class="lc-radar__refs-title">${t("radarRefs")}</strong>
      <ul class="lc-radar__refs">${blip.refs.map((ref) => `<li>${LC.escapeHtml(ref)}</li>`).join("")}</ul>
      <button type="button" class="lc-button" data-radar-open="${blip.volume}">${t("radarOpen")} · ${LC.escapeHtml(LC.volumeTitle(blip.volume))} →</button>
    `;
    root.querySelectorAll("[data-radar-blip]").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.radarBlip) === view.active));
    if (window.anime && !LC.reducedMotion()) {
      anime.remove(card.children);
      anime({ targets: card.children, opacity: [0, 1], translateX: [8, 0], duration: 360, delay: anime.stagger(40), easing: "easeOutQuad" });
    }
  }

  function activate(index, focus = false) {
    if (index === view.active) return;
    view.active = index;
    renderCard();
    if (focus) root.querySelector(`.lc-blip[data-radar-blip="${index}"]`)?.focus({ preventScroll: true });
  }

  function render() {
    renderFilters();
    drawInstrument();
    renderBlips();
    renderIndex();
    renderCard();
    root.querySelector(".lc-radar__chart").setAttribute("aria-label", t("radarAria"));
  }

  function bind() {
    root.addEventListener("click", (event) => {
      const blip = event.target.closest("[data-radar-blip]");
      if (blip) {
        activate(Number(blip.dataset.radarBlip));
        playSound("select");
        return;
      }
      const open = event.target.closest("[data-radar-open]");
      if (open) {
        LC.openVolume(open.dataset.radarOpen, open);
        return;
      }
      const sector = event.target.closest("[data-radar-sector]");
      if (sector) {
        view.sector = sector.dataset.radarSector;
        const first = placed.findIndex((item) => view.sector === "all" || item.sector === view.sector);
        view.active = null;
        render();
        activate(first);
      }
    });
    root.addEventListener("pointerover", (event) => {
      const blip = event.target.closest(".lc-blip");
      if (blip && event.pointerType === "mouse") activate(Number(blip.dataset.radarBlip));
    });
    root.addEventListener("focusin", (event) => {
      const blip = event.target.closest(".lc-blip");
      if (blip) activate(Number(blip.dataset.radarBlip));
    });
    root.querySelector("[data-radar-blips]").addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
      event.preventDefault();
      const order = placed.map((blip, index) => ({ blip, index }))
        .filter(({ blip }) => view.sector === "all" || blip.sector === view.sector)
        .sort((a, b) => (a.blip.angle + 90 + 360) % 360 - (b.blip.angle + 90 + 360) % 360);
      const position = order.findIndex(({ index }) => index === view.active);
      const step = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = order[(position + step + order.length) % order.length];
      if (next) activate(next.index, true);
    });
    window.addEventListener("resize", drawInstrument);
  }

  function init() {
    root = document.querySelector("#radar");
    data = window.LC_RADAR;
    if (!root || !data) return;
    placed = place();
    view.active = 0;
    root.querySelector("[data-radar-updated]").dataset.updated = data.updated;
    bind();
    render();
    LC.whenVisible(root, () => {
      root.classList.add("is-live");
      if (window.anime && !LC.reducedMotion()) {
        anime({ targets: root.querySelectorAll(".lc-blip"), scale: [0, 1], opacity: [0, 1], duration: 700, delay: anime.stagger(40, { from: "center" }), easing: "easeOutBack" });
      }
    }, "0px");
    LC.onLanguage(render);
  }

  window.LCRadar = {
    focusBlip(index) {
      if (!root || !placed[index]) return;
      if (view.sector !== "all" && placed[index].sector !== view.sector) {
        view.sector = "all";
        render();
      }
      root.scrollIntoView({ behavior: LC.reducedMotion() ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => {
        view.active = null;
        activate(index, true);
      }, LC.reducedMotion() ? 0 : 520);
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
