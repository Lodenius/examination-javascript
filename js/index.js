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

function randomWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

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
}

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
}


function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();





// // Game over





// // Win





// // Reset - Game over




// // Reset - Win














// /**
//  För att toggla SVG:en
//  document.querySelector('figure').classList.add('scaffold')
//  document.querySelector('figure').classList.add('head')
//  document.querySelector('figure').classList.add('body')
//  document.querySelector('figure').classList.add('arms')
//  document.querySelector('figure').classList.add('legs')

//  */

// // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// // 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// // 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// let answer = '';
// // let maxWrong = 5;
// let guessed = [];




// // Get elements

// let gameOver = document.getElementsByClassName('game-over');
// let hangman = document.getElementsByClassName('man');
// let noMatch = document.getElementsByClassName('nomatch');
// let word = document.getElementsByClassName('word');





 



// // Create the alphabet


// for (const i = 0; i < alphabet.length; i++);




// // Word

// let programmingWords = ['frontend', 'developer', 'python', 'computer', 'jhgksdhjfglkh'];
//  function randomWord() {
//     answer = programmingWords[Math.floor(Math.random() * programming.length)];
//  }
//  randomWord();
 


// // Hangman






// // Play








