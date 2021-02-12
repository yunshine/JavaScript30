const startSection = document.querySelector('.start-quiz-section');
const startButton = document.querySelector('.start-quiz-button');
const gameSection = document.querySelector('.game-section');

const questions = [
    {
        question: ,
        answer: ,
        choices: [],
    }
    {
        question: ,
        answer: ,
        choices: [],
    }
    {
        question: ,
        answer: ,
        choices: [],
    }
    {
        question: ,
        answer: ,
        choices: [],
    }
    {
        question: ,
        answer: ,
        choices: [],
    }

];

function startQuiz() {
    startSection.classList.add("disappear");
    gameSection.classList.remove("disappear");
}

startButton.addEventListener('click', startQuiz);