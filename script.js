function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
        return 2
    } 
    else if (computerSelection.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {return 1}
    else if (computerSelection.toUpperCase() == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {return 1}
    else if (computerSelection.toUpperCase() == "ROCK" && playerSelection.toUpperCase() == "PAPER") {return 1}
    else {return 0}
}

function playGame() {
    let playerWin = 0;
    let computerWin= 0;
    let computerSelection;
    let roundResult;
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, Scissors?")
        roundResult = playRound(playerSelection, computerSelection);
        if(roundResult === 1) {playerWin++; console.log("You won this round!")} 
        else if (roundResult === 0) {computerWin++; console.log("You lost this round!")}
        else {console.log("It was a tie!")}
        console.log("Your choice was " + playerSelection + " and the computer had " + computerSelection + "!")
    }
    if (playerWin == computerWin) {return "Tie"}
    else if (playerWin > computerWin) {return "You Win"}
    else {return "You Lost"}
}

const myArray = ["rock", "paper", "scissors"];
console.log(playGame());
