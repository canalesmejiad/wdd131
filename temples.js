// temples.js
// Run after HTML is parsed (defer in <head> is required)
(() => {
    /* ================= Footer: year + last modified ================= */
    const yearEl = document.getElementById("year");
    const modifiedEl = document.getElementById("lastModified");

    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (modifiedEl) {
        const d = new Date(document.lastModified);
        // Example format: 01/29/2024, 19:11:06
        modifiedEl.textContent = d.toLocaleString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }

    /* ================= Mobile hamburger menu ================= */
    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("primaryNav");

    if (!btn || !nav) return;

    const setButtonState = (open) => {
        btn.setAttribute("aria-expanded", String(open));
        btn.textContent = open ? "✕" : "☰";
    };

    btn.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        setButtonState(isOpen);
    });

    // Close with ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("open")) {
            nav.classList.remove("open");
            setButtonState(false);
            btn.focus();
        }
    });

    // Auto-close after clicking a link (mobile only)
    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 899px)").matches) {
                nav.classList.remove("open");
                setButtonState(false);
            }
        });
    });
})();