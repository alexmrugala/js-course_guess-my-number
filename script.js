'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct guess!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 5;
// document.querySelector('.guess').value = 23;

// define the initial number that the game uses for the player to guess
let secretNumber = Math.trunc(20 * Math.random()) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no guess scenario
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number! Please guess a number between 1 and 20';

    // guess is correct scenario
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    //change background color after winning
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // update highscore if you win
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //guess is too large
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost!';
    }

    //guess is too small
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(20 * Math.random()) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
