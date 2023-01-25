let countries = [
  "afghanistan",
  "bangladesh",
  "cambodia",
  "denmark",
  "estonia",
  "finland",
  "guatemala",
  "hungary",
  "indonesia",
  "jamaica"
]
let answer = '';
let maxWrong = 5;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let score = 0;

// Slumpa länder från listan ovan
function randomWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];
};

// Lägg till alfabetet
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `<button
        class="btn" id='` + letter + `'
        onClick="handleGuess('` + letter + `')">
        ` + letter + `
    </button>`
  ).join('');
  document.getElementById('keyboard').innerHTML = buttonsHTML;
};

// Få spelet att fungera
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
 }
};

// Addera kroppsdel vid fel svar
function updateHangmanPicture() {
  if (mistakes == 1) {
    document.querySelector('figure').classList.add('scaffold')
  } else if (mistakes == 2) {
    document.querySelector('figure').classList.add('head')
  } else if (mistakes == 3) {
    document.querySelector('figure').classList.add('body')
  } else if (mistakes == 4) {
    document.querySelector('figure').classList.add('arms')
  } else if (mistakes == 5) {
    document.querySelector('figure').classList.add('legs')
  }
};

// Om vinst
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Yay! You won!';
    document.getElementById('score').innerHTML = score += 1;
  }
};

// Om game over
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Oh no! You lost!';
  }
};

// Markera använd bokstav med grå
// om rätt - lägg till i ordet
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('wordSpotlight').innerHTML = wordStatus;
};

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

// Starta om spel
function reset() {
  mistakes = 0;
  guessed = [];
  document.querySelector('figure').classList.remove('scaffold')
  document.querySelector('figure').classList.remove('head')
  document.querySelector('figure').classList.remove('body')
  document.querySelector('figure').classList.remove('arms')
  document.querySelector('figure').classList.remove('legs')
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
};

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();