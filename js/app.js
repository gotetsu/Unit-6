// const keyboard = document.getElementById('qwerty');
// const phrase = document.querySelector('#phrase');
// const resetButton = document.getElementById('start-game');
// const overlay = document.getElementById('overlay');
// const scoreboard = document.getElementById('scoreboard');
// const hearts = document.querySelectorAll('li.tries > img')
// let missed = 0;

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase'); 
const resetbtn =  document.getElementsByClassName('btn__reset');
let missed = 0;
const phrases = [
    'Hola mi nombre es Juan',
    'I have not been in love',
    'Tell me something good',
    'Dime algo bueno',
    'Walk the plank',
    'el conquistador',
    'Tell me everything you know',
    'Caliente',
    'My Arms are Warm now ',
    'Tomate un cafecito',
    'yes you are not the person you want to be',
    'Scare or scary',
    'son of a gun',
    'Si means Yes in Spanish',
    'Santa is coming to town'
  ]

  resetbtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  function getRandomPhraseAsArray(allPhrases) {
    randomIndex = Math.floor(Math.random() * allPhrases.length);    // this function will get a getRandom Phrase
    phraseToGuess = allPhrases[randomIndex];
    return phraseToGuess.split('')
  }