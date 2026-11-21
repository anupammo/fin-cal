/* Nivesguru service worker v2
 * - Pages: network first (always fresh), cached copy when offline, offline.html as last resort.
 * - Static files (CSS, JS, fonts, images): served from cache, refreshed in the background.
 * - Third-party requests (ads, analytics) are never touched.
 * Bump VERSION whenever cached assets change in a way that must reach users at once.
 */
const VERSION = 'ng-v2-2026-11-12';
const STATIC = VERSION + '-static';
const PAGES = VERSION + '-pages';
const CORE = [
    '/',
    '/offline.html',
    '/assets/css/theme.css?v=2',
    '/assets/js/theme.js?v=2',
    '/assets/vendor/bootstrap.min.css',
    '/assets/vendor/bootstrap.bundle.min.js',
    '/assets/fonts/inter-var.woff2',
    '/calc-core.js',
    '/app.js',
    '/favicon-32x32.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

function isStatic(url) {
    return url.pathname.startsWith('/assets/') ||
        /\.(?:css|js|woff2|png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);
}

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
        event.respondWith(
            fetch(req)
                .then((res) => {
                    if (res.ok) {
                        const copy = res.clone();
                        caches.open(PAGES).then((c) => c.put(req, copy));
                    }
                    return res;
                })
                .catch(() => caches.match(req).then((hit) => hit || caches.match('/offline.html')))
        );
        return;
    }

    if (isStatic(url)) {
        event.respondWith(
            caches.open(STATIC).then((cache) =>
                cache.match(req).then((hit) => {
                    const network = fetch(req).then((res) => {
                        if (res.ok) cache.put(req, res.clone());
                        return res;
                    }).catch(() => hit);
                    return hit || network;
                })
            )
        );
    }
});
