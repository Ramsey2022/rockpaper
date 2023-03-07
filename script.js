let score = 0;
let comScore = 0;
let roundWinner = '';



const result = document.getElementById('resultContainer');
const scoreBoard = document.getElementById('scoreContainer');

const buttons = document.querySelectorAll('button');
const main = document.querySelector('main');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultContent = document.createElement('div');
resultContent.classList.add('content');
resultContent.textContent = '';
const resultHead = document.createElement('h2');
resultHead.textContent = 'SPIRIT';
result.appendChild(resultHead);
result.appendChild(resultContent);
/*
const scoreContent = document.getElementById('score');
const comScoreContent = document.getElementById('comScore');

const scores = document.createElement('div');
scores.classList.add('scores');
scores.textContent = scoreContent, comScoreContent;
*/
const scoreHead = document.createElement('h2');
scoreHead.textContent = 'SCORE';
scoreBoard.appendChild(scoreHead);

//scoreBoard.appendChild(scores);


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
  roundResult(roundWinner, player, com);
}
scoreBoard.textContent = `Player: ${score} CPU: ${comScore}`;
//comScoreContent.textContent = `CPU: ${comScore}`;

function clickListener(event) {
  const player = event.target.id;
  const com = getComputerChoice();
  playRound(player,com);

  console.log(score, comScore);
}

rockBtn.addEventListener("click", clickListener);
paperBtn.addEventListener("click", clickListener);
scissorsBtn.addEventListener("click", clickListener);


function getComputerChoice() {
  let choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}





function roundResult(roundWinner, player, com) {
  if (roundWinner === 'player') {
    resultContent.textContent = (`${player} beats ${com}`);
    return;
  }
  if (roundWinner === 'computer') {
    resultContent.textContent = (`${player} is beaten by ${com}`);
    return;
  }

  else {resultContent.textContent = (`${player} ties with ${com}`);
  }
}


/*
function gameOver(){
  if (score === 5 || comScore === 5){
    return winner();
  }
}
function winner(){
  if (score > comScore){
    result.textContent = "You Win!"
  } else {
    result.textContent = "You lost! Try again!"
  }
}
*/
/*
function winner(){
  if (score > comScore){
    return "You Win!"
  } else {
    return "You lost! Try again!"
  }
}
  */
  
 
/*

  function roundResult() {
        if (roundWinner = 'tie') {
      result.textContent = (`Its a draw! You chose ${player} and cpu chose ${com}.`);
    }else if (roundWinner = 'player'){
      result.textContent = (`You won! ${player} beats ${com}.`);
    } if (roundWinner = 'computer'){
      result.textContent = (`You lost. ${com} beats ${player}.`);
    }
  }

*/


  
  
  

/*
<body>
<div id = 'main'>
    <h1>ROCK, PAPER, SCISSORS</h1>
<div id = 'btnContainer'>
    <button id = 'rock'>Rock</button>
    <button id = 'paper'>Paper</button>
    <button id = 'scissors'>Scissors</button>
</div>

//input type=image class = options id= rock src=picture

<div id = 'resultContainer'>

// you chose this cpu chose that

</div>
<div id = 'scoreContainer'>

// constant score, changes with rounds

</div>

//playagainbutton

</div>
<script src="script.js"></script>
</body>
*/