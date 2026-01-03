const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questions = [
  {
    question: "What is Eleven's favorite food?",
    options: ["Pizza", "Burger", "Waffles", "Pancakes"],
    answer: "Waffles"
  },
  {
    question: "What town is Stranger Things set in?",
    options: ["Hawkins", "Riverdale", "Star City", "Salem"],
    answer: "Hawkins"
  },
  {
    question: "What is the alternate dimension called?",
    options: ["The Void", "Upside Down", "Dark World", "Shadow Realm"],
    answer: "Upside Down"
  },
  {
    question: "Who is the police chief?",
    options: ["Steve", "Hopper", "Billy", "Eddie"],
    answer: "Hopper"
  },
  {
    question: "Which game do the kids love to play?",
    options: ["Chess", "D&D", "Poker", "Ludo"],
    answer: "D&D"
  }
];

startBtn.onclick = () => {
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  loadQuestion();
};

function loadQuestion() {
  selectedOption = null;
  nextBtn.disabled = true;
  questionEl.textContent = questions[currentQuestion].question;
  optionsEl.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");

    div.onclick = () => selectOption(div, option);
    optionsEl.appendChild(div);
  });
}

function selectOption(element, option) {
  document.querySelectorAll(".option").forEach(opt =>
    opt.classList.remove("selected")
  );
  element.classList.add("selected");
  selectedOption = option;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizScreen.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

