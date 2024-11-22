const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris",
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4",
    },
    {
        question: "Who wrote 'Hamlet'?",
        choices: ["Shakespeare", "Homer", "Dickens", "Tolstoy"],
        correct: "Shakespeare",
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');
const scoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    choicesEl.innerHTML = "";

    currentQuizData.choices.forEach(choice => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="answer" value="${choice}" id="${choice}">
                        <label for="${choice}">${choice}</label>`;
        choicesEl.appendChild(li);
    });
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selected;
    answers.forEach(answer => {
        if (answer.checked) {
            selected = answer.value;
        }
    });
    return selected;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            scoreEl.classList.remove('hidden');
            resultEl.textContent = `${score} / ${quizData.length}`;
            submitBtn.classList.add('hidden');
        }
    } else {
        alert("Please select an answer!");
    }
});

loadQuiz();
