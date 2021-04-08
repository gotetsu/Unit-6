const keyboard = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase');
const resetButton = document.getElementById('startG');
const overlay = document.getElementById('overlay');
const scoreboard = document.getElementById('scoreboard');
const hearts = document.querySelectorAll('li.tries > img')
let missed = 0;

const phrases = [

'yes can I Help you ',
'My name is Roger',
'No way Jose',
'This is Atis Nice to meet',
'Hello World',
'Do not open the door',
'yup this is my victory'


]

resetButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  setUpGame();
});

function getRandomPhraseAsArray(allPhrases) {
  randomIndex = Math.floor(Math.random() * allPhrases.length);
  phraseToGuess = allPhrases[randomIndex];
  return phraseToGuess.split('')
}

function addPhraseToDisplay(phraseArr) {
  phraseArr.forEach(letter => {
    const li = document.createElement("li");
    const phraseUl = document.querySelector('#phrase > ul');
    phraseUl.appendChild(li);
    if(letter !== ' ') {
      li.setAttribute("class", "letter")
    } else {
      li.setAttribute("class", "space")
    }
    li.textContent = letter;
  });
}


function checkLetter(pressedKey) {
  let selectedLetter = null
  const allLetters = document.querySelectorAll('#phrase > ul > li.letter')
  allLetters.forEach(letter => {
    if(letter.innerHTML.toLowerCase() === pressedKey) {
      letter.classList.add("show")
      selectedLetter = pressedKey
    }
  })
  return selectedLetter
}


keyboard.addEventListener('click', (e) => {
  let pressedKey = (e.target.innerHTML).toLowerCase();
  if (e.target.tagName === 'BUTTON') {
    e.target.setAttribute("class", "chosen");
    e.target.setAttribute("disabled", "true");
    let letterFound = checkLetter(pressedKey);
    if(!letterFound) {
      missed += 1;
      for (let i = 0; i < missed; i++) {
        hearts[i].setAttribute("src", "images/lostheart.png")
      }
    }
    if (checkWin()) {
      updateOverlay("win", 'You won!');
    } else if (missed >= 5) {
      updateOverlay("lose", 'You lost!');
    }
  }
})

function checkWin() {
  const allLetters = document.querySelectorAll('#phrase > ul > li.letter')
  const displayedLetters = document.querySelectorAll('#phrase > ul > li.show')
  return allLetters.length === displayedLetters.length
}
function setUpGame() {
  
    missed = 0;
 
    const ul = document.createElement("ul");
    const phraseUl = document.querySelector('#phrase > ul');
    phrase.replaceChild(ul, phraseUl);
   
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
  
    const keys = document.querySelectorAll('.keyrow > button.chosen');
    keys.forEach(key => {
      key.removeAttribute("class", "chosen");
      key.removeAttribute("disabled", "true");
    });
    
    hearts.forEach(heart => {
      heart.setAttribute("src", "images/liveheart.png")
    });
    
    const message = document.querySelector('#overlay > p.message');
    if (message) {
      message.remove();
    };
  }

function updateOverlay(status, message) {
  overlay.style.display = 'flex';
  overlay.setAttribute("class", status);
  const p = document.createElement("p");
  p.setAttribute("class", "message");
  p.style.backgroundColor = 'inherit';
  p.style.fontSize = 'xx-large';
  overlay.appendChild(p);
  let text = message;
  p.textContent = text;
  resetButton.textContent = "Play again";
}
