// Randomly returns Rock, Paper, or Scissors
// idea: random number -> ex: if number is 1, return 'Rock'
function getComputerChoice() {
    let num = Math.random();

    if (num < 0.333) {
        let computerChoice = 'Rock'
        return computerChoice;
    }
    else if (num >= 0.333 && num <= 0.666) {
        let computerChoice = 'Paper'
        return computerChoice;
    }
    else {
        let computerChoice = 'Scissors'
        return computerChoice;
    }

    console.log(computerChoice);
}

getComputerChoice();