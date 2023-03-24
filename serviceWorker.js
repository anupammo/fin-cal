const assets = [
  "./",
  "./index.html",
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