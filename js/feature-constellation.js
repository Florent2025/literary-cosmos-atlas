/* Constellation index: a hand-drawn (rough.js) star chart of the 42 volumes.
 * Force-directed layout grouped by theme, SVG ink layer that scales crisply, DOM star buttons
 * for keyboard and screen-reader access, pan/zoom/pinch, search, collection filters and a detail card. */
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const WORLD = { width: 1600, height: 1000 };
  const CLUSTERS = {
    poetics: [330, 300],
    form: [800, 240],
    subject: [1290, 330],
    history: [520, 760],
    world: [1150, 730]
  };
  const COLLECTIONS = ["classics", "foundations", "frontiers", "regions", "synthesis"];
  const view = { scale: 1, tx: 0, ty: 0, userMoved: false, hidden: new Set(), query: "", active: null, pinned: null };
  let root = null;
  let layout = null;
  let edges = [];
  let drawn = false;

  const groupColor = (key) => (GRAPH_GROUPS.find((group) => group.key === key) || GRAPH_GROUPS[0]).color;
  const hash = (text) => Array.from(text).reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7);

  function buildEdges() {
    const seen = new Set();
    const list = [];
    MOVEMENTS.forEach((source) => {
      source.relations.forEach((targetId) => {
        const target = MOVEMENTS.find((movement) => movement.id === targetId);
        if (!target || target.id === source.id) return;
        const key = [source.id, target.id].sort().join("|");
        if (seen.has(key)) return;
        seen.add(key);
        list.push({ from: source.id, to: target.id, type: graphEdgeType(source, target) });
      });
    });
    return list;
  }

  // Deterministic layout: each theme cluster starts as a golden-angle spiral (best-connected volumes at its heart),
  // relaxes under weak relation springs and cluster gravity, then a hard pass removes every label overlap.
  // Boxes are in world units sized for the overview zoom, where a star label spans roughly 190 × 46 units.
  const BOX = { width: 196, height: 50 };
  function computeLayout() {
    const degree = {};
    edges.forEach((edge) => {
      degree[edge.from] = (degree[edge.from] || 0) + 1;
      degree[edge.to] = (degree[edge.to] || 0) + 1;
    });
    const groups = {};
    MOVEMENTS.forEach((movement) => {
      const group = graphGroupFor(movement);
      (groups[group] ||= []).push(movement);
    });
    const nodes = [];
    Object.entries(groups).forEach(([group, members]) => {
      const [cx, cy] = CLUSTERS[group];
      const offset = (hash(group) % 100) / 50;
      members
        .slice()
        .sort((a, b) => (degree[b.id] || 0) - (degree[a.id] || 0) || a.id.localeCompare(b.id))
        .forEach((movement, slot) => {
          const angle = slot * 2.39996 + offset;
          const radius = 58 * Math.sqrt(slot + 0.3);
          nodes.push({
            id: movement.id, group, collection: movement.collection,
            x: cx + Math.cos(angle) * radius * 1.5, y: cy + Math.sin(angle) * radius * 0.75, vx: 0, vy: 0
          });
        });
    });
    const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
    const bounds = (node) => {
      node.x = Math.max(BOX.width / 2 + 10, Math.min(WORLD.width - BOX.width / 2 - 10, node.x));
      node.y = Math.max(BOX.height / 2 + 30, Math.min(WORLD.height - BOX.height / 2 - 20, node.y));
    };
    const separate = (strength) => {
      let moved = false;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const overlapX = BOX.width - Math.abs(dx);
          const overlapY = BOX.height - Math.abs(dy);
          if (overlapX <= 0 || overlapY <= 0) continue;
          moved = true;
          // Push apart along the axis that needs the smaller move (relative to the box shape).
          if (overlapX / BOX.width < overlapY / BOX.height) {
            const shift = (dx >= 0 ? 1 : -1) * overlapX * 0.5 * strength;
            a.x -= shift; b.x += shift;
          } else {
            const shift = (dy >= 0 ? 1 : -1) * overlapY * 0.5 * strength;
            a.y -= shift; b.y += shift;
          }
        }
      }
      return moved;
    };
    for (let iteration = 0; iteration < 320; iteration += 1) {
      const cooling = 1 - iteration / 360;
      edges.forEach((edge) => {
        const a = byId[edge.from];
        const b = byId[edge.to];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const pull = Math.max(-2.5, Math.min(2.5, (distance - 300) * 0.004));
        a.vx += (dx / distance) * pull; a.vy += (dy / distance) * pull;
        b.vx -= (dx / distance) * pull; b.vy -= (dy / distance) * pull;
      });
      nodes.forEach((node) => {
        const [cx, cy] = CLUSTERS[node.group];
        node.vx += (cx - node.x) * 0.018;
        node.vy += (cy - node.y) * 0.03;
        node.x += Math.max(-18, Math.min(18, node.vx)) * cooling;
        node.y += Math.max(-18, Math.min(18, node.vy)) * cooling;
        node.vx *= 0.55;
        node.vy *= 0.55;
      });
      separate(0.6);
      nodes.forEach(bounds);
    }
    for (let pass = 0; pass < 400; pass += 1) {
      const moved = separate(1);
      nodes.forEach(bounds);
      if (!moved) break;
    }
    return byId;
  }

  function svgEl(name, attributes = {}) {
    const element = document.createElementNS(NS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function drawInk(svg) {
    const rc = rough.svg(svg);
    const backdrop = svgEl("g", { class: "lc-ink__backdrop" });
    [170, 330, 490, 650].forEach((radius, index) => {
      backdrop.appendChild(rc.ellipse(WORLD.width / 2, WORLD.height / 2, radius * 2.2, radius * 1.45, {
        stroke: index % 2 ? "rgba(214,183,106,0.16)" : "rgba(122,228,239,0.14)", strokeWidth: 0.8, roughness: 0.7, seed: 11 + index
      }));
    });
    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      backdrop.appendChild(rc.line(WORLD.width / 2, WORLD.height / 2, WORLD.width / 2 + Math.cos(angle) * 760, WORLD.height / 2 + Math.sin(angle) * 500, {
        stroke: "rgba(122,228,239,0.05)", strokeWidth: 0.6, roughness: 0.4, seed: 40 + i
      }));
    }
    for (let i = 0; i < 140; i += 1) {
      const x = (hash(`sx${i}`) % WORLD.width);
      const y = (hash(`sy${i}`) % WORLD.height);
      backdrop.appendChild(svgEl("circle", { cx: x, cy: y, r: (i % 5) / 4 + 0.4, fill: "rgba(236,243,248,0.5)" }));
    }
    svg.appendChild(backdrop);

    const hulls = svgEl("g", { class: "lc-ink__hulls" });
    GRAPH_GROUPS.forEach((group, index) => {
      const members = Object.values(layout).filter((node) => node.group === group.key);
      if (!members.length) return;
      const xs = members.map((node) => node.x);
      const ys = members.map((node) => node.y);
      const minX = Math.min(...xs) - 110;
      const maxX = Math.max(...xs) + 110;
      const minY = Math.min(...ys) - 70;
      const maxY = Math.max(...ys) + 70;
      const shape = rc.ellipse((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY, {
        stroke: group.color, strokeWidth: 1, roughness: 1.6, bowing: 2, seed: 70 + index,
        fill: group.color, fillStyle: "hachure", hachureGap: 16, hachureAngle: -38 + index * 18, fillWeight: 0.5
      });
      shape.setAttribute("class", "lc-hull");
      shape.style.setProperty("--hull", group.color);
      hulls.appendChild(shape);
      const label = svgEl("text", { x: (minX + maxX) / 2, y: minY + 6, class: "lc-hull__label", "data-group": group.key, "text-anchor": "middle" });
      label.style.fill = group.color;
      hulls.appendChild(label);
    });
    svg.appendChild(hulls);

    const edgeLayer = svgEl("g", { class: "lc-ink__edges" });
    edges.forEach((edge, index) => {
      const a = layout[edge.from];
      const b = layout[edge.to];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const length = Math.hypot(dx, dy) || 1;
      const bend = ((hash(edge.from + edge.to) % 2) ? 1 : -1) * Math.min(90, length * 0.16);
      const cx = mx - (dy / length) * bend;
      const cy = my + (dx / length) * bend;
      const color = GRAPH_EDGE_TYPES[edge.type]?.color || "#75f5ff";
      const curve = rc.curve([[a.x, a.y], [cx, cy], [b.x, b.y]], { stroke: color, strokeWidth: 1.15, roughness: 0.9, bowing: 0.6, seed: 200 + index });
      curve.setAttribute("class", "lc-edge");
      curve.dataset.from = edge.from;
      curve.dataset.to = edge.to;
      curve.dataset.type = edge.type;
      edgeLayer.appendChild(curve);
    });
    svg.appendChild(edgeLayer);
  }

  function nodeMarkup(movement) {
    const local = localizedMovement(movement);
    const node = layout[movement.id];
    return `
      <button type="button" class="lc-star" data-star="${movement.id}" data-collection="${movement.collection}" style="--star:${movement.palette[2]};--star-soft:${movement.palette[1]};--group:${groupColor(node.group)}">
        <i aria-hidden="true"></i>
        <span>${LC.escapeHtml(local.title)}</span>
        <em>${LC.escapeHtml(local.lens.split("·")[0].trim())}</em>
      </button>
    `;
  }

  function relatedIds(id) {
    const movement = LC.volume(id);
    if (!movement) return new Set();
    return new Set([id, ...movement.relations, ...MOVEMENTS.filter((item) => item.relations.includes(id)).map((item) => item.id)]);
  }

  function renderDetail(id) {
    const panel = root.querySelector("[data-chart-detail]");
    if (!id) {
      panel.innerHTML = `<p class="lc-chart__detail-empty">${t("chartDetailEmpty")}</p>`;
      return;
    }
    const movement = LC.volume(id);
    const local = localizedMovement(movement);
    const links = [...relatedIds(id)].filter((item) => item !== id);
    panel.innerHTML = `
      <span class="lc-chart__detail-kicker" style="color:${movement.palette[2]}">${LC.escapeHtml(collectionLabel(movement))} · ${LC.escapeHtml(local.era)}</span>
      <h3>${LC.escapeHtml(local.title)}</h3>
      <p class="lc-chart__detail-lens">${LC.escapeHtml(local.lens)}</p>
      <p>${LC.escapeHtml(local.intro).slice(0, 180)}${local.intro.length > 180 ? "…" : ""}</p>
      <strong>${t("chartLinks")}</strong>
      <div class="lc-chart__detail-links">${links.map((linkId) => `<button type="button" data-chart-focus="${linkId}">${LC.escapeHtml(LC.volumeTitle(linkId))}</button>`).join("")}</div>
      <button type="button" class="lc-button lc-button--primary" data-chart-open="${id}">${t("chartOpen")} →</button>
    `;
  }

  function trace(id) {
    view.active = id;
    const chart = root.querySelector(".lc-chart");
    const linked = id ? relatedIds(id) : null;
    chart.classList.toggle("is-tracing", Boolean(id));
    root.querySelectorAll(".lc-star").forEach((star) => star.classList.toggle("is-linked", Boolean(linked?.has(star.dataset.star))));
    root.querySelectorAll(".lc-edge").forEach((edge) => edge.classList.toggle("is-linked", Boolean(id) && (edge.dataset.from === id || edge.dataset.to === id)));
    renderDetail(id || view.pinned);
  }

  function applyFilters() {
    const query = view.query.trim().toLocaleLowerCase();
    let firstMatch = null;
    root.querySelectorAll(".lc-star").forEach((star) => {
      const hidden = view.hidden.has(star.dataset.collection);
      const movement = LC.volume(star.dataset.star);
      const local = localizedMovement(movement);
      const haystack = `${local.title} ${local.lens} ${local.era} ${local.region} ${local.keywords.join(" ")} ${movement.title}`.toLocaleLowerCase();
      const match = Boolean(query) && haystack.includes(query);
      star.hidden = hidden;
      star.classList.toggle("is-match", match);
      star.classList.toggle("is-dim", Boolean(query) && !match);
      if (match && !hidden && !firstMatch) firstMatch = star;
    });
    root.querySelectorAll(".lc-edge").forEach((edge) => {
      const hidden = view.hidden.has(LC.volume(edge.dataset.from)?.collection) || view.hidden.has(LC.volume(edge.dataset.to)?.collection);
      edge.classList.toggle("is-hidden", hidden);
    });
    return firstMatch;
  }

  function placeStars() {
    const viewport = root.querySelector("[data-chart-viewport]");
    const ink = root.querySelector(".lc-chart__ink");
    ink.style.transform = `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`;
    const nodeScale = Math.max(0.62, Math.min(1, view.scale * 1.35));
    viewport.style.setProperty("--star-scale", nodeScale.toFixed(3));
    // Progressive disclosure: subtitles appear once the reader zooms in.
    viewport.classList.toggle("is-far", view.scale < 0.8);
    root.querySelectorAll(".lc-star").forEach((star) => {
      const node = layout[star.dataset.star];
      star.style.transform = `translate(${(node.x * view.scale + view.tx).toFixed(1)}px, ${(node.y * view.scale + view.ty).toFixed(1)}px) translate(-50%, -50%) scale(var(--star-scale))`;
    });
  }

  function fit() {
    const viewport = root.querySelector("[data-chart-viewport]");
    const width = viewport.clientWidth;
    const height = viewport.clientHeight;
    if (!width || !height) return;
    const compact = width < 720;
    view.scale = compact ? Math.max(0.42, Math.min(width / WORLD.width, height / WORLD.height) * 1.9) : Math.min(width / WORLD.width, height / WORLD.height) * 0.97;
    view.tx = compact ? width / 2 - CLUSTERS.poetics[0] * view.scale - 40 : (width - WORLD.width * view.scale) / 2;
    view.ty = compact ? height / 2 - (WORLD.height / 2) * view.scale : (height - WORLD.height * view.scale) / 2;
    view.userMoved = false;
    placeStars();
  }

  function zoomAt(factor, cx, cy) {
    const next = Math.max(0.25, Math.min(2.6, view.scale * factor));
    const ratio = next / view.scale;
    view.tx = cx - (cx - view.tx) * ratio;
    view.ty = cy - (cy - view.ty) * ratio;
    view.scale = next;
    view.userMoved = true;
    placeStars();
  }

  function centreOn(id) {
    const viewport = root.querySelector("[data-chart-viewport]");
    const node = layout[id];
    if (!node) return;
    const targetX = viewport.clientWidth / 2 - node.x * view.scale;
    const targetY = viewport.clientHeight / 2 - node.y * view.scale;
    if (window.anime && !LC.reducedMotion()) {
      const from = { tx: view.tx, ty: view.ty };
      anime({ targets: from, tx: targetX, ty: targetY, duration: 520, easing: "easeOutCubic", update: () => {
        view.tx = from.tx;
        view.ty = from.ty;
        placeStars();
      } });
    } else {
      view.tx = targetX;
      view.ty = targetY;
      placeStars();
    }
    view.userMoved = true;
  }

  function bindInteractions() {
    const viewport = root.querySelector("[data-chart-viewport]");
    const pointers = new Map();
    let drag = null;
    let pinchDistance = 0;

    viewport.addEventListener("pointerdown", (event) => {
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size === 1) drag = { x: event.clientX, y: event.clientY, tx: view.tx, ty: view.ty, moved: false, id: event.pointerId, star: event.target.closest(".lc-star") };
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchDistance = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });
    viewport.addEventListener("pointermove", (event) => {
      if (!pointers.has(event.pointerId)) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        const rect = viewport.getBoundingClientRect();
        if (pinchDistance) zoomAt(distance / pinchDistance, (a.x + b.x) / 2 - rect.left, (a.y + b.y) / 2 - rect.top);
        pinchDistance = distance;
        return;
      }
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 5) return;
      if (!drag.moved) {
        drag.moved = true;
        viewport.setPointerCapture?.(event.pointerId);
        viewport.classList.add("is-panning");
      }
      view.tx = drag.tx + dx;
      view.ty = drag.ty + dy;
      view.userMoved = true;
      placeStars();
    });
    const release = (event) => {
      pointers.delete(event.pointerId);
      if (pointers.size < 2) pinchDistance = 0;
      if (drag?.id === event.pointerId) {
        if (drag.moved) viewport.dataset.justPanned = "1";
        window.setTimeout(() => delete viewport.dataset.justPanned, 0);
        drag = null;
        viewport.classList.remove("is-panning");
      }
    };
    viewport.addEventListener("pointerup", release);
    viewport.addEventListener("pointercancel", release);
    viewport.addEventListener("wheel", (event) => {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      zoomAt(Math.exp(-event.deltaY * 0.0022), event.clientX - rect.left, event.clientY - rect.top);
    }, { passive: false });

    root.addEventListener("click", (event) => {
      const star = event.target.closest(".lc-star");
      if (star) {
        if (viewport.dataset.justPanned) return;
        const coarse = window.matchMedia?.("(hover: none)").matches;
        if (coarse && view.pinned !== star.dataset.star) {
          view.pinned = star.dataset.star;
          trace(star.dataset.star);
          return;
        }
        playSound("book");
        LC.openVolume(star.dataset.star, star);
        return;
      }
      const open = event.target.closest("[data-chart-open]");
      if (open) {
        LC.openVolume(open.dataset.chartOpen, open);
        return;
      }
      const focus = event.target.closest("[data-chart-focus]");
      if (focus) {
        view.pinned = focus.dataset.chartFocus;
        centreOn(focus.dataset.chartFocus);
        trace(focus.dataset.chartFocus);
        root.querySelector(`.lc-star[data-star="${focus.dataset.chartFocus}"]`)?.focus({ preventScroll: true });
        return;
      }
      const zoom = event.target.closest("[data-chart-zoom]");
      if (zoom) {
        const rect = viewport.getBoundingClientRect();
        if (zoom.dataset.chartZoom === "fit") fit();
        else zoomAt(zoom.dataset.chartZoom === "in" ? 1.3 : 1 / 1.3, rect.width / 2, rect.height / 2);
        return;
      }
      const filter = event.target.closest("[data-chart-filter]");
      if (filter) {
        const key = filter.dataset.chartFilter;
        if (key === "all") view.hidden.clear();
        else if (view.hidden.has(key)) view.hidden.delete(key);
        else view.hidden.add(key);
        renderFilters();
        applyFilters();
      }
    });
    root.addEventListener("pointerover", (event) => {
      const star = event.target.closest(".lc-star");
      if (star && event.pointerType !== "touch") trace(star.dataset.star);
    });
    root.addEventListener("pointerout", (event) => {
      const star = event.target.closest(".lc-star");
      if (star && !star.contains(event.relatedTarget) && event.pointerType !== "touch") trace(view.pinned);
    });
    root.addEventListener("focusin", (event) => {
      const star = event.target.closest(".lc-star");
      if (!star) return;
      trace(star.dataset.star);
      const rect = star.getBoundingClientRect();
      const box = viewport.getBoundingClientRect();
      if (rect.left < box.left || rect.right > box.right || rect.top < box.top || rect.bottom > box.bottom) centreOn(star.dataset.star);
    });
    const search = root.querySelector("[data-chart-search]");
    search.addEventListener("input", () => {
      view.query = search.value;
      applyFilters();
    });
    search.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const match = applyFilters();
      if (match) {
        centreOn(match.dataset.star);
        match.focus({ preventScroll: true });
      }
    });
    window.addEventListener("resize", () => {
      if (!view.userMoved) fit();
      else placeStars();
    });
  }

  function renderFilters() {
    const bar = root.querySelector("[data-chart-filters]");
    bar.innerHTML = `
      <button type="button" data-chart-filter="all" aria-pressed="${view.hidden.size === 0}">${t("chartAll")}</button>
      ${COLLECTIONS.map((key) => {
        const on = !view.hidden.has(key);
        return `<button type="button" data-chart-filter="${key}" aria-pressed="${on}" class="${on ? "is-on" : ""}">${LC.escapeHtml(collectionLabel({ collection: key }))}</button>`;
      }).join("")}
    `;
  }

  function renderLabels() {
    root.querySelector("[data-chart-stars]").innerHTML = MOVEMENTS.map(nodeMarkup).join("");
    root.querySelectorAll(".lc-hull__label").forEach((label) => {
      const group = GRAPH_GROUPS.find((item) => item.key === label.dataset.group);
      label.textContent = localizedGraphGroup(group);
    });
    root.querySelector("[data-chart-legend]").innerHTML = Object.keys(GRAPH_EDGE_TYPES).map((key) => {
      const meta = graphEdgeMeta(key);
      return `<span style="--edge:${meta.color}"><i aria-hidden="true"></i>${LC.escapeHtml(meta.label)}</span>`;
    }).join("");
    const search = root.querySelector("[data-chart-search]");
    search.placeholder = t("chartSearch");
    search.setAttribute("aria-label", t("chartSearch"));
    root.querySelector("[data-chart-hint]").textContent = t("chartHint");
    root.querySelectorAll("[data-chart-zoom]").forEach((button) => {
      const label = t(button.dataset.chartZoom === "in" ? "chartZoomIn" : (button.dataset.chartZoom === "out" ? "chartZoomOut" : "chartFit"));
      button.setAttribute("aria-label", label);
      button.title = label;
    });
    root.querySelector("[data-chart-filters]").setAttribute("aria-label", t("chartCollections"));
    root.querySelector(".lc-chart__legend").setAttribute("aria-label", t("graphLegend"));
    renderFilters();
    applyFilters();
    placeStars();
    trace(view.active);
  }

  function animateIn() {
    if (!window.anime || LC.reducedMotion()) return;
    const paths = root.querySelectorAll(".lc-edge path");
    paths.forEach((path) => {
      const length = path.getTotalLength?.() || 0;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
    anime({ targets: paths, strokeDashoffset: 0, duration: 1400, delay: anime.stagger(6), easing: "easeInOutSine", complete: () => paths.forEach((path) => {
      path.style.strokeDasharray = "";
      path.style.strokeDashoffset = "";
    }) });
    anime({ targets: root.querySelectorAll(".lc-star"), opacity: [0, 1], duration: 700, delay: anime.stagger(22, { from: "center" }), easing: "easeOutQuad" });
    anime({ targets: root.querySelectorAll(".lc-hull"), opacity: [0, 1], duration: 1200, easing: "easeOutQuad" });
  }

  function render() {
    root = document.querySelector("#orbitMap");
    if (!root || !window.rough) return false;
    if (drawn) {
      renderLabels();
      return true;
    }
    edges = buildEdges();
    layout = computeLayout();
    root.classList.add("lc-orbit-map");
    root.innerHTML = `
      <div class="lc-chart">
        <div class="lc-chart__toolbar">
          <label class="lc-chart__search"><span class="lc-sr">${t("chartSearch")}</span><input type="search" data-chart-search autocomplete="off"></label>
          <div class="lc-chart__filters" data-chart-filters role="group"></div>
          <div class="lc-chart__zoom" role="group">
            <button type="button" data-chart-zoom="out">−</button>
            <button type="button" data-chart-zoom="fit">⤢</button>
            <button type="button" data-chart-zoom="in">+</button>
          </div>
        </div>
        <div class="lc-chart__viewport" data-chart-viewport>
          <svg class="lc-chart__ink" viewBox="0 0 ${WORLD.width} ${WORLD.height}" width="${WORLD.width}" height="${WORLD.height}" aria-hidden="true"></svg>
          <div class="lc-chart__stars" data-chart-stars></div>
          <p class="lc-chart__hint" data-chart-hint></p>
        </div>
        <aside class="lc-chart__detail" data-chart-detail aria-live="polite"></aside>
        <div class="lc-chart__legend" data-chart-legend></div>
      </div>
    `;
    drawInk(root.querySelector(".lc-chart__ink"));
    drawn = true;
    bindInteractions();
    renderLabels();
    fit();
    LC.whenVisible(root, animateIn, "0px");
    return true;
  }

  window.LiteraryConstellation = { render, fit };
})();
