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

const strokeTransition = (point, currentScore, player1, player2) => {
  let score = Number(currentScore.textContent);

  if (point === 1) { 
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    return currentScore.textContent = 0;
  }
  
  return currentScore.textContent = score + point;
}

const hold = (currentScore, pointPlayer) => {
  btnHold.addEventListener('click', function() {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    pointPlayer.textContent = Number(currentScore.textContent) + Number(pointPlayer.textContent);
    currentScore.text = 0;
  })
}


//Начинаем новую игру
btnNewGame.addEventListener('click', function() {
  pointPlayer1.textContent = 0;
  pointPlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  dice.src = './img/dice1.png'
})

btnRoll.addEventListener('click', function() {
  let point = randomDice();
  console.log(point);
  dice.src = `./img/dice${point}.png`;
  if (namePlayer1.closest('.player--active')) {
    strokeTransition(point, currentScorePlayer1, player1, player2);
    hold(currentScorePlayer1, pointPlayer1);
  } 
  if (namePlayer2.closest('.player--active')) {
    strokeTransition(point, currentScorePlayer2, player1, player2);
    hold(currentScorePlayer2, pointPlayer2);
  }

});



