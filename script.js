/*
User inputs rock, paper or scissors into prompt (x)
Computer makes random choice (x)
prompt returns result and phrase of victory or failure (x)

if player selection & computer selection === then return 'tie'
else player = rock & cpu = scissors return ' rock beats scissors'
etc. (x)


*/



function getComputerChoice() {
  let choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
function user() {
let playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase();
return playerSelection
}

function game() {
  let score = 0;
  let comScore = 0;
  

  while(score < 5 && comScore < 5) {
  let com = getComputerChoice();
  let player = user();
    console.log(playRound(player, com));
    
  

/*
core game
*/
  function playRound(player, com) {
        if (player === com) {
      return (`Its a draw! You chose ${player} and cpu chose ${com}. Score = ${score} Cpu = ${comScore}`);
    } else if (player === 'rock' && com === 'scissors') {
      score++;
      return (`You won! Your rock smashes scissors! Score = ${score} Cpu = ${comScore}`);
    } else if (player === 'paper' && com === 'rock') {
      score++;
      return (`You won! Your paper smothers rock! Score = ${score} Cpu = ${comScore}`);
    } else if (player === 'scissors' && com === 'paper') {
      score++;
      return (`You won! Your scissors cut through paper with ease. Score = ${score} Cpu = ${comScore}`);
    } else {
      comScore++;
      return (`You lost. Curse this machine. Score = ${score} Cpu = ${comScore}`);
    }
  }
  }
  console.log('game over');
  
}
  
  



game();