const startSection = document.querySelector('.start-quiz-section');
const responseSection = document.querySelector('.response-section');
const startButton = document.querySelector('.start-quiz-button');
const responseButton = document.querySelector('.response-button');
const gameSection = document.querySelector('.game-section');
const questionText = document.querySelector('#question');
const responseText = document.querySelector('#response');
const scoreText = document.querySelector('#score-text');
const totalQuestions = document.querySelector('#total-questions');
const choicesUL = document.querySelector('.choices');

const questions = [
    {
        question: "What is Yun's favorite pizza restaurant?",
        answer: "Savoy",
        choices: ["La Strada", "Zachary's", "Savoy", "Little Caesar's"],
    },
    {
        question: "What is Yun's favorite book?",
        answer: "the Bible",
        choices: ["the Bible", "Harry Potter", "The Lord of the Rings", "A Game of Thrones"],
    },
    {
        question: "Where was Yun born?",
        answer: "Seoul",
        choices: ["Seoul", "Seattle", "Los Angeles", "Tokyo"],
    },
];

let questionNumber = 0;
let numberOfQuestions = questions.length;
let currentScore = 0;
scoreText.textContent = ` Current Score: ${currentScore}`;
totalQuestions.textContent = ` out of ${numberOfQuestions}`;
let isCorrect = ""


function showResponse(correct) {
    if (correct) {
        currentScore++;
        responseText.textContent = "That's right! You're a amazing!"
        gameSection.classList.add("disappear");
        responseSection.classList.remove("disappear");
    } else {
        responseText.textContent = "Wow. You're really bad at this."
        gameSection.classList.add("disappear");
        responseSection.classList.remove("disappear");
    }
}

function checkAnswer(correctAnswer, chosenAnswer) {
    if (correctAnswer === chosenAnswer) {
        isCorrect = true;
        showResponse(true);
    } else {
        isCorrect = false;
        showResponse(false);
    }
    console.log("is Correct? ", isCorrect);
}

function showQuestionAndAnswers(questions) {
    question.textContent = `${questionNumber + 1}) ${questions[questionNumber].question}`;
    questions[questionNumber].choices.forEach(choice => {
        const choiceLI = document.createElement("li");
        const choiceText = document.createTextNode(`${choice}`);
        choiceLI.append(choiceText);
        choicesUL.appendChild(choiceLI);
    });
    const choiceLIs = document.querySelectorAll('li');
    choiceLIs.forEach(li => {
        li.addEventListener('click', function () {
            console.log(this.innerText);
            console.log(questions[questionNumber].answer)
            checkAnswer(questions[questionNumber].answer, this.innerText)
        })
    })
    // console.log("question choices: ", questions[questionNumber].choices);
    // questionNumber++;
}

function startQuiz() {
    startSection.classList.add("disappear");
    gameSection.classList.remove("disappear");
    showQuestionAndAnswers(questions);
}

startButton.addEventListener('click', startQuiz);