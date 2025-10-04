// ============================================
// forms.js – Handles review confirmation page
// ============================================

// Year footer
document.getElementById("year").textContent = new Date().getFullYear();

// Parse query params and display summary
const params = new URLSearchParams(window.location.search);
const summary = document.getElementById("summary");
let html = "";

params.forEach((value, key) => {
    html += `<li><strong>${key}:</strong> ${value}</li>`;
});
summary.innerHTML = html || "<li>No data found.</li>";

// localStorage review counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;