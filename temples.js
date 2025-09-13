document.addEventListener("DOMContentLoaded", () => {
    const y = document.getElementById("currentyear");
    if (y) y.textContent = new Date().getFullYear();

    const lm = document.getElementById("lastModified");
    if (lm) lm.textContent = `Last Modification: ${new Date(document.lastModified).toLocaleString()}`;

    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("primaryNav");
    if (!btn || !nav) return;

    const setState = (open) => {
        btn.setAttribute("aria-expanded", String(open));
        btn.textContent = open ? "✕" : "☰";
        nav.classList.toggle("open", open);
    };

    btn.addEventListener("click", () => setState(!nav.classList.contains("open")));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("open")) setState(false);
    });

    nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 899px)").matches) setState(false);
        });
    });
});