function unmuter (synthId) {
    if (document.querySelector(`.${synthId}-audio`).muted === true) {
        document.querySelector(`.${synthId}-audio`).muted = false;
    } else {
        document.querySelector(`.${synthId}-audio`).muted = true;
    }
}


const numSynthBtns = document.querySelectorAll(".synth").length;

for (let i = 0; i < numSynthBtns; i++) {
    document.querySelectorAll(".synth")[i].addEventListener("click", function() {

        let synthId = this.id;

        switch (synthId) {
            case "synth-1":
                unmuter (synthId);
                    break;
            case "synth-2":
                unmuter (synthId);
                    break;
            case "synth-3":
                unmuter (synthId);
                    break;
            case "synth-4":
                unmuter (synthId);
                    break;
            case "synth-5":
                unmuter (synthId);
                    break;
            case "synth-6":
                unmuter (synthId);
                    break;
            case "synth-7":
                unmuter (synthId);
                    break;
            default: console.log(synthID);
        }

    });
}


