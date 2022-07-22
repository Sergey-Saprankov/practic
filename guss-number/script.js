'use strict';
const body = document.body;
const message = document.querySelector('.guess-message');
const buttonCheck = document.querySelector('.check');
const input = document.querySelector('.number-input');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const bestResult = document.querySelector('.highscore');
const restart = document.querySelector('.again');


const randomNumber = () => Math.floor(Math.random() * 20) + 1;
let secretNumber = randomNumber();

restart.addEventListener('click', function() {
  message.textContent = 'Начни угадывать';
  input.value = '';
  question.textContent = '???';
  score.textContent = 20;
  question.style.width = '25rem';
  body.style.backgroundColor = '#000';
  secretNumber = randomNumber();
})




buttonCheck.addEventListener('click', function() {
  const guessingNumber =  Number(input.value);
  // Не введено число
  if (!guessingNumber) {
    message.textContent = 'Введите число!!!';
  //Player won
  } else if (guessingNumber === secretNumber) {
    message.textContent = ('Правильно');
    body.style.backgroundColor = 'green';
    Number(bestResult.textContent) < Number(score.textContent) ? bestResult.textContent = score.textContent : bestResult.textContent;
    question.textContent = secretNumber;
    question.style.width = '50rem';
    //Если игрок близок к ответу
  } else if (Math.abs(guessingNumber - secretNumber) === 1) {
    message.textContent = ('Горячо');
    if (Number(score.textContent) > 1) {
      score.textContent = Number(score.textContent) - 1;
    } else {
      message.textContent = 'Game over';
      body.style.backgroundColor = 'red';
      score.textContent = 0;
    }   
  } else if (guessingNumber !== secretNumber) {
    guessingNumber > secretNumber ? message.textContent = ('Слишком большое число') : message.textContent = ('Слишком маленькое число');
    if (Number(score.textContent) > 1) {
      score.textContent = Number(score.textContent) - 1;
    } else {
      message.textContent = 'Game over';
      body.style.backgroundColor = 'red';
      score.textContent = 0;
    }
  }
})



