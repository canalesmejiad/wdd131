// getdates.js

// Insert current year in footer (span#currentyear)
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date in footer (p#lastModified)
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;