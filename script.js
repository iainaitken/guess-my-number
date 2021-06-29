'use strict';

// Generate random number

let guessed = false;
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

// event listener - click guess

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  // check state
  if (guessed) {
    document.querySelector('.message').textContent = 'You already won!';
  } else if (input === 0) {
    document.querySelector('.message').textContent = 'Enter a number!';
  } else if (input < 1 || input > 20) {
    document.querySelector('.message').textContent = 'Between 1 and 20!';
  } else if (input === randomNumber) {
    document.querySelector('.message').textContent = '🥳 Correct! 🥳';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
    guessed = true;
  } else {
    document.querySelector('.score').textContent -= 1;
    if (input < randomNumber) {
      document.querySelector('.message').textContent = 'Too low!';
    } else {
      document.querySelector('.message').textContent = 'Too high!';
    }
  }
});
