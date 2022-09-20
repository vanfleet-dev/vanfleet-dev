document.querySelector("h1").addEventListener("click", diceRoll);


function diceRoll () {
    let num1 = 0;
    let num2 = 0;
    for (let i = 1; i < 3; i++) {
    let num = Math.random();
    num = num * 5;
    num = Math.floor(num) + 1;
        if (i === 1) {
            num1 = num;
            document.querySelector(".dice-you").innerHTML = `<img class="img1" src="./images/dice${num}.png"></img>`;
        } else {
            num2 = num;
            document.querySelector(".dice-ai").innerHTML = `<img class="img2" src="./images/dice${num}.png"></img>`;
            
            if (num1 === num2) {
                document.querySelector(".message-container").innerHTML = `<p class='message'>tie!</p>`;
            } else if (num1 > num2) {
                document.querySelector(".message-container").innerHTML = `<p class='message'>${winResponse[num]}</p>`;
            } else {
                document.querySelector(".message-container").innerHTML = `<p class='message'>${lossResponse[num]}</p>`;
            }
            
        }
    } 
}

const winResponse = ["yew!", "winner! winner!", "that's a bingo!", "making this look easy!", "lets go!", "champion!"]
const lossResponse = ["HAHAHAHAHAHA", "you are not very good at this", "lost again XD", "just give up", "oof, that hurts", ":)"] 