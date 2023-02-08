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

 let com = getComputerChoice();
 let player = user();

  /*
when a round is finished
plus 1 to cpu or player score
once 5 rounds complete endgame
  */


/*
core game
*/
  function playRound(player, com) {
    if (player === com) {
      return console.log(`Its a draw! You chose ${player} and cpu chose ${com}`);
    } else if (player === 'rock' && com === 'scissors') {
      return console.log('You won! Your rock smashes scissors!');
    } else if (player === 'paper' && com === 'rock') {
      return console.log('You won! Your paper smothers rock!');
    } else if (player === 'scissors' && com === 'paper') {
      return console.log('You won! Your scissors cut through paper with ease.');
    } else {
      return console.log('You lost. Curse this machine.');
    }
  }
  console.log(playRound(player,com));


  

