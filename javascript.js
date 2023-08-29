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

    console.log(computerChoice);
    return computerChoice;
}

getComputerChoice();