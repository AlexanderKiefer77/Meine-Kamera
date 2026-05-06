
let elem = document.documentElement; // for Fullscreen Modus

/**
 *  Open Fullscreen Modus,
 *  with click on h1
 */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
}

/**
 *  Close Fullscreen Modus,
 *  with click on "© Created by Alexander Kiefer"
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

