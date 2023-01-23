/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */



let gameOver = document.getElementsByClassName('game-over');
let hangman = document.getElementsByClassName('man');
let noMatch = document.getElementsByClassName('nomatch');
let word = document.getElementsByClassName('word');

let randomWord = ['frontend', 'candle', 'maja', 'computer'];



 
 
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 

 // alfabetet

 for (const i = 0; i < alphabet.length; i++);
