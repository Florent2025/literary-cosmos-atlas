/* Offline support for The Literary Cosmos.
 * HTML is network-first (deploys are never hidden behind a stale cache); versioned scripts, styles,
 * data and media are cache-first; everything else is stale-while-revalidate. */
const VERSION = "lc-20261022";
const SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=20261022",
  "./css/aurora.css?v=20261022",
  "./vendor/gsap.min.js",
  "./vendor/ScrollTrigger.min.js",
  "./vendor/anime.min.js",
  "./vendor/three.min.js",
  "./vendor/rough.min.js",
  "./assets/library-gate-bg.webp",
  "./assets/icons/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const isVersioned = (url) => url.searchParams.has("v") || /\/(vendor|assets)\//.test(url.pathname);

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  if (request.headers.has("range")) return;
  if (isVersioned(url)) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
        }
        return response;
      }))
    );
    return;
  }
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
