const startSection = document.querySelector('.start-quiz-section');
const startButton = document.querySelector('.start-quiz-button');
const gameSection = document.querySelector('.game-section');
const questionText = document.querySelector('#question');
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

function showQuestion(questions) {
    let questionNumber = 0;
    let numberOfQuestions = questions.length;

    question.textContent = `${questionNumber + 1}) ${questions[questionNumber].question}`;
    questions[questionNumber].choices.forEach(choice => {
        const choiceLI = document.createElement("li");
        const choiceText = document.createTextNode(`${choice}`);
        choiceLI.append(choiceText);
        choicesUL.appendChild(choiceLI);
    });

    // console.log("question choices: ", questions[questionNumber].choices);
    questionNumber++;
}

function startQuiz() {
    startSection.classList.add("disappear");
    gameSection.classList.remove("disappear");
    showQuestion(questions);
}

startButton.addEventListener('click', startQuiz);