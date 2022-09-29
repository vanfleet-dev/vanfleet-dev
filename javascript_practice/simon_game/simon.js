


let patternArr = [];
let currentPatternArr = [];
let playerChoicesArr = [];
let levelCount = 3;
let moveCount = 0;

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

        if (currentPatternArr.length !== levelCount) {
            for (;moveCount < levelCount ;) {
            
                currentPatternArr.push(patternArr[moveCount]);
    
                // let audio = new Audio (`./audio/${currentPatternArr[moveCount]}.mp3`);
                // audio.play();
        
                //$(`#${currentPatternArr[moveCount]}`).addClass('pressed');
    
                //$(`#${currentPatternArr[moveCount]}`).removeClass('pressed');
    
                moveCount++;

            }
            
            if (currentPatternArr.length === levelCount) {
                moveCount = 0;
            }
        };        

        test1 (); //console logs

        $('.btn').on('click', clickCheck);
    }
});


function clickCheck (e) {
    let audio = new Audio (`./audio/${e.target.id}.mp3`); 
    audio.play();
    $(`#${e.target.id}`).addClass('pressed');
    setTimeout(function () {
        $(`#${e.target.id}`).removeClass('pressed');
    }, 300);

    if (e.target.id === currentPatternArr[moveCount]) {
        playerChoicesArr.push(e.target.id);
        moveCount++;
        if (playerChoicesArr.length === currentPatternArr.length) {
            levelCount++;
            moveCount = 0;
            currentPatternArr = [];
            playerChoicesArr = [];
        }
        console.log(`intra move count: ${moveCount}`); //test
        console.log(`player choices: ${playerChoicesArr}`); //test
    } else {
        $("body").html("<p>GAME OVER<p/>").css("color", "#d7B550").css("font-size", "9rem"); // game over
    }
    
    console.log(`target ID: ${e.target.id}`); //test
}


function moveAmin(val) {
    // anim ///////
    let audio = new Audio (`./audio/${e.target.id}.mp3`); 
    audio.play();
    $(`#${e.target.id}`).addClass('pressed');
    setTimeout(function () {
        $(`#${e.target.id}`).removeClass('pressed');
    }, 300);
    //////////////
};



function test1 () {
    console.log(`current pattern: ${currentPatternArr}`);
    //console.log(`new pattern move: ${patternArr[moveCount]}`);
    console.log(`levelCount: ${levelCount}`);
    console.log(`move count: ${moveCount}`);
};



function test2 () {
    console.log(`player choice: ${e.target.id}`);
    //console.log(`new pattern added: ${patternArr[moveCount]}`);
    console.log(`current pattern: ${currentPatternArr}`);
    console.log(`levelCount: ${levelCount}`);
    console.log(`move count: ${moveCount}`);
};



function moveAmin(val) {
    // anim ///////
    let audio = new Audio (`./audio/${e.target.id}.mp3`); 
    audio.play();
    $(`#${e.target.id}`).addClass('pressed');
    setTimeout(function () {
        $(`#${e.target.id}`).removeClass('pressed');
    }, 300);
    //////////////
};



(e.target.id !== currentPatternArr[moveCount]) 


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