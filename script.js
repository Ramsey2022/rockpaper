/*
User inputs rock, paper or scissors into prompt (x)
Computer makes random choice (x)
prompt returns result and phrase of victory or failure (x)

if player selection & computer selection === then return 'tie'
else player = rock & cpu = scissors return ' rock beats scissors'
etc. (x)


*/

const options = ['rock', 'paper', 'scissors'];

  function getComputerChoice(choices) {
    return options[Math.floor(Math.random()*options.length)];
}  
  const computerSelection = getComputerChoice();
    console.log(computerSelection);
  let playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase(); 
    console.log(playerSelection);

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      alert('Its a draw! Try again.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      alert('You won! Rock smashes scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      alert('You won! Paper smothers rock!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      alert('You won! Scissors cut through paper with ease.');
    } else {
      alert('You lost. Curse this machine.');
    }
    return (playerSelection, computerSelection);
  }
  
    
