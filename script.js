
let headline = document.getElementById('headline');
let content = document.getElementById('content');
let dynamicContent = document.getElementById('dynamicContent');



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
