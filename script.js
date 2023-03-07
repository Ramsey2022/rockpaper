let score = 0;
let comScore = 0;
let roundWinner = '';

//UI
const reload = document.getElementById('reload');
const result = document.getElementById('resultContainer');
const scoreBoard = document.getElementById('scoreContainer');
const buttons = document.querySelectorAll('button');
const main = document.querySelector('main');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultContent = document.createElement('div');
const scoreContent = document.getElementById('score');
const comScoreContent = document.getElementById('comScore');

resultContent.classList.add('content');
resultContent.textContent = '';
result.appendChild(resultContent);

rockBtn.addEventListener("click", clickListener);
paperBtn.addEventListener("click", clickListener);
scissorsBtn.addEventListener("click", clickListener);
reload.addEventListener('click', restart);

//Game
function playRound(player, com) {
  if (player === com) {
    roundWinner = 'tie'
  }
  if (
    (player === 'rock' && com === 'scissors') ||
    (player === 'scissors' && com === 'paper') ||
    (player === 'paper' && com === 'rock')
  ) {
    score++
    roundWinner = 'player'
  }
  if (
    (com === 'rock' && player === 'scissors') ||
    (com === 'scissors' && player === 'paper') ||
    (com === 'paper' && player === 'rock')
  ) {
    comScore++
    roundWinner = 'computer'
  }
}

function clickListener(event) {
  const player = event.target.id;
  const com = getComputerChoice();
  playRound(player,com);
  roundResult(roundWinner, player, com);

  document.getElementById('score').textContent = 'Player: ' + score;
  document.getElementById('comScore').textContent = 'CPU: ' + comScore;

    if (score !== 5 || comScore !== 5){
      reload.disabled = true;
    }

    if (score === 5 || comScore === 5){
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      reload.disabled = false;
      return winner();
    }
  }

function getComputerChoice() {
  let choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function roundResult(roundWinner, player, com) {
  if (roundWinner === 'player') {
    resultContent.textContent = (`You won! ${player} beats ${com}`);
    return;
  }
  if (roundWinner === 'computer') {
    resultContent.textContent = (`You lost! ${player} is beaten by ${com}`);
    return;
  }

  else {resultContent.textContent = (`It's a draw! ${player} ties with ${com}`);
  }
}

function winner(){
  if (score > comScore){
    result.textContent = "VICTORY!";
    return;
  } else if (score < comScore){
    result.textContent = "DEFEAT! Try again!";
    return;
  }
}

function restart(){
window.location.reload();
}