document.addEventListener("DOMContentLoaded", () => {
    const y = document.getElementById("currentyear");
    if (y) y.textContent = new Date().getFullYear();

    const lm = document.getElementById("lastModified");
    if (lm)
        lm.textContent = `Last Modification: ${new Date(
            document.lastModified
        ).toLocaleString()}`;

    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("primaryNav");
    if (btn && nav) {
        const setState = (open) => {
            btn.setAttribute("aria-expanded", String(open));
            btn.textContent = open ? "✕" : "☰";
            nav.classList.toggle("open", open);
        };
        btn.addEventListener("click", () =>
            setState(!nav.classList.contains("open"))
        );
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && nav.classList.contains("open")) setState(false);
        });
        nav.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", () => {
                if (window.matchMedia("(max-width: 899px)").matches) setState(false);
            });
        });
    }

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41000,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
        },
        {
            templeName: "Laie Hawaii",
            location: "Laie, Hawaii, United States",
            dedicated: "1919, November, 27",
            area: 42100,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52590,
            imageUrl:
                "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
        },
    ];

    const container = document.getElementById("temple-cards");
    const viewTitle = document.getElementById("view-title");

    const parseYear = (dedicated) => {
        const first = String(dedicated).split(",")[0].trim();
        const n = parseInt(first, 10);
        return Number.isFinite(n) ? n : new Date(dedicated).getFullYear();
    };

    const displayTemples = (list) => {
        if (!container) return;
        container.innerHTML = "";
        list.forEach((t) => {
            const fig = document.createElement("figure");

            const title = document.createElement("h3");
            title.textContent = t.templeName;

            const meta = document.createElement("div");
            meta.className = "meta";
            meta.innerHTML = `
          <p><span class="label">Location:</span> ${t.location}</p>
          <p><span class="label">Dedicated:</span> ${t.dedicated}</p>
          <p><span class="label">Size:</span> ${Number(t.area).toLocaleString()} sq ft</p>
        `;

            const img = document.createElement("img");
            img.src = t.imageUrl;
            img.alt = t.templeName;
            img.loading = "lazy";

            fig.appendChild(title);
            fig.appendChild(meta);
            fig.appendChild(img);
            container.appendChild(fig);
        });
    };

    const setTitle = (txt) => {
        if (viewTitle) viewTitle.textContent = txt;
    };

    const setActive = (el) => {
        document.querySelectorAll("#primaryNav a").forEach((link) =>
            link.removeAttribute("aria-current")
        );
        el.setAttribute("aria-current", "page");
    };

    const homeBtn = document.getElementById("home");
    const oldBtn = document.getElementById("old");
    const newBtn = document.getElementById("new");
    const largeBtn = document.getElementById("large");
    const smallBtn = document.getElementById("small");

    if (homeBtn)
        homeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setActive(e.currentTarget);
            setTitle("Home");
            displayTemples(temples);
        });

    if (oldBtn)
        oldBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setActive(e.currentTarget);
            setTitle("Old Temples");
            displayTemples(temples.filter((t) => parseYear(t.dedicated) < 1900));
        });

    if (newBtn)
        newBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setActive(e.currentTarget);
            setTitle("New Temples");
            displayTemples(temples.filter((t) => parseYear(t.dedicated) > 2000));
        });

    if (largeBtn)
        largeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setActive(e.currentTarget);
            setTitle("Large Temples");
            displayTemples(temples.filter((t) => t.area > 90000));
        });

    if (smallBtn)
        smallBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setActive(e.currentTarget);
            setTitle("Small Temples");
            displayTemples(temples.filter((t) => t.area < 10000));
        });

    displayTemples(temples);
});