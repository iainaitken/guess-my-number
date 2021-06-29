'use strict';

let randomNumber = Math.ceil(Math.random() * 20);
let guessed = false;

console.log(randomNumber);

let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');

// event listener - click guess

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  // check state
  if (guessed) {
    changeMessage('You already won!');
  } else if (input === 0) {
    changeMessage('Enter a number!');
  } else if (input < 1 || input > 20) {
    changeMessage('Between 1 and 20!');
  } else if (input === randomNumber) {
    correctGuess();
  } else {
    decreaseScore();
    if (input < randomNumber) {
      changeMessage('Too low!');
    } else {
      changeMessage('Too high!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

function changeBackgroundColour(colour) {
  document.body.style.backgroundColor = colour;
}

function changeMessage(text) {
  message.textContent = text;
}

function correctGuess() {
  changeMessage('🥳 Correct! 🥳');
  number.textContent = randomNumber;
  highscore.textContent = score.textContent;
  changeBackgroundColour('green');
  guessed = true;
}

function decreaseScore() {
  score.textContent -= 1;
}

function resetGame() {
  guessed = false;
  changeMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  changeBackgroundColour('black');
}
