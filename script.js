'use strict';

// selecting an html element, getting the content inside the element.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number'

// document.querySelector('.number') .textContent =13;
// document.querySelector('.score').textContent = 13;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// define a number guess
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// event listner
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
    // when guess is correct
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // when guess is higher
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is lower
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
