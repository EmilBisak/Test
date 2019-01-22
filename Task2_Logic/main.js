let lettersElement = document.querySelector(".letters-container");
let currentLetter = document.querySelector("#current-letter");
let letterInput = document.querySelector("#letterInput");
let hitElement = document.querySelector(".hit");
let missElement = document.querySelector(".miss");
let leftElement = document.querySelector(".left");
let startBtn = document.querySelector("#start-btn");

let lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberArr = [];
let pastNumberArr = [];
let level = 500;
let count = level;
let numberOfPassedLetters = 0;
let lettersLeft = 26;
let hitLetterArr = [];
let miss = [];
let current;
let inputLetterTyped = "?";
let pastLetters = [];
let isPlaying = false;
let isTyped = false;
let counter;

window.onload = init();


letterInput.addEventListener("keyup", matchTypedLetterWithCurrentLetter);
startBtn.addEventListener("click", startStopGame)


function startStopGame() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        letterInput.focus()
        pastNumberArr.push(numberArr[numberOfPassedLetters])
        counter = setInterval(timer, 10);
        startBtn.innerHTML = "Stop Game";
    } else {
        clearInterval(counter);
        startBtn.innerHTML = "Start Game"
    }
}


function matchTypedLetterWithCurrentLetter(e) {
    inputLetterTyped = e.key.toUpperCase();
    isTyped = true;
    if (isTyped) {
        letterInput.removeEventListener("keyup", matchTypedLetterWithCurrentLetter);
    }
    console.log("inputLetterTyped - ", inputLetterTyped);
    current = lettersArr[numberArr[numberOfPassedLetters] - 1]
    if (inputLetterTyped === current) {
        console.log("CORRECT!!!");
        hitLetterArr.push(current)
        console.log("hitLetterArr -- ", hitLetterArr);

        hitElement.innerHTML = `Hit: ${hitLetterArr.length}`;
        pastNumberArr.pop()
    } else {
        console.log("WRONG!!!");

    }
    createLetterList()

}


function timer() {

    if (count >= 0 && numberOfPassedLetters < 26) {

        // currentLetter.innerHTML = count / 100 + " secs";
        currentLetter.innerHTML = numberArr[numberOfPassedLetters];

    } else if (numberOfPassedLetters <= 26) {
        letterInput.value = "";
        createLetterList()
        letterInput.addEventListener("keyup", matchTypedLetterWithCurrentLetter);
        count = level;
        numberOfPassedLetters++;
        lettersLeft--;
        missElement.innerHTML = `Miss: ${pastNumberArr.length}`;
        leftElement.innerHTML = `Left: ${lettersLeft !== -1 ? lettersLeft : 0}`;
        timer();
        pastNumberArr.push(numberArr[numberOfPassedLetters]);
        pastLetters.push(numberArr[numberOfPassedLetters]);

    } else {
        clearInterval(counter);
        startBtn.innerHTML = "Restart Game";
        startBtn.addEventListener("click", () => { window.location.reload() });
        startBtn.focus();
        currentLetter.innerHTML = "Game Over";
        currentLetter.style.color = "#788896";
        return;

    }
    count--;
}



function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}



function createLetterList() {
    lettersElement.innerHTML = "";
    for (let i = 0; i < lettersArr.length; i++) {
        const element = lettersArr[i];
        let current = i + 1

        lettersElement.innerHTML += `<div class="letter-wrapper"><h2 id="${current}" class=" letter${hitLetterArr.includes(element) ? ' correct' : ''}">${element} (${current})</h2></div>`;
    }
    LetterIsMissed();
}

function createNumberArr() {
    for (let i = 0; i < lettersArr.length; i++) {
        numberArr.push(i + 1);
    }
}



function LetterIsMissed() {
    let textEl = document.querySelectorAll(".letter");
    textEl.forEach(element => {
        if (pastNumberArr.includes(parseInt(element.getAttribute("id")))) {
            element.classList.add("wrong")
        }
    });
}



function init() {
    // Show letter list in UI
    createLetterList();
    // Create number array
    createNumberArr()
    // Shuffle random letter number in numberArr
    shuffle(numberArr);
}