/* 
Randomly returns Rock, Paper, or Scissors

This function serves as the computer playing
*/
function getComputerChoice() {
    let computerChoice;
    let num = Math.random();

    if (num < 0.333) {
        computerChoice = 'Rock'
    }
    else if (num >= 0.333 && num <= 0.666) {
        computerChoice = 'Paper'
    }
    else {
        computerChoice = 'Scissors'
    }

    return computerChoice;
}

getComputerChoice();

// Gets the player's choice
function getPlayerChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:")
    return userInput;
}

// Plays a single round of the game and returns a string of the result
function playRound(playerSelection, computerSelection) {
    let message;
    
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);