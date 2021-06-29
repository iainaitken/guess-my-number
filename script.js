'use strict';

let randomNumber = Math.ceil(Math.random() * 20);
let guessed = false;

console.log(randomNumber);

const changeMessage = function (text) {
  document.querySelector('.message').textContent = text;
};
const decreaseScore = function () {
  document.querySelector('.score').textContent -= 1;
};

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
    changeMessage('🥳 Correct! 🥳');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
    document.body.style.backgroundColor = 'green';
    guessed = true;
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
  guessed = false;
  changeMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = 'black';
});
