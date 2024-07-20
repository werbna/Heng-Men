const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const maxGuesses = 6;

let currentWord, correctLetters, wrongGuessCount;

function resetGame()  {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = 'images/hangman-0.svg';
  guessesText.innerHTML = `${wrongGuessCount} / ${maxGuesses}`;
  wordDisplay.innerHTML = currentWord.split('').map(() => `<li class="letter"></li>`).join('');
  keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = false);
  gameModal.classList.remove('show');
}

function getRandomWord() {
  let {word, hint} = wordList[Math.floor(math.random() * wordList.length)];
  currentWord = word;
  document.getElementsByClassName('hint-text').innerText = hint;
  resetGame();
}