document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    const tempC = parseFloat(document.getElementById("tempC").textContent);
    const windK = parseFloat(document.getElementById("windK").textContent);
    const wc = document.getElementById("wc");

    function calculateWindChill(t, v) {
        return (
            13.12 +
            0.6215 * t -
            11.37 * Math.pow(v, 0.16) +
            0.3965 * t * Math.pow(v, 0.16)
        ).toFixed(1);
    }

    if (tempC <= 10 && windK > 4.8) {
        wc.textContent = `${calculateWindChill(tempC, windK)} °C`;
    } else {
        wc.textContent = "N/A";
    }
});