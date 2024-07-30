'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber

let hiddenNumb = document.querySelector('.number').textContent;

let message = document.querySelector('.message').textContent;
let score = document.querySelector('.score').textContent;
let highscore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue, typeof inputValue);

  if (!inputValue) {
    document.querySelector('.message').textContent = 'No Number Entered!';
  } else if (inputValue === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'YAY! YOU WON.';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (inputValue !== secretNumber) {
    if (inputValue > secretNumber) {
      document.querySelector('.message').textContent = 'TOO HIGH! GO LOW';
      let score = document.querySelector('.score').textContent;
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'YOU LOSE THE GAME!!!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (inputValue < secretNumber) {
      document.querySelector('.message').textContent = 'TOO LOW! GO HIGH';
      let score = document.querySelector('.score').textContent;
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'YOU LOSE THE GAME!!!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
});
