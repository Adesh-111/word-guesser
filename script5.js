const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hangmanImage = gameModal.querySelector("img");
const scoreCard = document.querySelector(".score-card");
const highScoreDisplay = scoreCard.querySelector(".high-score");
const currentScoreDisplay = scoreCard.querySelector(".current-score");
const timerDisplay = document.createElement("div");
timerDisplay.classList.add("timer");
document.body.appendChild(timerDisplay);

let currentWord, correctLetters, wrongGuessCount, highScore;
const maxGuesses = 6;
let currentScore = 0;
let timerInterval;

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  keyboardDiv.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  gameModal.classList.remove("show");
  hangmanImage.src = "";
};

const getRandomWord = () => {
  const { word, hint } = logicalQuestions[Math.floor(Math.random() * logicalQuestions.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
  startTimer();
};

const updateScores = () => {
  highScoreDisplay.textContent = highScore || 0;
  currentScoreDisplay.textContent = currentScore || 0;
};

const gameOver = (isVictory) => {
  const modalText = isVictory ? "You found the word:" : "The correct word was:";
  const gifSource = isVictory ? "victory.gif" : "sad.gif";
  hangmanImage.src = `images/${gifSource}`;
  gameModal.querySelector("h4").innerText = isVictory ? "Congrats! You Win" : "Game Over! Better Luck Next Time";
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");

  if (isVictory) {
    currentScore++;
    if (currentScore > highScore || highScore === undefined) {
      highScore = currentScore;
      updateScores(); // Update high score
    }
    updateTimer();
  } else {
    currentScore = 0;
    updateScores(); // Reset current score
  }
  stopTimer(); // Stop the timer when the game is over
};

const initGame = (clickedKey) => {
  if (/[a-z0-9]/.test(clickedKey)) {
    if (currentWord.includes(clickedKey)) {
      [...currentWord].forEach((letter, index) => {
        if (letter === clickedKey) {
          correctLetters.push(letter);
          wordDisplay.querySelectorAll("li")[index].innerText = letter;
          wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
      });
    } else {
      wrongGuessCount++;
    }
    keyboardDiv.querySelector(`button[data-key="${clickedKey}"]`).disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
  }
};

const startTimer = (duration) => {
  clearInterval(timerInterval);
  let timeLeft = duration || 100;
  timerDisplay.innerText = `Time left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      timerDisplay.innerText = `Time left: ${timeLeft}s`;
    } else {
      clearInterval(timerInterval);
      gameOver(false);
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
};

// Create letter buttons
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  const letter = String.fromCharCode(i);
  button.innerText = letter;
  button.setAttribute("data-key", letter);
  keyboardDiv.appendChild(button);

  button.addEventListener("click", () => {
    if (!button.disabled) {
      initGame(letter);
      button.disabled = true;
      button.classList.add("clicked");
    }
  });
}

// Create number buttons on the right side
for (let i = 0; i <= 9; i++) {
  const button = document.createElement("button");
  button.innerText = i.toString();
  button.setAttribute("data-key", i.toString());
  keyboardDiv.appendChild(button);

  button.addEventListener("click", () => {
    if (!button.disabled) {
      initGame(i.toString());
      button.disabled = true;
      button.classList.add("clicked");
    }
  });
}

// Handle key events for letters and numbers
document.addEventListener("keydown", (e) => {
  const pressedKey = e.key.toLowerCase();
  if (/[a-z0-9]/.test(pressedKey)) {
    initGame(pressedKey);
  }
});

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
