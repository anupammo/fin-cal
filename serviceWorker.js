const assets = [
    "./",
    "./index.html",
    "./about-us.html",
    "./contact-us.html",
    "./privacy-policy.html",
    "./terms-and-conditions.html",
    "./bootstrap.min.css",
    "./app.js",
    "./res/icon/bank-deposit.webp",
    "./res/icon/deposits.webp",
    "./res/icon/ssy.webp",
    "./res/icon/pension-plan.webp",
    "./res/icon/bima-yojana.webp",
    "./res/icon/govt-bonds.webp",
    "./res/icon/gold-bonds.webp",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
    "./marketing-consulting-rafiki.svg",
]

self.addEventListener("fetch", fetchEvent => {
        fetchEvent.respondWith(
            caches.match(fetchEvent.request).then(res => {
                return res || fetch(fetchEvent.request)
            })
        )
    })
    // hritick26032023
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('sw: writing files into cache');
            return cache.addAll(filesToCache);
        })
    )
});