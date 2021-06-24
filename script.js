'use strict';

// Generate random number

let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

// event listener - click guess

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);

  // if no input, change message to "oops"
  if (input === 0) {
    document.querySelector('.message').textContent = 'Enter a number!';
  } else if (input < 1 || input > 20) {
    document.querySelector('.message').textContent = 'Between 1 and 20!';
  } else if (input === randomNumber) {
    document.querySelector('.message').textContent = '🥳 Correct! 🥳';
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
  } else {
    document.querySelector('.score').textContent -= 1;
    if (input < randomNumber) {
      document.querySelector('.message').textContent = 'Too low!';
    } else {
      document.querySelector('.message').textContent = 'Too high!';
    }
  }
});
