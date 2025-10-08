// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = primaryNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
}

// (Native lazy loading is already applied via loading="lazy" on images)