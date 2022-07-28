'use strict';

const player1 = document.querySelector('.player.player--0');
const player2 = document.querySelector('.player.player--1');


const namePlayer1 = document.querySelector('#name--0');
const namePlayer2 = document.querySelector('#name--1');

const btnNewGame = document.querySelector('.btn--new');

const pointPlayer1 = document.querySelector('#score--0');
const pointPlayer2 = document.querySelector('#score--1');

const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');


const randomDice = () => Math.floor(Math.random() * 6) + 1;

let currentScore = 0;
let totalCurrentPlayer1 = 0;
let totalCurrentPlayer2 = 0;


//Начинаем новую игру
btnNewGame.addEventListener('click', function() {
  pointPlayer1.textContent = 0;
  pointPlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  dice.src = './img/dice1.png';
  if (player2.classList.contains('player--active')) {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
    
})

btnRoll.addEventListener('click', function() {
  let point = randomDice();
  dice.src = `./img/dice${point}.png`;
  //Суммируем текущие очки
  
  if (point !== 1) {
    currentScore += point;
  } else {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    currentScore = 0;
    currentScorePlayer1.textContent = 0;
    currentScorePlayer2.textContent = 0;
  }

  if (player1.classList.contains('player--active')) {

    currentScorePlayer1.textContent = currentScore;
  } else {
    currentScorePlayer2.textContent = currentScore;
  }

});


btnHold.addEventListener('click', function(evt) {
  
  if (player1.classList.contains('player--active')) {
    totalCurrentPlayer1 = Number(currentScorePlayer1.textContent) + totalCurrentPlayer1;
    pointPlayer1.textContent = totalCurrentPlayer1;
    currentScorePlayer1.textContent = 0;
  } else {
    totalCurrentPlayer2 = Number(currentScorePlayer2.textContent) + totalCurrentPlayer2;
    pointPlayer2.textContent = totalCurrentPlayer2;
    currentScorePlayer2.textContent = 0;
  }

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  currentScore = 0;
})