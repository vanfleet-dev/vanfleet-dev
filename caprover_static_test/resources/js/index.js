document.onclick = function() {changeColor()};

function changeColor () {
    document.querySelector("p").classList.toggle("change-color");
}