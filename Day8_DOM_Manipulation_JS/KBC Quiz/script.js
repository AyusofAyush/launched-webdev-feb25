// script.js

// A pool of 25 questions (KBC style). Each question is an object:
// { question: "", options: ["", "", "", ""], correctIndex: number }
const questionPool = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctIndex: 2,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    correctIndex: 0,
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctIndex: 1,
  },
  {
    question: "Which country is called the Land of the Rising Sun?",
    options: ["China", "Australia", "New Zealand", "Japan"],
    correctIndex: 3,
  },
  {
    question: "The Great Wall of China is visible from space. True or False?",
    options: ["True", "False", "Not sure", "It depends on the season"],
    correctIndex: 1,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctIndex: 2,
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Mark Language",
    ],
    correctIndex: 0,
  },
  {
    question: "Which year did India gain independence?",
    options: ["1945", "1947", "1950", "1952"],
    correctIndex: 1,
  },
  {
    question: "Who is known as the father of Geometry?",
    options: ["Archimedes", "Pythagoras", "Aristotle", "Euclid"],
    correctIndex: 3,
  },
  {
    question: "Which organ in the human body filters blood?",
    options: ["Liver", "Kidneys", "Heart", "Lungs"],
    correctIndex: 1,
  },
  {
    question: "What is the speed of light?",
    options: ["3 x 10^5 m/s", "3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^10 m/s"],
    correctIndex: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
    correctIndex: 3,
  },
  {
    question: "In which year was the first iPhone released?",
    options: ["2005", "2007", "2008", "2009"],
    correctIndex: 1,
  },
  {
    question: "Which is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Humpback Whale", "Giraffe"],
    correctIndex: 1,
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Nikola Tesla", "Albert Einstein", "Niels Bohr", "Isaac Newton"],
    correctIndex: 1,
  },
  {
    question: "Which is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctIndex: 1,
  },
  {
    question: "Which planet is the largest in our Solar System?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correctIndex: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctIndex: 1,
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "Python", "JavaScript"],
    correctIndex: 1,
  },
  {
    question: "The Pythagorean theorem applies to which shape?",
    options: [
      "Square",
      "Right-angled triangle",
      "Circle",
      "Equilateral triangle",
    ],
    correctIndex: 1,
  },
  {
    question: "Which is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    correctIndex: 2,
  },
  {
    question: "Who was the first man to step on the Moon?",
    options: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Michael Collins",
    ],
    correctIndex: 2,
  },
  {
    question: "Which ocean is the deepest in the world?",
    options: [
      "Arctic Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
    ],
    correctIndex: 3,
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctIndex: 2,
  },
  {
    question: "Which country has the highest population?",
    options: ["USA", "China", "India", "Russia"],
    correctIndex: 1,
  },
];

// === Global Variables ===
let questions = []; // will store randomly picked questions
let currentIndex = 0; // which question are we on?
let score = 0; // track correct answers
const totalQuestions = 10; // how many questions do we ask each round?

// === DOM Elements ===
const quiz = document.getElementById("quiz");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const scoreboardEl = document.getElementById("scoreboard");
const scoreMessageEl = document.getElementById("score-message");
const restartButton = document.getElementById("restart-button");

// === On Page Load ===
window.addEventListener("DOMContentLoaded", () => {
  initializeQuiz();
});

// === Functions ===

// 1. Initialize Quiz: pick random questions, reset score, show first question
function initializeQuiz() {
  // Shuffle the questionPool and pick the first `totalQuestions` questions
  questions = shuffleArray(questionPool).slice(0, totalQuestions);

  currentIndex = 0;
  score = 0;

  // Show quiz area, hide scoreboard
  quiz.classList.remove("hidden");
  scoreboardEl.classList.add("hidden");

  displayQuestion();
}

// 2. Display Current Question
function displayQuestion() {
  clearOptions();
  // Retrieve current question from array
  const currentQuestion = questions[currentIndex];

  // Update DOM elements
  questionNumberEl.textContent = `Question ${
    currentIndex + 1
  } of ${totalQuestions}`;
  questionTextEl.textContent = currentQuestion.question;

  // Populate options
  currentQuestion.options.forEach((optionText, index) => {
    const li = document.createElement("li");
    li.textContent = optionText;
    li.addEventListener("click", () => handleOptionClick(index));
    optionsListEl.appendChild(li);
  });

  // If on the last question, change next button text to 'Finish'
  if (currentIndex === totalQuestions - 1) {
    nextButton.textContent = "Finish";
  } else {
    nextButton.textContent = "Next Question";
  }

  // Disable Next button until an option is chosen
  nextButton.disabled = true;
}

// 3. Handle Option Click
function handleOptionClick(selectedIndex) {
  const currentQuestion = questions[currentIndex];
  const correctIndex = currentQuestion.correctIndex;

  // Highlight correct / incorrect answer
  const optionsLi = optionsListEl.querySelectorAll("li");
  optionsLi.forEach((li, idx) => {
    if (idx === correctIndex) {
      li.classList.add("correct-option");
    }
    if (idx === selectedIndex && selectedIndex !== correctIndex) {
      li.classList.add("incorrect-option");
    }
    // Disable further clicks
    li.style.pointerEvents = "none";
  });

  // Increase score if correct
  if (selectedIndex === correctIndex) {
    score++;
  }

  // Enable next button
  nextButton.disabled = false;
}

// 4. Clear Option List
function clearOptions() {
  optionsListEl.innerHTML = "";
}

// 5. Next Button Event
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < totalQuestions) {
    displayQuestion();
  } else {
    endQuiz();
  }
});

// 6. End Quiz / Show Score
function endQuiz() {
  // Hide quiz area
  quiz.classList.add("hidden");

  // Show scoreboard
  scoreboardEl.classList.remove("hidden");

  scoreMessageEl.textContent = `You scored ${score} out of ${totalQuestions}!`;

  // Optional: You can show more advanced stats or animations here.
}

// 7. Restart Quiz
restartButton.addEventListener("click", () => {
  initializeQuiz();
});

// === Utility Function: Shuffle an Array (Fisher-Yates Shuffle) ===
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
