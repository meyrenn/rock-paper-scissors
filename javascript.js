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

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let winner;

/* Plays a 5 round game that keeps score and reports a winner 
or loser at the end */
function game() {
    // Plays a single round of the game and returns a string of the result
    function playRound(playerSelection, computerSelection) {
        let message;

        if (playerSelection == 'rock' && computerSelection == 'Paper') {
            message = "You lose! Paper beats Rock"
            computerScore++;
        }
        else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
            message = "You win! Rock beats Scissors"
            playerScore++;
        }
        else if (playerSelection == 'rock' && computerSelection == 'Rock') {
            message = "It's a tie!"
        }
        else if (playerSelection == 'paper' && computerSelection == 'Rock') {
            message = "You win! Paper beats Rock"
            playerScore++;
        }
        else if (playerSelection == 'paper' && computerSelection == 'Paper') {
            message = "It's a tie!"
        }
        else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
            message = "You lose. Scissors beat Paper"
            computerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
            message = "You win! Scissors beat Paper"
            playerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
            message = "You lose. Rock beats Scissors"
            computerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
            message = "It's a tie!"
        }
        
        // Check results with console.log(message);

        return message;
    }

    for (let i = 0; i < 5; i++ ) {
        const newPlayerChoice = getPlayerChoice();
        const newComputerChoice = getComputerChoice();

        console.log((playRound(newPlayerChoice, newComputerChoice)));
    }

    function getWinner() {
        if (playerScore > computerScore) {
            winner = "GAME OVER. You won!"
        }
        else if (playerScore < computerScore) {
            winner = "GAME OVER. You lost."
        }
        else {
            winner = "GAME OVER. It's a tie!"
        }

        return winner;
    }   

    console.log(getWinner());
}

game();