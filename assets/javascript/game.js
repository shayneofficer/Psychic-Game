var winsBox = document.getElementById("wins-box");
var lossesBox = document.getElementById("losses-box");
var guessesLeftBox = document.getElementById("guesses-left-box");
var guessesSoFarBox = document.getElementById("guesses-so-far-box");

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "Your Guesses So Far: ";

function randomLetter() {
    return letters[Math.floor(Math.random() * 27)];
}

var correctLetter = randomLetter();
console.log(correctLetter);

document.onkeyup = function (event) {
    var userInput = event.key;
    userInput = userInput.toUpperCase();

    console.log("input: " + userInput);

    if (userInput === correctLetter) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = "Your Guesses So Far: ";
        winsBox.textContent = "Wins: " + wins;
        guessesLeftBox.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarBox.textContent = guessesSoFar;
        correctLetter = randomLetter();
        console.log(correctLetter);
    }
    else {
        guessesLeft--;
        if (guessesSoFar === "Your Guesses So Far: ") {
            guessesSoFar += userInput.toLowerCase();
        }
        else {
            guessesSoFar += ", " + userInput.toLowerCase();
        }

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessesSoFar = "Your Guesses So Far: ";
            lossesBox.textContent = "Losses: " + losses;
            guessesLeftBox.textContent = "Guesses Left: " + guessesLeft;
            correctLetter = randomLetter();
            console.log(correctLetter);
        }
        guessesLeftBox.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarBox.textContent = guessesSoFar;

    }

}