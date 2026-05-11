
let headline = document.getElementById('headline');
let content = document.getElementById('content');
let dynamicContent = document.getElementById('dynamicContent');

const templates = {
    technicDatas: templateTechnicDatas,
    cameraModi: templateCameraModi,
    objective: templateObjective,
    sigma: templateSigma,
    nikonKit: templateNikonKit,
    tamron: templateTamron,
    tips: templateTips,
    depthOfField: templateDepthOfField,
    apps: templateApps,
    milkyWay: templateMilkyWay,
    northernLights: templateNorthernLights,
    fireworks: templateFireworks,
    fance: templateFance,
    monitor: templateMonitor,
};

/**
 * dark mode button
 */
document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const currentMode = body.getAttribute('darkmode');
    body.setAttribute('darkmode', currentMode === 'on' ? 'off' : 'on');
});

function backBtn() {
    dynamicContent.classList.add("d_none");
    content.classList.remove("d_none");
    headline.innerText = 'Meine Kamera';
}

/* ############################# */


function showContent(name, title = '') {
    const template = templates[name];

    if (!template) {
        console.error(`Template "${name}" nicht gefunden`);
        return;
    }

    if (title) {
        headline.innerText = title;
    }

    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    dynamicContent.innerHTML = template();
}

// function technicDatas() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateTechnicDatas();
// }

// function cameraModi() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateCameraModi();
// }

// function objective() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     headline.innerText = 'Meine Objektive';
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateObjective();
// }

// function sigma() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateSigma();
// }

// function tips() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     headline.innerText = 'Meine Tipps';
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateTips();
// }

// function nikonKit() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateNikonKit();
// }

// function tamron() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateTamron();
// }

// function depthOfField() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateDepthOfField();
// }

// function apps() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateApps();
// }

// function milkyWay() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateMilkyWay();
// }

// function northernLights() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateNorthernLights();
// }

// function fireworks() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateFireworks();
// }

// function fence() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateFance();
// }

// function monitor() {
//     content.classList.add("d_none");
//     dynamicContent.classList.remove("d_none");
//     dynamicContent.innerHTML = '';
//     dynamicContent.innerHTML = templateMonitor();
// }


// favicon
const svg = `
    <svg class="badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <defs>

            <!-- Gold Metall Verlauf -->
            <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#FFF4C2" />
                <stop offset="35%" stop-color="#F7D35A" />
                <stop offset="70%" stop-color="#D4A017" />
                <stop offset="100%" stop-color="#9C6B00" />
            </linearGradient>

            <!-- Highlight -->
            <radialGradient id="shine" cx="30%" cy="25%" r="70%">
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.55" />
                <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
            </radialGradient>

            <!-- Innerer Schatten -->
            <radialGradient id="innerShade" cx="50%" cy="60%" r="75%">
                <stop offset="0%" stop-color="#000" stop-opacity="0" />
                <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
            </radialGradient>

            <!-- Kantenverdunklung -->
            <linearGradient id="edgeDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#000" stop-opacity="0.15" />
                <stop offset="100%" stop-color="#000" stop-opacity="0.35" />
            </linearGradient>

        </defs>

        <!-- Außen-Badge -->
        <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#gold)" />

        <!-- Innerer Schatten -->
        <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#innerShade)" />

        <!-- Glanz -->
        <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#shine)" />

        <!-- Untere Tiefe -->
        <rect x="1" y="1" width="14" height="14" rx="3.5" fill="url(#edgeDark)" />

        <!-- Innenrahmen -->
        <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="2.8" fill="none" stroke="#FFF6D0"
            stroke-width="0.35" opacity="0.9" />

        <!-- Monogramm -->
        <g transform="skewX(-6) translate(0.2,0)">

            <!-- Schatten -->
            <g fill="#000" opacity="0.35" transform="translate(0.3,0.4)">
                <path
                    d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                <path
                    d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
            </g>

            <!-- Hauptschrift -->
            <g fill="#111" stroke="#FFFFFF" stroke-width="0.45" paint-order="stroke"
                stroke-linejoin="round">
                <path
                    d="M4.3 12 L6.2 4.8 L8.1 12 L7.3 12 L6.9 10.6 H5.7 L5.3 12 Z M6.1 9.4 H6.7 L6.4 8 Z" />
                <path
                    d="M9.6 4.8 V12 H10.6 V9.8 L12.2 12 H13.2 L11.3 9.2 L13.1 4.8 H12.1 L10.6 7.6 V4.8 Z" />
            </g>

        </g>
    </svg>
`;

const url = "data:image/svg+xml," + encodeURIComponent(svg);

document.querySelector("link[rel='icon']").href = url;
