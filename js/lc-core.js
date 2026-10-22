/* Shared helpers for the feature modules: language, storage, reading progress, toasts, lazy loading. */
(() => {
  const STORAGE_KEY = "literary-progress-v1";
  const MOTION_KEY = "literary-reduced-motion";
  const scriptRequests = new Map();

  const lang = () => (typeof state !== "undefined" && state.language) || "zh";
  const pick = (entry) => entry?.[lang()] ?? entry?.zh ?? entry?.en ?? "";
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const store = {
    read(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (error) {
        return fallback;
      }
    },
    write(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        return false;
      }
    },
    remove(key) {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        /* Storage can be unavailable in private modes; progress is optional. */
      }
    }
  };

  const emptyProgress = () => ({ volumes: {}, quizzes: {}, lenses: {}, events: {}, notes: {} });
  const progress = {
    get() {
      return { ...emptyProgress(), ...store.read(STORAGE_KEY, {}) };
    },
    update(mutator) {
      const next = progress.get();
      mutator(next);
      store.write(STORAGE_KEY, next);
      document.dispatchEvent(new CustomEvent("lc-progress", { detail: next }));
      return next;
    },
    record(kind, id, value = Date.now()) {
      return progress.update((data) => {
        data[kind] = data[kind] || {};
        data[kind][id] = value;
      });
    },
    reset() {
      store.remove(STORAGE_KEY);
      document.dispatchEvent(new CustomEvent("lc-progress", { detail: emptyProgress() }));
    }
  };

  const reducedMotion = () => {
    const stored = store.read(MOTION_KEY, null);
    if (stored !== null) return Boolean(stored);
    return Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
  };

  const setReducedMotion = (value) => {
    store.write(MOTION_KEY, Boolean(value));
    document.documentElement.classList.toggle("lc-reduced-motion", Boolean(value));
    document.dispatchEvent(new CustomEvent("lc-motion", { detail: { reduced: Boolean(value) } }));
  };

  let toastTimer = 0;
  const toast = (message) => {
    let node = document.querySelector(".lc-toast");
    if (!node) {
      node = document.createElement("div");
      node.className = "lc-toast";
      node.setAttribute("role", "status");
      node.setAttribute("aria-live", "polite");
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => node.classList.remove("is-visible"), 2400);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    toast(t("copied"));
  };

  const loadScript = (src) => {
    if (!scriptRequests.has(src)) {
      scriptRequests.set(src, new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
          scriptRequests.delete(src);
          script.remove();
          reject(new Error(`Failed to load ${src}`));
        };
        document.head.appendChild(script);
      }));
    }
    return scriptRequests.get(src);
  };

  // Runs callback once when the element first approaches the viewport.
  const whenVisible = (element, callback, rootMargin = "240px") => {
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      callback();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      callback();
    }, { rootMargin });
    observer.observe(element);
  };

  // Formats a timeline year (negative = BCE) in the interface language.
  const yearLabel = (event) => {
    if (event.label) return pick(event.label);
    const language = lang();
    const year = Math.round(event.year);
    if (year < 0) {
      if (language === "zh") return `${event.approx ? "约" : ""}公元前${-year}年`;
      return language === "fr" ? `${event.approx ? "v. " : ""}${-year} av. J.-C.` : `${event.approx ? "c. " : ""}${-year} BCE`;
    }
    if (language === "zh") return `${event.approx ? "约" : ""}${year}年`;
    return `${event.approx ? (language === "fr" ? "v. " : "c. ") : ""}${year}`;
  };

  const volume = (id) => MOVEMENTS.find((movement) => movement.id === id);
  const volumeTitle = (id) => {
    const movement = volume(id);
    return movement ? localizedMovement(movement).title : id;
  };
  const openVolume = (id, trigger) => {
    if (!volume(id)) return;
    if (trigger) lastWorldTrigger = trigger;
    openWorld(id);
  };
  const onLanguage = (callback) => document.addEventListener("literary-language-change", callback);

  document.documentElement.classList.toggle("lc-reduced-motion", reducedMotion());

  document.addEventListener("literary-world-open", (event) => progress.record("volumes", event.detail.id));
  document.addEventListener("literary-quiz-complete", (event) => {
    const { id, correct, total } = event.detail;
    if (id) progress.record("quizzes", id, { correct, total, at: Date.now() });
  });

  window.LC = {
    lang, pick, escapeHtml, yearLabel, store, progress, reducedMotion, setReducedMotion, toast, copyText,
    loadScript, whenVisible, volume, volumeTitle, openVolume, onLanguage
  };
})();
