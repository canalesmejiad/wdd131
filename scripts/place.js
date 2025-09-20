document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const last = document.getElementById("lastModified");
    if (last) last.textContent = `Last Modification: ${document.lastModified}`;

    const tempEl = document.getElementById("tempC");
    const windEl = document.getElementById("windK");
    const wcEl = document.getElementById("wc");

    if (tempEl && windEl && wcEl) {
        const t = Number(tempEl.textContent);
        const v = Number(windEl.textContent);

        if (t <= 10 && v > 4.8) {
            const vPow = Math.pow(v, 0.16);
            const wc = 13.12 + 0.6215 * t - 11.37 * vPow + 0.3965 * t * vPow;
            wcEl.textContent = `${wc.toFixed(1)} °C`;
        } else {
            wcEl.textContent = "N/A";
        }
    }
})