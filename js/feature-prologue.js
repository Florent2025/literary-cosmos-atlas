/* Prologue film (rendered with Remotion) in an accessible modal. */
(() => {
  let dialog = null;
  let video = null;
  let returnFocus = null;

  function open() {
    if (!dialog) return;
    returnFocus = document.activeElement;
    if (!video.querySelector("source")) {
      const source = document.createElement("source");
      source.src = "./assets/video/prologue.mp4";
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();
    }
    dialog.hidden = false;
    dialog.removeAttribute("inert");
    document.body.classList.add("lc-prologue-open");
    video.currentTime = 0;
    video.play().catch(() => {});
    requestAnimationFrame(() => dialog.querySelector("[data-prologue-close]").focus());
    if (window.anime && !LC.reducedMotion()) {
      anime({ targets: dialog.querySelector(".lc-prologue__frame"), opacity: [0, 1], scale: [0.94, 1], duration: 420, easing: "easeOutCubic" });
    }
    playSound("open");
  }

  function close() {
    if (!dialog || dialog.hidden) return;
    video.pause();
    dialog.hidden = true;
    dialog.setAttribute("inert", "");
    document.body.classList.remove("lc-prologue-open");
    returnFocus?.focus?.({ preventScroll: true });
  }

  function init() {
    dialog = document.querySelector("#prologue");
    if (!dialog) return;
    video = dialog.querySelector("video");
    dialog.querySelector("[data-prologue-close]").addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close();
      }
      if (event.key === "Tab") {
        const focusable = [dialog.querySelector("[data-prologue-close]"), video];
        const index = focusable.indexOf(document.activeElement);
        event.preventDefault();
        focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus();
      }
    });
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-prologue]");
      if (!trigger) return;
      event.preventDefault();
      open();
    });
  }

  window.LCPrologue = { open, close };
  document.addEventListener("DOMContentLoaded", init);
})();
