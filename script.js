`use strict`;

const message = document.querySelector('.message');
const randomNumber = document.querySelector('.number');
const setScore = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');
const btncheck = document.querySelector(`.check`);
const displayhighScore = document.querySelector(`.highscore`);
const btnAgain = document.querySelector(`.again`);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (text) {
  message.textContent = text;
};
btncheck.addEventListener(`click`, function () {
  const guess = Number(inputNumber.value);
  // when ther is no input
  if (!guess) {
    displayMessage(`no number`);
  }
  // when player win
  else if (guess === secretNumber) {
    displayMessage(`correct answer!`);
    randomNumber.textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector('.number').style.width = '30rem';
    // check the highscore
    if (score > highscore) {
      highscore = score;
      displayhighScore.textContent = highscore;
    }
  }
  // if the number is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      setScore.textContent = score;
      displayMessage(guess > secretNumber ? `too high` : `too low`);
    } else {
      displayMessage(`you lost`);
      setScore.textContent = 0;
    }
  }
  inputNumber.value = ``;
});

// restart the game
btnAgain.addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  message.textContent = `Start guessing...`;
  randomNumber.textContent = `?`;
  setScore.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  inputNumber.value = ``;
});
