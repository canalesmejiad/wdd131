/*********** Footer: year + last modified ***********/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const lastModEl = document.getElementById('lastModified');
const lastModText = `Last Modified: ${document.lastModified}`;
if (lastModEl) {
    lastModEl.textContent = lastModText;
} else {
    // Si tu HTML no tiene un span#lastModified, lo añadimos al footer
    const footer = document.querySelector('footer');
    if (footer) {
        const p = document.createElement('p');
        p.id = 'lastModified';
        p.textContent = lastModText;
        footer.appendChild(p);
    }
}

/*********** Weather: static inputs (Step 5) ***********/
/* Estático por ahora; ajusta estos valores para que coincidan con lo que muestras
   en el texto "Currently: ...".
   Para Honduras usamos métrico por defecto. */
const TEMP_C = 28;       // °C
const WIND_KMH = 12;     // km/h

/* Opcional: si alguna vez quieres usar imperial:
   const TEMP_F = 82;   // °F
   const WIND_MPH = 8;  // mph
*/

/*********** Windchill formulas (one-liners) ***********/
// MÉTRICO (°C, km/h) — Fórmula Environment Canada
const calculateWindChillC = (t, v) =>
    13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

// IMPERIAL (°F, mph) — NOAA/NWS
const calculateWindChillF = (t, v) =>
    35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);

/*********** Render windchill on page load ***********/
function renderWindChill() {
    // Busca la sección de clima; si no existe, salimos silenciosamente.
    const weatherSection = document.querySelector('.weather');
    if (!weatherSection) return;

    // Crea/ubica un contenedor para el resultado
    let wcEl = weatherSection.querySelector('.windchill');
    if (!wcEl) {
        wcEl = document.createElement('p');
        wcEl.className = 'windchill';
        weatherSection.appendChild(wcEl);
    }

    // CONDICIONES para calcular (métrico)
    const canCalcMetric = TEMP_C <= 10 && WIND_KMH > 4.8;

    if (canCalcMetric) {
        const wc = calculateWindChillC(TEMP_C, WIND_KMH);
        wcEl.textContent = `Windchill: ${wc.toFixed(1)} °C`;
    } else {
        wcEl.textContent = 'Windchill: N/A';
    }

    /* Si quisieras hacerlo en imperial, usa:
       const canCalcImp = TEMP_F <= 50 && WIND_MPH > 3;
       if (canCalcImp) {
         const wcF = calculateWindChillF(TEMP_F, WIND_MPH);
         wcEl.textContent = `Windchill: ${wcF.toFixed(1)} °F`;
       } else { wcEl.textContent = 'Windchill: N/A'; }
    */
}

document.addEventListener('DOMContentLoaded', renderWindChill);