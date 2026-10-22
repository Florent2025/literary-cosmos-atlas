/* Reading Passport: progress stored in this browser, shown as a Blender-modelled armillary sphere
 * (three.js) whose rings glow per collection, rough.js stamps, and a p5.brush painting of the reader's path. */
(() => {
  const COLLECTIONS = ["classics", "foundations", "frontiers", "regions", "synthesis"];
  const RING_FOR = { classics: "equator", foundations: "ecliptic", frontiers: "tropicNorth", regions: "tropicSouth", synthesis: "colure" };
  const COLLECTION_COLORS = { classics: "#f6c453", foundations: "#ff8f7a", frontiers: "#3ad7ff", regions: "#5ef2c9", synthesis: "#a594ff" };
  let root = null;
  let armillary = null;
  let paintSeed = 0;
  let painter = null;

  const stats = () => {
    const data = LC.progress.get();
    const opened = Object.keys(data.volumes || {}).filter((id) => LC.volume(id));
    const perCollection = Object.fromEntries(COLLECTIONS.map((key) => {
      const members = MOVEMENTS.filter((movement) => movement.collection === key);
      const count = members.filter((movement) => opened.includes(movement.id)).length;
      return [key, { count, total: members.length, ratio: members.length ? count / members.length : 0, earned: count >= Math.ceil(members.length / 2) }];
    }));
    return {
      data,
      opened,
      perCollection,
      quizzes: Object.keys(data.quizzes || {}).length,
      lenses: Object.keys(data.lenses || {}).length,
      events: Object.keys(data.events || {}).length
    };
  };

  function renderStats() {
    const summary = stats();
    const numbers = [
      ["passportVolumes", summary.opened.length, MOVEMENTS.length],
      ["passportQuizzes", summary.quizzes, MOVEMENTS.length],
      ["passportLenses", summary.lenses, (window.LC_LENSLAB?.passages || []).reduce((sum, passage) => sum + passage.lenses.length, 0)],
      ["passportEvents", summary.events, (window.LC_TIMELINE || []).length]
    ];
    root.querySelector("[data-passport-stats]").innerHTML = numbers.map(([key, value, total]) => `
      <div class="lc-stat"><strong data-count="${value}">${value}</strong><span>/ ${total}</span><em>${t(key)}</em>
        <i style="--fill:${total ? Math.min(1, value / total) : 0}"></i></div>
    `).join("");
    const stampRoot = root.querySelector("[data-passport-stamps]");
    stampRoot.innerHTML = `<h3>${t("passportStamps")}</h3><div class="lc-stamps">${COLLECTIONS.map((key) => {
      const entry = summary.perCollection[key];
      return `<figure class="lc-stamp ${entry.earned ? "is-earned" : ""}" style="--stamp:${COLLECTION_COLORS[key]}" data-stamp="${key}">
        <div class="lc-stamp__ink" aria-hidden="true"></div>
        <figcaption><strong>${LC.escapeHtml(collectionLabel({ collection: key }))}</strong><span>${entry.count}/${entry.total} · ${entry.earned ? t("passportStampEarned") : t("passportStampLocked")}</span></figcaption>
      </figure>`;
    }).join("")}</div>`;
    drawStamps();
    if (window.anime && !LC.reducedMotion()) {
      root.querySelectorAll("[data-count]").forEach((node) => {
        const target = { value: 0 };
        anime({ targets: target, value: Number(node.dataset.count), round: 1, duration: 900, easing: "easeOutCubic", update: () => { node.textContent = target.value; } });
      });
    }
    armillary?.update(summary.perCollection);
  }

  function drawStamps() {
    if (!window.rough) return;
    root.querySelectorAll(".lc-stamp").forEach((stamp, index) => {
      const holder = stamp.querySelector(".lc-stamp__ink");
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 120 120");
      const rc = rough.svg(svg);
      const color = getComputedStyle(stamp).getPropertyValue("--stamp").trim() || "#f6c453";
      const earned = stamp.classList.contains("is-earned");
      svg.appendChild(rc.circle(60, 60, 104, { stroke: color, strokeWidth: earned ? 2.6 : 1.2, roughness: 1.8, seed: 3 + index }));
      svg.appendChild(rc.circle(60, 60, 84, { stroke: color, strokeWidth: 1, roughness: 2.4, seed: 9 + index, fill: earned ? color : "transparent", fillStyle: "cross-hatch", hachureGap: 7, fillWeight: 0.8 }));
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", "60");
      label.setAttribute("y", "66");
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("class", "lc-stamp__glyph");
      label.textContent = ["典", "法", "前", "域", "综"][index];
      svg.appendChild(label);
      holder.replaceChildren(svg);
    });
  }

  function initArmillary() {
    const holder = root.querySelector("[data-armillary]");
    if (!holder || !window.THREE) return;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (error) {
      holder.classList.add("is-fallback");
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    holder.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-label", t("passportArmillary"));
    renderer.domElement.setAttribute("role", "img");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 0.25, 7.4);
    scene.add(new THREE.HemisphereLight(0xfff4e0, 0x3a3f8f, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.9);
    key.position.set(3, 4, 5);
    const fill = new THREE.PointLight(0x7b6cff, 2.4, 20);
    fill.position.set(-4, -1, 3);
    const rim = new THREE.PointLight(0x3ad7ff, 2.2, 20);
    rim.position.set(3, -2, -4);
    scene.add(key, fill, rim);
    const brass = new THREE.MeshStandardMaterial({ color: 0xd8b56a, metalness: 0.78, roughness: 0.28, emissive: 0x2a1a05, emissiveIntensity: 0.25 });
    const world = new THREE.Group();
    world.position.y = 0.32;
    world.rotation.y = -0.5;
    const inner = new THREE.Group();
    inner.rotation.x = -0.61;
    world.add(inner);
    scene.add(world);
    const ringMaterials = {};
    let globeMaterial = null;
    let ready = false;

    loadModelJson("./assets/models/armillary.json").then((model) => {
      if (!model?.parts) {
        holder.classList.add("is-fallback");
        return;
      }
      Object.entries(model.parts).forEach(([name, part]) => {
        const geometry = geometryFromModel(part);
        if (!geometry) return;
        let material = brass;
        const collection = Object.keys(RING_FOR).find((item) => RING_FOR[item] === name);
        if (collection) {
          material = brass.clone();
          material.emissive = new THREE.Color(COLLECTION_COLORS[collection]);
          material.emissiveIntensity = 0.05;
          ringMaterials[collection] = material;
        }
        if (name === "globe") {
          material = new THREE.MeshStandardMaterial({ color: 0x9fe8ff, emissive: 0x3ad7ff, emissiveIntensity: 0.8, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.92 });
          globeMaterial = material;
        }
        const mesh = new THREE.Mesh(geometry, material);
        if (["meridian", "horizon", "stand"].includes(name)) world.add(mesh);
        else inner.add(mesh);
      });
      ready = true;
      update(stats().perCollection);
      holder.classList.add("is-ready");
      requestRender();
    });

    const resize = () => {
      const width = holder.clientWidth;
      const height = holder.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      requestRender();
    };

    let dragging = null;
    let yawVelocity = 0;
    holder.addEventListener("pointerdown", (event) => {
      dragging = { x: event.clientX, y: event.clientY };
      holder.setPointerCapture?.(event.pointerId);
    });
    holder.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const dx = event.clientX - dragging.x;
      const dy = event.clientY - dragging.y;
      dragging = { x: event.clientX, y: event.clientY };
      world.rotation.y += dx * 0.008;
      world.rotation.x = Math.max(-0.5, Math.min(0.5, world.rotation.x + dy * 0.004));
      yawVelocity = dx * 0.0006;
      requestRender();
    });
    holder.addEventListener("pointerup", () => { dragging = null; });
    holder.addEventListener("pointercancel", () => { dragging = null; });

    let visible = false;
    let frame = 0;
    const tick = (time) => {
      frame = 0;
      if (!ready) return;
      if (!LC.reducedMotion()) {
        inner.rotation.y += 0.004;
        world.rotation.y += yawVelocity;
        yawVelocity *= 0.95;
        if (globeMaterial) globeMaterial.emissiveIntensity = 0.7 + Math.sin(time / 600) * 0.25;
      }
      renderer.render(scene, camera);
      if (visible && !LC.reducedMotion() && !document.hidden) frame = requestAnimationFrame(tick);
    };
    function requestRender() {
      if (!frame) frame = requestAnimationFrame(tick);
    }
    function update(perCollection) {
      Object.entries(ringMaterials).forEach(([collection, material]) => {
        const ratio = perCollection[collection]?.ratio || 0;
        const target = 0.05 + ratio * 1.6;
        if (window.anime && !LC.reducedMotion()) anime({ targets: material, emissiveIntensity: target, duration: 1200, easing: "easeOutCubic", update: requestRender });
        else material.emissiveIntensity = target;
      });
      requestRender();
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) requestRender();
      }).observe(holder);
    }
    window.addEventListener("resize", resize);
    resize();
    armillary = { update };
  }

  async function paint() {
    const holder = root.querySelector("[data-portrait]");
    const status = root.querySelector("[data-portrait-status]");
    status.textContent = t("passportGenerating");
    holder.classList.add("is-busy");
    try {
      await LC.loadScript("./vendor/p5.min.js");
      await LC.loadScript("./vendor/p5.brush.min.js");
    } catch (error) {
      status.textContent = error.message;
      holder.classList.remove("is-busy");
      return;
    }
    painter?.remove?.();
    holder.querySelector("canvas")?.remove();
    const summary = stats();
    const opened = summary.opened.length ? summary.opened : ["classical-poetics", "chinese-poetics", "ai-literature"];
    const seedBase = Array.from(opened.join("|")).reduce((value, character) => (value * 33 + character.charCodeAt(0)) >>> 0, 5381) + paintSeed;
    const size = Math.min(640, holder.clientWidth || 640);
    const groupCentre = { poetics: [0.24, 0.3], form: [0.55, 0.22], subject: [0.82, 0.36], history: [0.32, 0.72], world: [0.72, 0.74] };
    painter = new p5((p) => {
      brush.instance(p);
      p.setup = () => {
        p.pixelDensity(Math.min(2, window.devicePixelRatio || 1));
        p.createCanvas(size, size, p.WEBGL);
        p.randomSeed(seedBase);
        p.noiseSeed(seedBase);
        p.background("#fbf6ec");
        p.translate(-size / 2, -size / 2);
        brush.scaleBrushes(size / 260);
        const points = {};
        opened.forEach((id, index) => {
          const movement = LC.volume(id);
          const [gx, gy] = groupCentre[graphGroupFor(movement)];
          points[id] = [size * (gx + p.random(-0.12, 0.12)), size * (gy + p.random(-0.1, 0.1)), movement, index];
        });
        brush.noStroke();
        brush.fillBleed(0.35, "out");
        brush.fillTexture(0.55, 0.45);
        Object.values(points).forEach(([x, y, movement]) => {
          brush.fill(movement.palette[1], 120);
          brush.circle(x, y, p.random(size * 0.05, size * 0.09), 0.3);
        });
        brush.field("curved");
        Object.values(points).forEach(([x, y, movement]) => {
          movement.relations.forEach((target) => {
            if (!points[target]) return;
            brush.set("cpencil", movement.palette[2] === "#ffffff" ? "#3a3f8f" : "#2c3270", 1.1);
            brush.spline([[x, y], [(x + points[target][0]) / 2 + p.random(-40, 40), (y + points[target][1]) / 2 + p.random(-40, 40)], points[target]], 0.6);
          });
        });
        brush.noField();
        Object.entries(points).forEach(([id, [x, y]]) => {
          const quiz = summary.data.quizzes?.[id];
          brush.set("HB", quiz && quiz.correct === quiz.total ? "#d39b2a" : "#2c3270", quiz ? 1.6 : 0.9);
          brush.circle(x, y, size * 0.022, 0.2);
        });
        for (let i = 0; i < 120; i += 1) {
          brush.set("pen", "#2c3270", p.random(0.2, 0.5));
          const sx = p.random(20, size - 20);
          const sy = p.random(20, size - 20);
          brush.line(sx, sy, sx + 1, sy + 1);
        }
        brush.set("2H", "#d39b2a", 1.2);
        brush.noFill();
        brush.rect(14, 14, size - 28, size - 28);
        p.noLoop();
      };
      p.draw = () => {
        window.setTimeout(() => {
          holder.classList.remove("is-busy");
          status.textContent = t("passportPortraitLead");
          root.querySelector("[data-portrait-download]").disabled = false;
        }, 80);
      };
    }, holder);
  }

  function download() {
    const canvas = root.querySelector("[data-portrait] canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "literary-cosmos-constellation.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function bind() {
    root.addEventListener("click", (event) => {
      if (event.target.closest("[data-portrait-paint]")) {
        paintSeed += 1;
        paint();
      } else if (event.target.closest("[data-portrait-download]")) {
        download();
      } else if (event.target.closest("[data-passport-reset]")) {
        if (window.confirm(t("passportResetConfirm"))) LC.progress.reset();
      }
    });
    document.addEventListener("lc-progress", renderStats);
    LC.onLanguage(renderStats);
  }

  function init() {
    root = document.querySelector("#passport");
    if (!root) return;
    bind();
    renderStats();
    LC.whenVisible(root, initArmillary, "200px");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
