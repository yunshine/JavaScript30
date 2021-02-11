const buttons = document.querySelectorAll('.button');
const humanChoiceContainer = document.querySelector('.human-choice-image-div');
const humanChoiceImage = document.querySelector(".human-choice-image");
const computerChoiceContainer = document.querySelector('.computer-choice-image-div');
const computerChoiceImage = document.querySelector(".computer-choice-image");
const resultText = document.querySelector('.result');
const humanScoreText = document.querySelector('#human-score');
const computerScoreText = document.querySelector('#computer-score');

let currentHumanChoice = "";
let currentComputerChoice = "";

let currentHumanScore = "0";
let currentComputerScore = "0";

function draw() {
    resultText.innerHTML = "It's a draw.";
}

function humanWins() {
    resultText.innerHTML = "You win!";
    currentHumanScore++;
    console.log("human score: ", currentHumanScore);
    humanScoreText.innerText = currentHumanScore;
}

function computerWins() {
    resultText.innerHTML = "Oh no. The computer has defeated mankind.";
    currentComputerScore++;
    console.log("computer score : ", currentComputerScore);
    computerScoreText.innerText = currentComputerScore;
}

function determineResult() {
    if (currentHumanChoice === currentComputerChoice) {
        draw();
    } else if (currentHumanChoice === "rock" && currentComputerChoice === "scissors") {
        humanWins();
    } else if (currentHumanChoice === "scissors" && currentComputerChoice === "paper") {
        humanWins();
    } else if (currentHumanChoice === "paper" && currentComputerChoice === "rock") {
        humanWins();
    } else if (currentComputerChoice === "rock" && currentHumanChoice === "scissors") {
        computerWins();
    } else if (currentComputerChoice === "scissors" && currentHumanChoice === "paper") {
        computerWins();
    } else if (currentComputerChoice === "paper" && currentHumanChoice === "rock") {
        computerWins();
    }
}

function showComputerChoice(evt) {
    const computerChoices = ["rock", "scissors", "paper"];
    currentComputerChoice = computerChoices[Math.floor(Math.random() * 3)];
    computerChoiceImage.setAttribute('src', `assets/${currentComputerChoice}.png`);
    computerChoiceImage.setAttribute('alt', currentComputerChoice);
    determineResult();
}

function showHumanChoice(evt) {
    currentHumanChoice = evt.target.innerText;
    humanChoiceImage.setAttribute('src', `assets/${currentHumanChoice}.png`);
    humanChoiceImage.setAttribute('alt', currentHumanChoice);
    showComputerChoice();
}

buttons.forEach(button => {
    button.addEventListener('click', showHumanChoice)
});