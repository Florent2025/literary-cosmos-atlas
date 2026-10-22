/* 720° reading-room rotunda.
 * The backdrop is a photoreal equirectangular render of a sunlit library rotunda (tools/blender/build_rotunda.py,
 * see assets/panorama/README.md), in a daylight and a dusk lighting. One full-screen shader reprojects it for every
 * view direction through a general projection that morphs between rectilinear and stereographic ("little planet").
 * As a fixed backdrop the camera turns with scroll and the light moves from dusk to day and back; in explore mode the
 * reader looks around freely (drag, wheel/pinch, keys, gyroscope) and flies into volume hotspots. */
(() => {
  const TAU = Math.PI * 2;
  // `phase` blends the two lightings: 0 = daylight, 1 = dusk with the reading lamps on.
  const KEYFRAMES = [
    { target: "#hero", at: "top", yaw: 0, pitch: 0.42, fov: 78, d: 0, phase: 1 },
    { target: "#library", at: "top", yaw: 0.9, pitch: 0.02, fov: 70, d: 0, phase: 0.55 },
    { target: "#library", at: "bottom", yaw: 2.2, pitch: -0.04, fov: 70, d: 0, phase: 0.15 },
    { target: "#atlas", at: "center", yaw: 3.2, pitch: 0.95, fov: 84, d: 0.12, phase: 0 },
    { target: "#timeline", at: "center", yaw: 4.4, pitch: 0.12, fov: 76, d: 0, phase: 0 },
    { target: "#radar", at: "center", yaw: 5.5, pitch: 1.22, fov: 96, d: 0.35, phase: 0 },
    { target: "#lenslab", at: "center", yaw: 6.6, pitch: 0.05, fov: 74, d: 0, phase: 0 },
    { target: "#archive", at: "center", yaw: 7.6, pitch: -0.72, fov: 86, d: 0.3, phase: 0 },
    { target: "#researchLibrary", at: "center", yaw: 8.5, pitch: 0.05, fov: 72, d: 0, phase: 0.1 },
    { target: "#passport", at: "center", yaw: 9.8, pitch: 0.3, fov: 78, d: 0.05, phase: 0.55 },
    { target: ".lc-footer", at: "bottom", yaw: 10.6, pitch: -1.46, fov: 165, d: 0.9, phase: 1 }
  ];

  // Equirectangular sources. The 3k pair matches the backdrop's render scale texel-for-texel;
  // the 6k pair is fetched for explore mode on large screens only.
  const PANORAMA = {
    day: { small: "./assets/panorama/rotunda-day-3k.webp", large: "./assets/panorama/rotunda-day-6k.webp" },
    dusk: { small: "./assets/panorama/rotunda-dusk-3k.webp", large: "./assets/panorama/rotunda-dusk-6k.webp" },
    // Longitude added before sampling and its sign, so the image centre (u = 0.5) looks toward -Z.
    yawOffset: 0,
    mirror: 1
  };

  const VERTEX = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `;

  const FRAGMENT = `
    precision highp float;
    uniform vec2 uResolution;
    uniform mat3 uRot;
    uniform float uScale;
    uniform float uD;
    uniform float uPhase;
    uniform float uVeil;
    uniform float uYawOffset;
    uniform float uMirror;
    uniform sampler2D uDay;
    uniform sampler2D uDusk;
    varying vec2 vUv;
    #define PI 3.14159265359

    vec3 room(vec3 dir) {
      float longitude = uMirror * atan(dir.x, -dir.z) + uYawOffset;
      vec2 st = vec2(fract(0.5 + longitude / (2.0 * PI)), 0.5 + asin(clamp(dir.y, -1.0, 1.0)) / PI);
      return mix(texture2D(uDay, st).rgb, texture2D(uDusk, st).rgb, uPhase);
    }

    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      uv.x *= uResolution.x / uResolution.y;
      float r = length(uv) * uScale;
      float k = uD + 1.0;
      float theta = atan(r, k) + asin(clamp(r * uD / sqrt(k * k + r * r), -1.0, 1.0));
      theta = min(theta, PI - 0.002);
      vec2 n = r > 1e-6 ? uv / length(uv) : vec2(0.0);
      vec3 cameraDir = vec3(n * sin(theta), -cos(theta));
      vec3 colour = room(normalize(uRot * cameraDir));
      // Behind the page the room sits in a little air, warm by day and blue at dusk; explore mode lifts it.
      vec3 air = mix(vec3(0.965, 0.95, 0.925), vec3(0.11, 0.12, 0.2), uPhase);
      colour = mix(colour, air, uVeil * 0.12);
      float vignette = smoothstep(1.7, 0.35, length(vUv * 2.0 - 1.0));
      colour *= mix(0.8, 1.0, vignette);
      gl_FragColor = vec4(colour, 1.0);
    }
  `;

  const state720 = {
    yaw: 0, pitch: 0.42, fov: 78, d: 0, phase: 0.02,
    target: { yaw: 0, pitch: 0.42, fov: 78, d: 0, phase: 0.02 },
    mode: "backdrop", anchors: [], dirty: true, quality: 0.6, veil: 1
  };
  let renderer = null;
  let material = null;
  let scene = null;
  let camera = null;
  let canvas = null;
  let frame = 0;
  const textures = { small: {}, large: {}, dayReady: false, largeRequested: false };
  let ui = null;
  let hotspots = [];
  let hovered = null;
  let flying = false;
  let gyro = null;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (t) => t * t * (3 - 2 * t);
  const rad = (degrees) => (degrees * Math.PI) / 180;

  function rotation(yaw, pitch) {
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    // Ry(yaw) * Rx(pitch), column-major for three.js Matrix3.set (row-major arguments).
    return [
      cy, sy * sp, sy * cp,
      0, cp, -sp,
      -sy, cy * sp, cy * cp
    ];
  }

  const scaleFor = (fovDegrees, d) => {
    const half = rad(fovDegrees) / 2;
    return ((d + 1) * Math.sin(half)) / Math.max(0.02, d + Math.cos(half));
  };

  function uniforms() {
    const width = canvas.width;
    const height = canvas.height;
    material.uniforms.uResolution.value.set(width, height);
    material.uniforms.uRot.value.set(...rotation(state720.yaw, state720.pitch));
    material.uniforms.uScale.value = scaleFor(state720.fov, state720.d);
    material.uniforms.uD.value = state720.d;
    const set = state720.mode === "explore" && textures.large.day && textures.large.dusk ? textures.large : textures.small;
    material.uniforms.uDay.value = set.day || set.dusk;
    material.uniforms.uDusk.value = set.dusk || set.day;
    material.uniforms.uPhase.value = textures.dayReady ? state720.phase : 1;
    material.uniforms.uVeil.value = state720.veil;
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const scale = state720.mode === "explore" ? Math.min(ratio, 1.25) : state720.quality;
    renderer.setPixelRatio(scale);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    measureAnchors();
    state720.dirty = true;
    requestFrame();
  }

  function measureAnchors() {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    state720.anchors = KEYFRAMES.map((keyframe) => {
      const element = document.querySelector(keyframe.target);
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      const top = rect.top + scrollY;
      const span = rect.height - window.innerHeight;
      const y = keyframe.at === "top" ? top : (keyframe.at === "bottom" ? top + span : top + Math.max(0, span) / 2);
      return { ...keyframe, y: clamp(y, 0, maxScroll) };
    }).filter(Boolean).sort((a, b) => a.y - b.y);
  }

  function scrollTarget() {
    const anchors = state720.anchors;
    if (!anchors.length) return;
    const y = window.scrollY;
    let a = anchors[0];
    let b = anchors[anchors.length - 1];
    if (y <= a.y) b = a;
    else if (y >= b.y) a = b;
    else {
      for (let i = 0; i < anchors.length - 1; i += 1) {
        if (y >= anchors[i].y && y <= anchors[i + 1].y) {
          a = anchors[i];
          b = anchors[i + 1];
          break;
        }
      }
    }
    const t = a === b ? 0 : smooth(clamp((y - a.y) / (b.y - a.y), 0, 1));
    const still = LC.reducedMotion();
    state720.target = {
      yaw: still ? 0.6 : lerp(a.yaw, b.yaw, t),
      pitch: still ? 0.3 : lerp(a.pitch, b.pitch, t),
      fov: still ? 76 : lerp(a.fov, b.fov, t),
      d: still ? 0 : lerp(a.d, b.d, t),
      phase: lerp(a.phase, b.phase, t)
    };
    requestFrame();
  }

  function forward(yaw, pitch) {
    return [-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch)];
  }

  function placeHotspots() {
    if (state720.mode !== "explore" || !hotspots.length) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    const [r00, r01, r02, r10, r11, r12, r20, r21, r22] = rotation(state720.yaw, state720.pitch);
    const scale = scaleFor(state720.fov, state720.d);
    const k = state720.d + 1;
    hotspots.forEach((spot) => {
      const [vx, vy, vz] = spot.dir;
      // Camera-space vector = transpose(R) * v.
      const cx = r00 * vx + r10 * vy + r20 * vz;
      const cy = r01 * vx + r11 * vy + r21 * vz;
      const cz = r02 * vx + r12 * vy + r22 * vz;
      const theta = Math.acos(clamp(-cz, -1, 1));
      const denominator = state720.d + Math.cos(theta);
      if (denominator <= 0.04 || theta > Math.PI * 0.94) {
        spot.el.classList.add("is-away");
        return;
      }
      const r = (k * Math.sin(theta)) / denominator / scale;
      const phi = Math.atan2(cy, cx);
      const x = (Math.cos(phi) * r) / aspect;
      const y = Math.sin(phi) * r;
      const away = Math.abs(x) > 1.15 || Math.abs(y) > 1.2;
      spot.el.classList.toggle("is-away", away);
      if (away) return;
      const size = clamp(1.25 - theta * 0.5, 0.45, 1.2) * clamp(74 / state720.fov, 0.6, 2.2);
      spot.el.style.transform = `translate(${((x * 0.5 + 0.5) * width).toFixed(1)}px, ${((0.5 - y * 0.5) * height).toFixed(1)}px) translate(-50%, -50%) scale(${size.toFixed(3)})`;
      spot.el.style.zIndex = String(Math.round(1000 - theta * 300));
    });
  }

  function step() {
    frame = 0;
    if (!textures.small.day && !textures.small.dusk) return;
    const exploring = state720.mode === "explore";
    const ease = exploring ? 0.18 : 0.085;
    let moving = false;
    ["yaw", "pitch", "fov", "d", "phase"].forEach((key) => {
      const delta = state720.target[key] - state720[key];
      if (Math.abs(delta) > 0.0004) {
        state720[key] += delta * (flying ? 0.2 : ease);
        moving = true;
      } else {
        state720[key] = state720.target[key];
      }
    });
    const veilTarget = exploring ? 0 : 1;
    if (Math.abs(veilTarget - state720.veil) > 0.002) {
      state720.veil += (veilTarget - state720.veil) * 0.08;
      moving = true;
    } else {
      state720.veil = veilTarget;
    }
    if (moving || state720.dirty) {
      uniforms();
      renderer.render(scene, camera);
      placeHotspots();
      state720.dirty = false;
    }
    const visible = !state.worldOpen;
    if (moving && visible && !document.hidden) frame = requestAnimationFrame(step);
  }

  function requestFrame() {
    if (!frame && renderer) frame = requestAnimationFrame(step);
  }

  // ---------------------------------------------------------------- textures

  function loadTexture(url) {
    return new Promise((resolve, reject) => {
      new THREE.TextureLoader().load(url, (texture) => {
        // No mipmaps: the longitude wrap would otherwise pick the smallest mip along the seam.
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        resolve(texture);
      }, undefined, reject);
    });
  }

  function reveal() {
    canvas.style.opacity = "1";
    document.documentElement.classList.add("lc-dome-ready");
  }

  async function loadRoom() {
    try {
      // Dusk first: the page opens on the lamp-lit room, daylight follows while the reader settles in.
      textures.small.dusk = await loadTexture(PANORAMA.dusk.small);
      state720.dirty = true;
      requestFrame();
      reveal();
      textures.small.day = await loadTexture(PANORAMA.day.small);
      textures.dayReady = true;
      state720.dirty = true;
      requestFrame();
    } catch (error) {
      if (!textures.small.dusk) document.documentElement.classList.add("lc-no-dome");
    }
  }

  // Explore mode looks closer, so large screens get the 6k pair while it is open.
  function loadLarge() {
    if (textures.largeRequested) return;
    const gl = renderer.getContext();
    const roomy = gl.getParameter(gl.MAX_TEXTURE_SIZE) >= 8192
      && window.innerWidth >= 1024
      && !navigator.connection?.saveData
      && (navigator.deviceMemory || 8) >= 4;
    if (!roomy) return;
    textures.largeRequested = true;
    Promise.all([loadTexture(PANORAMA.day.large), loadTexture(PANORAMA.dusk.large)]).then(([day, dusk]) => {
      if (state720.mode !== "explore") {
        day.dispose();
        dusk.dispose();
        textures.largeRequested = false;
        return;
      }
      textures.large = { day, dusk };
      state720.dirty = true;
      requestFrame();
    }).catch(() => {
      textures.largeRequested = false;
    });
  }

  function releaseLarge() {
    textures.large.day?.dispose();
    textures.large.dusk?.dispose();
    textures.large = {};
    textures.largeRequested = false;
  }

  // ---------------------------------------------------------------- explore mode

  function hotspotDirections() {
    const ordered = [...MOVEMENTS].sort((a, b) => ["classics", "foundations", "frontiers", "regions", "synthesis"].indexOf(a.collection) - ["classics", "foundations", "frontiers", "regions", "synthesis"].indexOf(b.collection));
    return ordered.map((movement, index) => {
      const yaw = (index / ordered.length) * TAU;
      const elevation = 0.1 + (index % 3) * 0.16 + (index % 2) * 0.05;
      return { movement, dir: forward(yaw, elevation), yaw, elevation };
    });
  }

  function buildHotspots() {
    const layer = ui.querySelector("[data-pano-hotspots]");
    hotspots = hotspotDirections().map((spot) => {
      const local = localizedMovement(spot.movement);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lc-hotspot is-away";
      button.dataset.panoVolume = spot.movement.id;
      button.style.setProperty("--spot", spot.movement.palette[2]);
      button.innerHTML = `<img alt="" decoding="async" src="./assets/covers/${spot.movement.id}.webp" width="96" height="144"><span>${LC.escapeHtml(local.title)}</span>`;
      button.setAttribute("aria-label", `${local.title} · ${local.lens}`);
      layer.appendChild(button);
      return { ...spot, el: button };
    });
  }

  function refreshHotspotLabels() {
    hotspots.forEach((spot) => {
      const local = localizedMovement(spot.movement);
      spot.el.querySelector("span").textContent = local.title;
      spot.el.setAttribute("aria-label", `${local.title} · ${local.lens}`);
    });
  }

  function nearestYaw(target) {
    const turns = Math.round((state720.yaw - target) / TAU);
    return target + turns * TAU;
  }

  function lookAt(spot, fov = state720.target.fov) {
    const [x, y, z] = spot.dir;
    state720.target.yaw = nearestYaw(Math.atan2(-x, -z));
    state720.target.pitch = clamp(Math.asin(y), -1.5, 1.5);
    state720.target.fov = fov;
    state720.target.d = clamp((fov - 80) / 70, 0, 0.6);
    requestFrame();
  }

  function flyInto(spot) {
    if (flying) return;
    flying = true;
    lookAt(spot, 24);
    playSound("open");
    window.setTimeout(() => {
      flying = false;
      LC.openVolume(spot.movement.id, spot.el);
      state720.target.fov = 74;
      state720.target.d = 0;
      requestFrame();
    }, LC.reducedMotion() ? 0 : 900);
  }

  function littlePlanetIntro() {
    state720.yaw = state720.target.yaw - TAU;
    state720.pitch = -Math.PI / 2;
    state720.fov = 290;
    state720.d = 1;
    state720.target = { yaw: state720.yaw, pitch: -Math.PI / 2, fov: 290, d: 1, phase: state720.phase };
    if (LC.reducedMotion() || !window.anime) {
      state720.target = { yaw: 0.4, pitch: 0.12, fov: 76, d: 0.05, phase: state720.phase };
      requestFrame();
      return;
    }
    const tween = { yaw: state720.yaw, pitch: -Math.PI / 2, fov: 290, d: 1 };
    flying = true;
    anime({
      targets: tween,
      yaw: state720.yaw + TAU + 0.4,
      pitch: 0.12,
      fov: 76,
      d: 0.05,
      duration: 3200,
      easing: "easeInOutCubic",
      update: () => {
        state720.yaw = tween.yaw;
        state720.pitch = tween.pitch;
        state720.fov = tween.fov;
        state720.d = tween.d;
        state720.target = { ...state720.target, yaw: tween.yaw, pitch: tween.pitch, fov: tween.fov, d: tween.d };
        state720.dirty = true;
        requestFrame();
      },
      complete: () => {
        flying = false;
      }
    });
  }

  function bindExplore() {
    const surface = ui.querySelector("[data-pano-surface]");
    const pointers = new Map();
    let drag = null;
    let pinch = 0;
    let velocity = { yaw: 0, pitch: 0 };

    surface.addEventListener("pointerdown", (event) => {
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      surface.setPointerCapture?.(event.pointerId);
      if (pointers.size === 1) drag = { x: event.clientX, y: event.clientY, moved: false };
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
    });
    surface.addEventListener("pointermove", (event) => {
      if (!pointers.has(event.pointerId)) {
        hover(event);
        return;
      }
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch) zoom(pinch / distance);
        pinch = distance;
        return;
      }
      if (!drag) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;
      if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true;
      const factor = rad(state720.fov) / window.innerHeight;
      velocity = { yaw: dx * factor, pitch: dy * factor };
      state720.target.yaw += dx * factor;
      state720.target.pitch = clamp(state720.target.pitch + dy * factor, -1.55, 1.55);
      requestFrame();
    });
    const release = (event) => {
      pointers.delete(event.pointerId);
      if (pointers.size < 2) pinch = 0;
      if (pointers.size === 0 && drag) {
        const coast = { ...velocity };
        const glide = () => {
          if (Math.abs(coast.yaw) + Math.abs(coast.pitch) < 0.0004 || LC.reducedMotion()) return;
          state720.target.yaw += coast.yaw;
          state720.target.pitch = clamp(state720.target.pitch + coast.pitch, -1.55, 1.55);
          coast.yaw *= 0.92;
          coast.pitch *= 0.92;
          requestFrame();
          requestAnimationFrame(glide);
        };
        if (drag.moved) glide();
        drag = null;
      }
    };
    surface.addEventListener("pointerup", release);
    surface.addEventListener("pointercancel", release);
    surface.addEventListener("wheel", (event) => {
      event.preventDefault();
      zoom(Math.exp(event.deltaY * 0.0012));
    }, { passive: false });
    ui.addEventListener("click", (event) => {
      const spot = event.target.closest("[data-pano-volume]");
      if (spot) {
        flyInto(hotspots.find((item) => item.movement.id === spot.dataset.panoVolume));
        return;
      }
      if (event.target.closest("[data-pano-close]")) close();
      else if (event.target.closest("[data-pano-planet]")) littlePlanetIntro();
      else if (event.target.closest("[data-pano-gyro]")) toggleGyro();
    });
    ui.addEventListener("focusin", (event) => {
      const spot = event.target.closest("[data-pano-volume]");
      if (spot) lookAt(hotspots.find((item) => item.movement.id === spot.dataset.panoVolume));
    });
    ui.addEventListener("keydown", (event) => {
      const stepSize = 0.12;
      if (event.key === "Escape") {
        event.stopPropagation();
        close();
      } else if (event.key === "ArrowLeft") state720.target.yaw -= stepSize;
      else if (event.key === "ArrowRight") state720.target.yaw += stepSize;
      else if (event.key === "ArrowUp") state720.target.pitch = clamp(state720.target.pitch + stepSize, -1.55, 1.55);
      else if (event.key === "ArrowDown") state720.target.pitch = clamp(state720.target.pitch - stepSize, -1.55, 1.55);
      else if (event.key === "+" || event.key === "=") zoom(0.9);
      else if (event.key === "-") zoom(1.1);
      else return;
      requestFrame();
    });
  }

  function zoom(factor) {
    state720.target.fov = clamp(state720.target.fov * factor, 30, 230);
    state720.target.d = clamp((state720.target.fov - 80) / 70, 0, 1);
    requestFrame();
  }

  function hover(event) {
    const spot = event.target.closest?.("[data-pano-volume]");
    const id = spot?.dataset.panoVolume || null;
    if (id === hovered) return;
    hovered = id;
    const label = ui.querySelector("[data-pano-label]");
    if (!id) {
      label.classList.remove("is-visible");
      return;
    }
    const movement = LC.volume(id);
    const local = localizedMovement(movement);
    label.innerHTML = `<span style="color:${movement.palette[2]}">${LC.escapeHtml(collectionLabel(movement))}</span><strong>${LC.escapeHtml(local.title)}</strong><em>${LC.escapeHtml(local.lens)}</em>`;
    label.classList.add("is-visible");
  }

  function toggleGyro() {
    if (gyro) {
      window.removeEventListener("deviceorientation", gyro);
      gyro = null;
      ui.querySelector("[data-pano-gyro]")?.setAttribute("aria-pressed", "false");
      return;
    }
    const start = () => {
      let base = null;
      gyro = (event) => {
        if (event.alpha === null) return;
        if (!base) base = { alpha: event.alpha, yaw: state720.target.yaw };
        state720.target.yaw = base.yaw + rad(event.alpha - base.alpha);
        state720.target.pitch = clamp(rad((event.beta || 90) - 90), -1.5, 1.5);
        requestFrame();
      };
      window.addEventListener("deviceorientation", gyro);
      ui.querySelector("[data-pano-gyro]")?.setAttribute("aria-pressed", "true");
    };
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission().then((permission) => {
        if (permission === "granted") start();
      }).catch(() => {});
    } else {
      start();
    }
  }

  let returnFocus = null;
  function open() {
    if (!renderer || state720.mode === "explore") return;
    returnFocus = document.activeElement;
    state720.mode = "explore";
    if (!hotspots.length) buildHotspots();
    ui.hidden = false;
    ui.removeAttribute("inert");
    document.body.classList.add("lc-pano-open");
    document.querySelector("#siteHeader")?.setAttribute("inert", "");
    document.querySelector("main")?.setAttribute("inert", "");
    resize();
    loadLarge();
    littlePlanetIntro();
    requestAnimationFrame(() => ui.querySelector("[data-pano-close]")?.focus({ preventScroll: true }));
    if ("ontouchstart" in window) ui.querySelector("[data-pano-gyro]")?.removeAttribute("hidden");
  }

  function close() {
    if (state720.mode !== "explore") return;
    if (gyro) toggleGyro();
    state720.mode = "backdrop";
    ui.hidden = true;
    ui.setAttribute("inert", "");
    document.body.classList.remove("lc-pano-open");
    hotspots.forEach((spot) => spot.el.classList.add("is-away"));
    releaseLarge();
    if (!state.worldOpen) {
      document.querySelector("#siteHeader")?.removeAttribute("inert");
      document.querySelector("main")?.removeAttribute("inert");
    }
    resize();
    scrollTarget();
    returnFocus?.focus?.({ preventScroll: true });
  }

  function init() {
    canvas = document.querySelector("#domeCanvas");
    ui = document.querySelector("#panorama");
    if (!canvas || !window.THREE) return;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "high-performance" });
    } catch (error) {
      document.documentElement.classList.add("lc-no-dome");
      return;
    }
    const gl = renderer.getContext();
    if (!gl) {
      document.documentElement.classList.add("lc-no-dome");
      return;
    }
    const compact = window.matchMedia("(max-width: 720px)").matches;
    state720.quality = compact ? 0.5 : 0.62;
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        uResolution: { value: new THREE.Vector2(1, 1) },
        uRot: { value: new THREE.Matrix3() },
        uScale: { value: 1 },
        uD: { value: 0 },
        uPhase: { value: 1 },
        uVeil: { value: 1 },
        uYawOffset: { value: PANORAMA.yawOffset },
        uMirror: { value: PANORAMA.mirror },
        uDay: { value: null },
        uDusk: { value: null }
      },
      depthTest: false,
      depthWrite: false
    });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
    document.documentElement.classList.add("lc-has-dome");
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 1.4s ease";
    loadRoom();
    resize();
    scrollTarget();
    state720.yaw = state720.target.yaw;
    state720.pitch = state720.target.pitch;
    state720.fov = state720.target.fov;
    state720.d = state720.target.d;
    state720.phase = state720.target.phase;
    window.addEventListener("scroll", scrollTarget, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);
    window.ScrollTrigger?.addEventListener?.("refresh", () => {
      measureAnchors();
      scrollTarget();
    });
    document.addEventListener("literary-world-close", () => window.setTimeout(requestFrame, 300));
    document.addEventListener("lc-motion", () => {
      scrollTarget();
      requestFrame();
    });
    document.addEventListener("visibilitychange", requestFrame);
    if (ui) {
      bindExplore();
      LC.onLanguage(refreshHotspotLabels);
    }
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-pano-open]")) {
        event.preventDefault();
        open();
      }
    });
    requestFrame();
  }

  window.LCPanorama = { open, close, state: state720 };
  document.addEventListener("DOMContentLoaded", init);
})();
