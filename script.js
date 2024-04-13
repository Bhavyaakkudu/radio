if ("serviceWorker" in navigator && window.location.protocol === 'https:') {
    navigator.serviceWorker.register("sworker.js").then(registration => {
        console.log("Service worker registered successfully:", registration);
    }).catch(error => {
        console.log("Service worker registration failed:", error);
    });
} else {
    console.log("Service workers are not supported or the page is not served over HTTPS.");
}
