let patternArr = [];
let currentPatternArr = [];
let playerChoicesArr = [];
let levelCount = 1;
let moveCount = 0;

$(document).on('keypress', function (event) {
    if ( event.key === "n") {
        generatePattern ();
        setPattern ();
        let audio = new Audio (`./audio/${currentPatternArr[0]}.mp3`); 
        audio.play();
        $(`#${currentPatternArr[0]}`).fadeTo(200, 0.3, function() { $(this).fadeTo(700, 1.0); });
        $('.btn').on('click', clickCheck);
    }
});

function generatePattern () {
    for (let i = 0; i < 100; i++) {
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
}


function setPattern () {
    if (currentPatternArr.length !== levelCount) {
        for (;moveCount < levelCount ;) {
            currentPatternArr.push(patternArr[moveCount]);
            moveCount++;
        }
        if (currentPatternArr.length === levelCount) {
            moveCount = 0;
        }
    };
}

function clickCheck (e) {
    let audio = new Audio (`./audio/${e.target.id}.mp3`); 
    audio.play();
    $(`#${e.target.id}`).fadeTo(200, 0.3, function() { $(this).fadeTo(700, 1.0); });

    if (e.target.id === currentPatternArr[moveCount]) {
        playerChoicesArr.push(e.target.id);
        moveCount++;
        if (playerChoicesArr.length === currentPatternArr.length) {
            levelCount++;
            $('#level').text(`LEVEL: ${levelCount}`);
            moveCount = 0;
            currentPatternArr = [];
            playerChoicesArr = [];
            setPattern();
            setTimeout(function () {
                let audio = new Audio (`./audio/${currentPatternArr[currentPatternArr.length - 1]}.mp3`);
                audio.play();
                $(`#${currentPatternArr[currentPatternArr.length - 1]}`).fadeTo(200, 0.3, function() { $(this).fadeTo(700, 1.0); });
            }, 500);
         }
    } else {
        let audio = new Audio (`./audio/wrong.mp3`);
        audio.play();
        $("body").css("background-color", "#ffffb2");
        $('#level').text(`LEVEL: 1`);
        setTimeout(function () {
            $("body").css("background-color", "#2a242b");
        }, 500);
        patternArr = [];
        currentPatternArr = [];
        playerChoicesArr = [];
        levelCount = 1;
        moveCount = 0;
    }
}