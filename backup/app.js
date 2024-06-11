if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("NivesGuru PWA installable to any device."))
        .catch(err => console.log("NivesGuru PWA not working", err))
    })
  }