const buttons = document.querySelectorAll('.button');
const humanChoiceContainer = document.querySelector('.human-choice-image-div');
const humanChoiceImage = document.querySelector(".human-choice-image");
const computerChoiceContainer = document.querySelector('.computer-choice-image-div');
const computerChoiceImage = document.querySelector(".computer-choice-image");


let currentHumanChoice = "";
let currentComputerChoice = "";

function draw() {
    console.log("it's a draw");
}

function humanWins() {
    console.log("humans win");
}

function computerWins() {
    console.log("computers win");
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