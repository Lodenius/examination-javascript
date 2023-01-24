/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */

let answer = '';
let MaxWrong = 5;
let guessed = [];



// // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// // 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// // 't', 'u', 'v', 'w', 'x', 'y', 'z'];




// // Get elements

// let gameOver = document.getElementsByClassName('game-over');
// let hangman = document.getElementsByClassName('man');
// let noMatch = document.getElementsByClassName('nomatch');
// let word = document.getElementsByClassName('word');






// wrong guess 
function updateAttempts() {
    attempts = attempts -1;
    document.querySelector('.attempts').innerHTML = attempts;

    if (attempts < 1) {
        // då har man använt upp sina försök
        gameOver();
    }
};


// Game over
function gameOver() {
    document.querySelector('#gameover').classList.add('show');
    let retryBtn = document.querySelector('.retry');

    retryBtn.addEventListener('click', () => {
    location.reload();
    });

};


// Win
function winner() {
    document.querySelector('#winner').classList.add('show');
    let retryBtn = document.querySelector('.retry');

    retryBtn.addEventListener('click', () => {
    location.reload();
    });

};
  