const buttons = document.querySelectorAll('.button');
const humanChoiceContainer = document.querySelector('.human-choice-image-div');
const humanChoiceImage = document.querySelector(".human-choice-image");
const computerChoiceContainer = document.querySelector('.computer-choice-image-div');
const computerChoiceImage = document.querySelector(".computer-choice-image");

function showHumanChoice(evt) {
    const choice = evt.target.innerText;
    humanChoiceImage.setAttribute('src', `assets/${choice}.png`);
    humanChoiceImage.setAttribute('alt', choice);
    showComputerChoice();
}

function showComputerChoice(evt) {
    const computerChoices = ["rock", "scissors", "paper"];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    computerChoiceImage.setAttribute('src', `assets/${computerChoice}.png`);
    computerChoiceImage.setAttribute('alt', computerChoice);
}

buttons.forEach(button => {
    button.addEventListener('click', showHumanChoice)
});