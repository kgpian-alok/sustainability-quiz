document.getElementById("currentYear").textContent = new Date().getFullYear();

const questions = [
    {
        question: "Question 1",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 1"
    },
    {
        question: "Question 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 1"
    },
    {
        question: "Question 3",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 1"
    },
    {
        question: "Question 4",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 1"
    },
    {
        question: "Question 5",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 1"
    },
    {
        question: "Question 6",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 2"
    },
    {
        question: "Question 7",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 2"
    },
    {
        question: "Question 8",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 2"
    },
    {
        question: "Question 9",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 2"
    },
    {
        question: "Question 10",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 2"
    },
    {
        question: "Question 11",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 3"
    },
    {
        question: "Question 12",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 3"
    },
    {
        question: "Question 13",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 3"
    },
    {
        question: "Question 14",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 3"
    },
    {
        question: "Question 15",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 3"
    },
    {
        question: "Question 16",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 4"
    },
    {
        question: "Question 17",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 4"
    },
    {
        question: "Question 18",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 4"
    },
    {
        question: "Question 19",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 4"
    },
    {
        question: "Question 20",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: "Option 4"
    }
];

const selectedQuestions = [];
let score = 0;

function getRandomQuestions() {
    while (selectedQuestions.length < 10) {  // Select 10 random questions
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(randomIndex)) {
            selectedQuestions.push(randomIndex);
        }
    }
}

function loadQuestions() {
    const quizForm = document.getElementById("quiz-form");
    quizForm.innerHTML = "";

    selectedQuestions.forEach((index, qIndex) => {
        const questionData = questions[index];
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        let optionsHtml = "";
        questionData.options.forEach((option, i) => {
            optionsHtml += `
                <div class="option">
                    <label>
                        <input type="radio" name="q${qIndex}" value="${option}">
                        ${option}
                    </label>
                </div>
            `;
        });

        questionDiv.innerHTML = `
            <p><strong>Question ${qIndex + 1}: </strong> ${questionData.question}</p>
            ${optionsHtml}
        `;

        quizForm.appendChild(questionDiv);
    });
}


function submitQuiz() {
    score = 0;
    let allAnswered = true;

    selectedQuestions.forEach((index, qIndex) => {
        const questionData = questions[index];
        const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);

        if (!selectedOption) {
            allAnswered = false;
        } else if (selectedOption.value === questionData.correct) {
            score++;
        }
    });

    if (!allAnswered) {
        alert("All questions are mandatory!");
        return; // Stop execution if any question is left unanswered
    }

    let resultText = "";
    if (score >= 9) {
        resultText = "Excellent";
    } else if (score >= 6) {
        resultText = "Very Good";
    } else if (score >= 3) {
        resultText = "Good";
    } else {
        resultText = "Poor";
    }

    document.getElementById("result").innerHTML = `Your score is ${score} / ${selectedQuestions.length}.<br> You are ${resultText}.`;
}

// Initialize the quiz
getRandomQuestions();
loadQuestions();