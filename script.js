let content = document.getElementById('content');
let techDatas = document.getElementById('techDatas');


/**
 * dark mode button
 */
document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const currentMode = body.getAttribute('darkmode');
    body.setAttribute('darkmode', currentMode === 'on' ? 'off' : 'on');
});

function backBtn() {
    techDatas.classList.add("d_none");
    content.classList.remove("d_none");
}
