


let patternArr = [];
let currentPatternArr = [];
let levelCount = 1;
let i = 0;

for (let i = 0; i < 100; i++) { // make pattern
    let num = Math.random();
    num = num * 4;
    num = Math.floor(num) + 1;
    if(num === 1) {
        patternArr.push('green');
    } else if (num === 2) {
        patternArr.push('red');
    } else if (num === 3) {
        patternArr.push('yellow');
    } else if (num === 4) {
        patternArr.push('blue');
    } 
}

console.log(`total pattern: ${patternArr}`);


$(document).on('keypress', function (event) {
    if ( event.key === "n") {

        currentPatternArr.push(patternArr[i]);

        // anim ///////
        let currentStep = patternArr[i];
        let audio = new Audio (`./audio/${currentStep}.mp3`);
        audio.play();
        $(`#${currentStep}`).addClass('pressed');
        setTimeout(function () {
            $(`#${currentStep}`).removeClass('pressed')
        }, 300);
        //////////////

        console.log(`current pattern: ${currentPatternArr}`);
        console.log(`new pattern move: ${patternArr[i]}`);
        console.log(`levelCount: ${levelCount}`);
        console.log(`i: ${i}`);

        $('.btn').on('click', function (event) {

            let playerChoice = event.target.id;
        
            // anim ///////
            let audio = new Audio (`./audio/${playerChoice}.mp3`); 
            audio.play();
            $(`#${playerChoice}`).addClass('pressed');
            setTimeout(function () {
                $(`#${playerChoice}`).removeClass('pressed');
            }, 300);
            //////////////

            if (playerChoice !== currentPatternArr[i]) {
                $("body").html("<p>GAME OVER<p/>").css("color", "#d7B550").css("font-size", "9rem"); // game over
            }

            
            if (playerChoice === currentPatternArr[i] && i < levelCount) { 
                i++
                currentPatternArr.push(patternArr[i]);
                
                console.log(`player choice: ${playerChoice}`);
                console.log(`new pattern added: ${patternArr[i]}`);
                console.log(`current pattern: ${currentPatternArr}`);
                console.log(`levelCount: ${levelCount}`);
                console.log(`i: ${i}`);

            }
            
            if (i > levelCount) { 
                i = 0;
                levelCoun++;
                currentPatternArr.push(patternArr[levelCount]);

                // anim ///////
                let currentStep = patternArr[levelCount]; 
                let audio = new Audio (`./audio/${currentStep}.mp3`);
                audio.play();
                $(`#${currentStep}`).addClass('pressed');
                setTimeout(function () {
                $(`#${currentStep}`).removeClass('pressed')
                }, 300);
                //////////////

                console.log(`levelCount: ${levelCount}`);
                console.log(`i: ${i}`);

            } 
            

        });
            
        
    }
});