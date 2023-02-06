/*
User inputs rock, paper or scissors into prompt (x)
Computer makes random choice (x)
prompt returns result and phrase of victory or failure
*/

const options = ['rock', 'paper', 'scissors'];

  function getComputerChoice(choices) {
    return options[Math.floor(Math.random()*options.length)];
}  
  const computerSelection = getComputerChoice();
    console.log(computerSelection);
  let playerSelection = prompt('Rock, Paper, Scissors?').toLowerCase(); 
    console.log(playerSelection);
    
