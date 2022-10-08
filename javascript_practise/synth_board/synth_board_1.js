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



// keyboard
const numSynthBtns = document.querySelectorAll(".synth").length;

document.addEventListener("keypress", function (e) {
    keyInput = e.key;
    for (let i = 0; i < numSynthBtns; i++) {
        let htmlVal = document.querySelectorAll(".synth")[i].innerHTML;
        if ( htmlVal === keyInput) {
            let synthId = document.querySelectorAll(".synth")[i].id;
            if (document.querySelector(`.${synthId}-audio`).muted === true) {
                document.querySelector(`.${synthId}-audio`).muted = false;
            } else {
                document.querySelector(`.${synthId}-audio`).muted = true;
            }
        }
    }
});