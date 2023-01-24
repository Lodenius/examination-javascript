/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */




// Get elements

let gameOver = document.getElementsByClassName('game-over');
let hangman = document.getElementsByClassName('man');
let noMatch = document.getElementsByClassName('nomatch');
let word = document.getElementsByClassName('word');




let randomWord = ['frontend', 'candle', 'maja', 'computer'];
let programmingWords = ['frontend', 'developer', 'python', 'computer', 'jhgksdhjfglkh'];
 function randomWord() {
    answer = programmingWords[Math.floor(Math.random() * programming.length)];
 }
 randomWord();
 
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 


 var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


// Create the alfabetet


 for (const i = 0; i < alphabet.length; i++);




// Hangman



// Play





// Reset - Game over



// Reset - Win