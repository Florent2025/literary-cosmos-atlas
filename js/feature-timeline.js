/* River of Theory: a horizontally scrolling timeline drawn over a canvas-2D river.
 * Time is mapped piecewise (antiquity compressed, the present expanded); markers are laid out
 * in alternating lanes so close dates never collide. */
(() => {
  const SEGMENTS = [
    { from: -400, to: 1700, start: 0, end: 0.14, era: "timelineEraAncient" },
    { from: 1700, to: 1900, start: 0.14, end: 0.33, era: "timelineEraModern" },
    { from: 1900, to: 2000, start: 0.33, end: 0.72, era: "timelineEraTwentieth" },
    { from: 2000, to: 2027, start: 0.72, end: 1, era: "timelineEraNow" }
  ];
  const KIND_COLORS = { work: "#75f5ff", event: "#ff9d8d", concept: "#e8c877" };
  const LANES = [-1, 1, -2, 2, -3, 3];
  const view = { filter: "all", selected: 0, started: false };
  let root = null;
  let events = [];
  let stage = null;
  let canvas = null;
  let context = null;
  let trackWidth = 4200;
  let frame = 0;
  let particles = [];
  let visible = false;

  const fraction = (year) => {
    const segment = SEGMENTS.find((item) => year >= item.from && year < item.to) || SEGMENTS[SEGMENTS.length - 1];
    const local = (Math.min(year, segment.to) - segment.from) / (segment.to - segment.from);
    return segment.start + local * (segment.end - segment.start);
  };
  // Calendar time is blended with rank, so the crowded recent decades still leave room for every label.
  let knots = [];
  const rankFraction = new Map();
  function buildScale() {
    const n = events.length;
    rankFraction.clear();
    knots = events.map((event, index) => {
      const f = 0.4 * fraction(event.year) + 0.6 * (n > 1 ? index / (n - 1) : 0);
      rankFraction.set(event.key, f);
      return { year: event.year, f };
    });
    knots.unshift({ year: SEGMENTS[0].from, f: 0 });
    knots.push({ year: SEGMENTS[SEGMENTS.length - 1].to, f: 1 });
  }
  const scaled = (year) => {
    const next = knots.findIndex((knot) => knot.year >= year);
    if (next < 0) return 1;
    if (next === 0) return 0;
    const a = knots[next - 1];
    const b = knots[next];
    return b.year === a.year ? b.f : a.f + ((b.f - a.f) * (year - a.year)) / (b.year - a.year);
  };
  const toX = (f) => 90 + f * (trackWidth - 180);
  const xFor = (year) => toX(knots.length ? scaled(year) : fraction(year));

  const yearLabel = (event) => LC.yearLabel(event);

  function layoutLanes(list) {
    const lastX = new Map();
    return list.map((event) => {
      const x = rankFraction.has(event.key) ? toX(rankFraction.get(event.key)) : xFor(event.year);
      const lane = LANES.find((candidate) => (lastX.get(candidate) ?? -Infinity) + 196 < x) ?? LANES[LANES.length - 1];
      lastX.set(lane, x);
      return { ...event, x, lane };
    });
  }

  function visibleEvents() {
    return events.filter((event) => view.filter === "all" || event.kind === view.filter);
  }

  function renderControls() {
    const controls = root.querySelector("[data-timeline-controls]");
    const filters = [["all", "timelineAll"], ["work", "timelineWorks"], ["event", "timelineEvents"], ["concept", "timelineConcepts"]];
    controls.innerHTML = `
      <div class="lc-chips" role="group">
        ${filters.map(([key, label]) => `<button type="button" data-timeline-filter="${key}" aria-pressed="${view.filter === key}">${t(label)}</button>`).join("")}
      </div>
      <div class="lc-chips lc-chips--eras" role="group">
        ${SEGMENTS.map((segment) => `<button type="button" data-timeline-era="${segment.from}">${t(segment.era)}</button>`).join("")}
      </div>
      <div class="lc-timeline__steps">
        <button type="button" class="lc-icon-btn" data-timeline-step="-1" aria-label="${t("timelinePrev")}">←</button>
        <button type="button" class="lc-icon-btn" data-timeline-step="1" aria-label="${t("timelineNext")}">→</button>
      </div>
    `;
  }

  function renderTrack() {
    const track = root.querySelector("[data-timeline-track]");
    const list = layoutLanes(visibleEvents());
    track.style.width = `${trackWidth}px`;
    track.setAttribute("aria-label", t("timelineAria"));
    track.innerHTML = `
      ${SEGMENTS.map((segment) => `<span class="lc-timeline__era" style="left:${xFor(segment.from)}px;width:${xFor(segment.to) - xFor(segment.from)}px">${t(segment.era)}</span>`).join("")}
      ${list.map((event) => {
        const movement = LC.volume(event.volume);
        const color = KIND_COLORS[event.kind] || KIND_COLORS.work;
        const index = events.indexOf(events.find((item) => item.key === event.key));
        const [title] = LC.pick(event);
        return `
          <button type="button" role="listitem" class="lc-mark lc-mark--${event.lane < 0 ? "up" : "down"}" data-timeline-index="${index}"
            style="left:${event.x}px;--lane:${Math.abs(event.lane)};--mark:${color};--glow:${movement?.palette[2] || color}" aria-pressed="${index === view.selected}">
            <span class="lc-mark__stem" aria-hidden="true"></span>
            <span class="lc-mark__dot" aria-hidden="true"></span>
            <span class="lc-mark__label"><b>${LC.escapeHtml(yearLabel(event))}</b><em>${LC.escapeHtml(title)}</em></span>
          </button>
        `;
      }).join("")}
    `;
  }

  function renderCard(animate = true) {
    const card = root.querySelector("[data-timeline-card]");
    const event = events[view.selected];
    if (!event) return;
    const [title, note] = LC.pick(event);
    const movement = LC.volume(event.volume);
    const kindLabel = { work: t("timelineWorks"), event: t("timelineEvents"), concept: t("timelineConcepts") }[event.kind];
    card.style.setProperty("--card-glow", movement?.palette[2] || "#75f5ff");
    card.innerHTML = `
      <div class="lc-timeline__card-head">
        <span class="lc-tag" style="--tag:${KIND_COLORS[event.kind]}">${LC.escapeHtml(kindLabel)}</span>
        <strong class="lc-timeline__card-year">${LC.escapeHtml(yearLabel(event))}</strong>
        <span class="lc-timeline__card-count">${view.selected + 1} / ${events.length}</span>
      </div>
      <h3>${LC.escapeHtml(title)}</h3>
      <p>${LC.escapeHtml(note)}</p>
      ${movement ? `<button type="button" class="lc-button" data-timeline-open="${movement.id}">${t("timelineOpen")} · ${LC.escapeHtml(LC.volumeTitle(movement.id))} →</button>` : ""}
    `;
    root.querySelectorAll("[data-timeline-index]").forEach((mark) => mark.setAttribute("aria-pressed", String(Number(mark.dataset.timelineIndex) === view.selected)));
    if (animate && window.anime && !LC.reducedMotion()) {
      anime.remove(card.children);
      anime({ targets: card.children, opacity: [0, 1], translateY: [10, 0], duration: 420, delay: anime.stagger(50), easing: "easeOutQuad" });
    }
    LC.progress.record("events", event.key);
  }

  function select(index, { scroll = true, focus = false } = {}) {
    const list = visibleEvents();
    if (!list.length) return;
    const bounded = Math.max(0, Math.min(events.length - 1, index));
    view.selected = bounded;
    renderCard();
    const mark = root.querySelector(`[data-timeline-index="${bounded}"]`);
    if (mark && scroll) {
      const target = mark.offsetLeft - stage.clientWidth / 2;
      stage.scrollTo({ left: target, behavior: LC.reducedMotion() ? "auto" : "smooth" });
    }
    if (focus) mark?.focus({ preventScroll: true });
  }

  function step(direction) {
    const list = visibleEvents();
    const position = list.findIndex((event) => event.key === events[view.selected]?.key);
    const next = list[Math.max(0, Math.min(list.length - 1, (position < 0 ? 0 : position) + direction))];
    if (next) select(events.indexOf(next), { focus: true });
  }

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(stage.clientWidth * dpr);
    canvas.height = Math.round(stage.clientHeight * dpr);
    canvas.style.width = `${stage.clientWidth}px`;
    canvas.style.height = `${stage.clientHeight}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // The river: a ribbon whose colour moves from brass (antiquity) through cyan to violet (now).
  function drawRiver(time = 0) {
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    const offset = stage.scrollLeft;
    const mid = height * 0.5;
    context.clearRect(0, 0, width, height);
    const gradient = context.createLinearGradient(-offset, 0, trackWidth - offset, 0);
    gradient.addColorStop(0, "rgba(214,183,106,0.55)");
    gradient.addColorStop(0.33, "rgba(117,245,255,0.5)");
    gradient.addColorStop(0.72, "rgba(137,242,193,0.5)");
    gradient.addColorStop(1, "rgba(159,140,255,0.62)");
    // The river widens toward the present, where the atlas has more to say.
    const edge = (x, sign) => {
      const worldX = x + offset;
      const breadth = 12 + (worldX / trackWidth) * 26;
      return mid + sign * (breadth + Math.sin(worldX / 160 + time / 1800) * 4);
    };
    context.beginPath();
    for (let x = 0; x <= width; x += 8) context.lineTo(x, edge(x, -1));
    for (let x = width; x >= 0; x -= 8) context.lineTo(x, edge(x, 1));
    context.closePath();
    context.fillStyle = gradient;
    context.globalAlpha = 0.28;
    context.fill();
    context.globalAlpha = 1;
    context.lineWidth = 1.2;
    context.strokeStyle = gradient;
    [-1, 1].forEach((sign) => {
      context.beginPath();
      for (let x = 0; x <= width; x += 8) context.lineTo(x, edge(x, sign));
      context.stroke();
    });
    particles.forEach((particle) => {
      const x = ((particle.x - offset) % (trackWidth) + trackWidth) % trackWidth;
      if (x > width + 10) return;
      const top = edge(x, -1);
      const bottom = edge(x, 1);
      const y = top + (bottom - top) * particle.lane;
      context.fillStyle = `rgba(236,248,255,${particle.alpha})`;
      context.beginPath();
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fill();
    });
  }

  function loop(time) {
    frame = 0;
    if (!visible || LC.reducedMotion() || document.hidden) {
      drawRiver(time);
      return;
    }
    particles.forEach((particle) => {
      particle.x += particle.speed;
    });
    drawRiver(time);
    frame = requestAnimationFrame(loop);
  }

  function wake() {
    if (!frame) frame = requestAnimationFrame(loop);
  }

  function animateMarks() {
    if (!window.anime || LC.reducedMotion()) return;
    anime({ targets: root.querySelectorAll(".lc-mark"), opacity: [0, 1], translateY: (element) => [element.classList.contains("lc-mark--up") ? -16 : 16, 0], duration: 620, delay: anime.stagger(18), easing: "easeOutQuad" });
  }

  function bind() {
    root.addEventListener("click", (event) => {
      const mark = event.target.closest("[data-timeline-index]");
      if (mark) {
        select(Number(mark.dataset.timelineIndex), { scroll: false });
        playSound("select");
        return;
      }
      const open = event.target.closest("[data-timeline-open]");
      if (open) {
        LC.openVolume(open.dataset.timelineOpen, open);
        return;
      }
      const filter = event.target.closest("[data-timeline-filter]");
      if (filter) {
        view.filter = filter.dataset.timelineFilter;
        renderControls();
        renderTrack();
        const list = visibleEvents();
        if (!list.some((item) => item.key === events[view.selected]?.key) && list[0]) select(events.indexOf(list[0]));
        else renderCard(false);
        wake();
        return;
      }
      const era = event.target.closest("[data-timeline-era]");
      if (era) {
        stage.scrollTo({ left: xFor(Number(era.dataset.timelineEra)) - 60, behavior: LC.reducedMotion() ? "auto" : "smooth" });
        return;
      }
      const stepButton = event.target.closest("[data-timeline-step]");
      if (stepButton) step(Number(stepButton.dataset.timelineStep));
    });
    root.querySelector("[data-timeline-track]").addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") select(events.indexOf(visibleEvents()[0]), { focus: true });
      else if (event.key === "End") select(events.indexOf(visibleEvents().at(-1)), { focus: true });
      else step(event.key === "ArrowRight" ? 1 : -1);
    });
    stage.addEventListener("scroll", () => {
      if (LC.reducedMotion() || !visible) drawRiver(performance.now());
    }, { passive: true });
    let dragging = null;
    stage.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.target.closest("button")) return;
      dragging = { x: event.clientX, left: stage.scrollLeft };
      stage.classList.add("is-dragging");
    });
    window.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      stage.scrollLeft = dragging.left - (event.clientX - dragging.x);
    });
    window.addEventListener("pointerup", () => {
      dragging = null;
      stage?.classList.remove("is-dragging");
    });
    window.addEventListener("resize", () => {
      sizeCanvas();
      drawRiver(performance.now());
    });
    document.addEventListener("lc-motion", wake);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) wake();
      }).observe(stage);
    } else {
      visible = true;
      wake();
    }
  }

  function init() {
    root = document.querySelector("#timeline");
    if (!root || !window.LC_TIMELINE) return;
    events = window.LC_TIMELINE.map((event, index) => ({ ...event, key: `${event.year}-${index}` })).sort((a, b) => a.year - b.year);
    stage = root.querySelector("[data-timeline-stage]");
    canvas = root.querySelector(".lc-timeline__river");
    context = canvas.getContext("2d");
    trackWidth = Math.max(3600, events.length * 74);
    buildScale();
    particles = Array.from({ length: 160 }, (_, index) => ({
      x: (index * 997) % trackWidth,
      lane: ((index * 37) % 100) / 100,
      speed: 0.25 + ((index * 13) % 10) / 22,
      size: 0.6 + ((index * 7) % 10) / 9,
      alpha: 0.25 + ((index * 11) % 10) / 20
    }));
    renderControls();
    renderTrack();
    view.selected = events.length - 1;
    renderCard(false);
    sizeCanvas();
    bind();
    drawRiver(0);
    LC.whenVisible(root, () => {
      stage.scrollLeft = stage.scrollWidth;
      drawRiver(0);
      animateMarks();
    }, "0px");
    LC.onLanguage(() => {
      renderControls();
      renderTrack();
      renderCard(false);
    });
  }

  window.LCTimeline = {
    focusEvent(rawIndex) {
      const source = window.LC_TIMELINE?.[rawIndex];
      if (!root || !source) return;
      if (view.filter !== "all") {
        view.filter = "all";
        renderControls();
        renderTrack();
      }
      const target = events.findIndex((event) => event.key === `${source.year}-${rawIndex}`);
      root.scrollIntoView({ behavior: LC.reducedMotion() ? "auto" : "smooth", block: "start" });
      window.setTimeout(() => select(target, { focus: true }), LC.reducedMotion() ? 0 : 520);
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
