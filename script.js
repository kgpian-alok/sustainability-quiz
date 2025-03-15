document.getElementById("currentYear").textContent = new Date().getFullYear();

const questions = [
    {
        question: "Which of the following are considered Scope I emissions for IIT Kharagpur campus?",
        options: ["Emission by LPG gas used in cooking", "Purchased electricity", "Vehicular emission", "Train emission"],
        correct: ["Emission by LPG gas used in cooking", "Vehicular emission"]
    },
    {
        question: "Which of the following actions can help reduce Scope I emissions on campus?",
        options: ["Promoting electric vehicles (EVs)", "Reducing fuel consumption in institute vehicles", "Increasing the use of LPG for cooking", "Encouraging cycling and walking"],
        correct: ["Promoting electric vehicles (EVs)", "Reducing fuel consumption in institute vehicles", "Encouraging cycling and walking"]
    },
    {
        question: "Which of the following are considered Scope II emissions for IIT Kharagpur campus?",
        options: ["Purchased electricity", "On-campus solar power generation", "Energy consumption in hostels, classrooms, and offices", "Water usage"],
        correct: ["Purchased electricity", "Energy consumption in hostels, classrooms, and offices"]
    },
    {
        question: "Which renewable energy sources can be used to reduce the carbon footprint of IIT Kharagpur campus?",
        options: ["Solar power", "Wind energy", "Fossil fuels", "Biomass burning"],
        correct: ["Solar power", "Wind energy", "Biomass burning"]
    },
    {
        question: "What sustainable initiatives can be implemented to reduce Scope II emissions, especially electricity emissions?",
        options: ["Using energy-efficient lighting (LEDs)", "Installing solar panels", "Increasing reliance on diesel generators", "Installation of sensor-based automatic switch on/off of lights"],
        correct: ["Using energy-efficient lighting (LEDs)", "Installing solar panels", "Installation of sensor-based automatic switch on/off of lights"]
    },
    {
        question: "What are the benefits of reducing the carbon footprint of IIT Kharagpur campus?",
        options: ["Lower energy costs", "Improved air quality on campus", "Increased carbon emissions", "Contribution to global climate change mitigation"],
        correct: ["Lower energy costs", "Improved air quality on campus", "Contribution to global climate change mitigation"]
    },
    {
        question: "How can residents of IIT Kharagpur contribute to sustainability on campus?",
        options: ["Using diesel generators for personal power backup", "Reducing electricity usage", "Leaving lights and fans on when not in use", "Participating in tree plantation drives"],
        correct: ["Reducing electricity usage", "Participating in tree plantation drives"]
    },
    {
        question: "What is the primary cause of greenhouse gas emissions from vehicles on IIT Kharagpur campus?",
        options: ["Use of petrol and diesel-powered vehicles", "Excessive water consumption", "Lack of efficient public transport options", "Increased use of electric vehicles"],
        correct: ["Use of petrol and diesel-powered vehicles", "Lack of efficient public transport options"]
    },
    {
        question: "Which sustainable transportation solutions should IIT Kharagpur promote?",
        options: ["Expansion of bicycle-sharing programs", "Use of electric vehicles within the campus", "Increasing private vehicle usage", "Encouraging more fuel-based vehicles on campus"],
        correct: ["Expansion of bicycle-sharing programs", "Use of electric vehicles within the campus"]
    },
    {
        question: "What factors contribute to high energy consumption in the buildings of IIT Kharagpur?",
        options: ["Use of air conditioning and heating systems", "Inefficient lighting and electrical appliances", "High occupancy levels in halls and classrooms", "Presence of solar panels"],
        correct: ["Use of air conditioning and heating systems", "Inefficient lighting and electrical appliances", "High occupancy levels in halls and classrooms"]
    },
    {
        question: "Which of the following are effective waste management strategies?",
        options: ["Implementing recycling programs", "Reducing single use of plastic on campus", "Dumping all waste in landfills", "Segregation of waste at the source"],
        correct: ["Implementing recycling programs", "Reducing single use of plastic on campus", "Segregation of waste at the source"]
    },
    {
        question: "What measures can help improve water sustainability at IIT Kharagpur?",
        options: ["Implementing rainwater harvesting", "Reducing water wastage in hostels and labs", "Increasing water consumption", "Recycling wastewater for non-drinking purposes"],
        correct: ["Implementing rainwater harvesting", "Reducing water wastage in hostels and labs", "Recycling wastewater for non-drinking purposes"]
    },
    {
        question: "What steps can be taken to reduce carbon emissions from halls?",
        options: ["Using energy-efficient appliances", "Implementing use of solar cookers and solar water heaters in halls", "Encouraging students to switch off lights and fans when not in use", "Increasing the use of diesel-powered generators"],
        correct: ["Using energy-efficient appliances", "Implementing use of solar cookers and solar water heaters in halls", "Encouraging students to switch off lights and fans when not in use"]
    },
    {
        question: "What are the long-term benefits of sustainability initiatives at IIT Kharagpur?",
        options: ["Reduce environmental impact", "Cost savings through energy efficiency", "Improve air quality on campus", "Increased fossil fuel consumption"],
        correct: ["Reduce environmental impact", "Cost savings through energy efficiency", "Improve air quality on campus"]
    },
    {
        question: "What policies can IIT Kharagpur adopt for a more sustainable campus?",
        options: ["Mandate energy audits for buildings", "Implement green building standards", "Increase reliance on renewable energy", "Increase electricity consumption"],
        correct: ["Mandate energy audits for buildings", "Implement green building standards", "Increase reliance on renewable energy"]
    },
    {
        question: "How does excessive vehicle use affect the campus environment?",
        options: ["Increases air pollution", "Leads to higher carbon emissions", "Causes noise pollution", "Improves air quality"],
        correct: ["Increases air pollution", "Leads to higher carbon emissions", "Causes noise pollution"]
    },
    {
        question: "What are the benefits of using solar energy on campus?",
        options: ["Reduces dependence on coal-based power", "Lowers electricity bills", "Increases greenhouse gas emissions", "Provides a renewable and sustainable energy source"],
        correct: ["Reduces dependence on coal-based power", "Lowers electricity bills", "Provides a renewable and sustainable energy source"]
    },
    {
        question: "What are the key challenges in implementing sustainability initiatives?",
        options: ["High initial investment costs", "Lack of awareness among students and staff", "No benefits in the long run", "Difficulty in changing existing infrastructure"],
        correct: ["High initial investment costs", "Lack of awareness among students and staff", "Difficulty in changing existing infrastructure"]
    },
    {
        question: "Which campus activities contribute to carbon emissions?",
        options: ["Transport of goods and food supplies", "Electricity consumption in academic and residential buildings", "Tree plantation drives", "Fuel combustion in LPG cooking and diesel generators"],
        correct: ["Transport of goods and food supplies", "Electricity consumption in academic and residential buildings", "Fuel combustion in LPG cooking and diesel generators"]
    },
    {
        question: "How does deforestation impact sustainability on campus?",
        options: ["Reduces carbon sequestration, increasing CO₂ levels", "Decreases biodiversity and ecosystem balance", "Improves air quality", "Increases soil erosion and water runoff", "Increase in temperature and decrease in humidity"],
        correct: ["Reduces carbon sequestration, increasing CO₂ levels", "Decreases biodiversity and ecosystem balance", "Increases soil erosion and water runoff", "Increase in temperature and decrease in humidity"]
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
                        <input type="checkbox" name="q${qIndex}" value="${option}">
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
        const selectedOptions = Array.from(document.querySelectorAll(`input[name="q${qIndex}"]:checked`)).map(el => el.value);
        // alert(selectedOptions);
        if (selectedOptions.length === 0) {
            allAnswered = false;
        } else if (arraysEqual(selectedOptions, questionData.correct)) {
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

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.sort().join(",") === arr2.sort().join(",");
}

// Initialize the quiz
getRandomQuestions();
loadQuestions();
