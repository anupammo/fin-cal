const CACHE_NAME = 'cool-cache';

// Add whichever assets you want to precache here:
const PRECACHE_ASSETS = [
    "./",
    "./index.html",
    "./offline.html",
    "./about-us.html",
    "./contact-us.html",
    "./privacy-policy.html",
    "./terms-and-conditions.html",
    "./fd-calculator.html",
    "./rd-calculator.html",
    "./sb-calculator.html",
    "./ssy-calculator.html",
    "./ppf-calculator.html",
    "./nps-calculator.html",
    "./apy-calculator.html",
    "./pmjjby-calculator.html",
    "./pmsby-calculator.html",
    "./kvp-calculator.html",
    "./nsc-calculator.html",
    "./sgb-calculator.html",
    "./bootstrap.min.css",
    "./bootstrap.min.css.map",
    "./app.js",
    "./res/icon/bank-deposit.webp",
    "./res/icon/deposits.webp",
    "./res/icon/ssy.webp",
    "./res/icon/pension-plan.webp",
    "./res/icon/bima-yojana.webp",
    "./res/icon/govt-bonds.webp",
    "./res/icon/gold-bonds.webp",
    "./marketing-consulting-rafiki.svg"
]

// Listener for the install event - precaches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(async () => {
        const cache = await caches.open(CACHE_NAME);

        // match the request to our cache
        const cachedResponse = await cache.match(event.request);

        // check if we got a valid response
        if (cachedResponse !== undefined) {
            // Cache hit, return the resource
            return cachedResponse;
        } else {
            // Otherwise, go to the network
            return fetch(event.request)
        };
    });
});

// self.addEventListener('push', (event) => {
//     event.waitUntil(
//         self.registration.showNotification('Notification Title', {
//             body: 'Notification Body Text',
//             icon: './favicon-32x32.png',
//         })
//     );
// });
