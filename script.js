/**
 * dark mode button
 */
document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const currentMode = body.getAttribute('darkmode');
    body.setAttribute('darkmode', currentMode === 'on' ? 'off' : 'on');
});

