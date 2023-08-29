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
    userInput = userInput.toLowerCase(); // Makes input case in-sensitive
    return userInput;
}

// Plays a single round of the game and returns a string of the result
function playRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        message = "You lose! Paper beats Rock"
    }
    else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        message = "You win! Rock beats Scissors"
    }
    else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        message = "It's a tie!"
    }
    else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        message = "You win! Paper beats Rock"
    }
    else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        message = "It's a tie!"
    }
    else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        message = "You lose. Scissors beat Paper"
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        message = "You win! Scissors beat Paper"
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        message = "You lose. Rock beats Scissors"
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        message = "It's a tie!"
    }
    
    // Check results with: console.log(message);
    return message;
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));