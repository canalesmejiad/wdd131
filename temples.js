// temples.js
document.addEventListener("DOMContentLoaded", () => {
    // Año actual
    const y = document.getElementById("currentyear");
    if (y) y.textContent = new Date().getFullYear();

    // Última modificación
    const lm = document.getElementById("lastModified");
    if (lm) {
        const d = new Date(document.lastModified);
        lm.textContent = `Last Modification: ${d.toLocaleString()}`;
    }
});