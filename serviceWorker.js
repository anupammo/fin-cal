// var cacheName = 'epwa';

const assets = [
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

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
