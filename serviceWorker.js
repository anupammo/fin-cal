// NivesGuru service worker — single source of truth.
// Strategy: network-first for HTML/navigations (pages never go stale),
// cache-first for versioned static assets, offline.html fallback.
// Bump CACHE_VERSION on any deploy that changes cached static assets.

const CACHE_VERSION = "nivesguru-v2026-07";
const OFFLINE_URL = "/offline.html";

// Stable static assets safe to cache-first. HTML pages are intentionally
// NOT precached — they are always fetched network-first so rates stay fresh.
const STATIC_ASSETS = [
    OFFLINE_URL,
    "/bootstrap.min.css",
    "/fincal.css",
    "/app.js",
    "/manifest.json",
    "/android-icon-192x192.png",
    "/res/icon/bank-deposit.webp",
    "/res/icon/deposits.webp",
    "/res/icon/ssy.webp",
    "/res/icon/pension-plan.webp",
    "/res/icon/bima-yojana.webp",
    "/res/icon/govt-bonds.webp",
    "/res/icon/gold-bonds.webp"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
            .catch(() => self.skipWaiting())
    );
});

// Remove every cache that isn't the current version.
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;
    if (request.method !== "GET") return;

    const isHTML = request.mode === "navigate" ||
        (request.headers.get("accept") || "").includes("text/html");

    if (isHTML) {
        // Network-first: always try the live page, fall back to cache, then offline.
        event.respondWith(
            fetch(request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_VERSION).then(c => c.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request).then(r => r || caches.match(OFFLINE_URL)))
        );
        return;
    }

    // Static assets: cache-first, revalidate in background.
    event.respondWith(
        caches.match(request).then(cached => {
            const network = fetch(request).then(response => {
                if (response && response.status === 200 && response.type === "basic") {
                    const copy = response.clone();
                    caches.open(CACHE_VERSION).then(c => c.put(request, copy));
                }
                return response;
            }).catch(() => cached);
            return cached || network;
        })
    );
});
