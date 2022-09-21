// mouse
const synthKey = document.querySelector(".synth-container")

synthKey.addEventListener('mouseup', function(e) {
    const target = e.target;
    let synthId = target.id;
    if (document.querySelector(`.${synthId}-audio`).muted === true) {
        document.querySelector(`.${synthId}-audio`).muted = false;
    } else {
        document.querySelector(`.${synthId}-audio`).muted = true;
    }
});