/*
User inputs rock, paper or scissors into prompt
Computer makes random choice
prompt returns result and phrase of victory or failure
*/

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
} let choices = ['Rock', 'Paper', 'Scissors']; 
    console.log(getComputerChoice(choices))