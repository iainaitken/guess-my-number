'use strict';

// Variables

let randomNumber = Math.ceil(Math.random() * 20);
let gameOver = false;
let guessed = false;
let playerScore = 20;
let playerHighscore = 0;

let body = document.body;
let highscore = document.querySelector('.highscore');
let inputValue = document.querySelector('.guess');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');

// Event Listeners

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(inputValue.value);
  if (guessed || gameOver) {
    changeMessage('Play again?');
  } else if (input === 0) {
    changeMessage('Enter a number!');
  } else if (input < 1 || input > 20) {
    changeMessage('Between 1 and 20!');
  } else if (input === randomNumber) {
    correctGuess();
  } else {
    pulseBackground();
    decreaseScore();
    if (playerScore === 0) {
      changeMessage('😥 You lost! 😥');
      gameOver = true;
    } else if (input < randomNumber) {
      changeMessage('Too low!');
    } else {
      changeMessage('Too high!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

// Functions

function changeBackgroundColour(colour) {
  body.style.backgroundColor = colour;
}

function changeMessage(text) {
  message.textContent = text;
}

function correctGuess() {
  changeMessage('🥳 Correct! 🥳');
  number.textContent = randomNumber;
  setHighscore();
  changeBackgroundColour('green');
  guessed = true;
}

function decreaseScore() {
  playerScore--;
  score.textContent = playerScore;
}

function fade(element, startColor, endColor, timeElapsed, steps) {
  const redChange = (startColor[0] - endColor[0]) / steps;
  let currentColor = startColor;
  let stepCount = 0;
  let timer = setInterval(function () {
    currentColor[0] = parseInt(currentColor[0] - redChange);
    element.style.backgroundColor = 'rgb(' + currentColor.toString() + ')';
    stepCount += 1;
    if (stepCount >= steps) {
      element.style.backgroundColor = 'rgb(' + currentColor.toString() + ')';
      clearInterval(timer);
    }
  }, timeElapsed);
}

function pulseBackground() {
  fade(body, [255, 0, 0], [0, 0, 0], 50, 16);
}

function resetGame() {
  guessed = false;
  gameOver = false;
  changeMessage('Start guessing...');
  resetScore();
  number.textContent = '?';
  inputValue.value = '';
  changeBackgroundColour('black');
}

function resetScore() {
  playerScore = 20;
  score.textContent = playerScore;
}

function setHighscore() {
  playerHighscore = playerScore;
  highscore.textContent = playerHighscore;
}
