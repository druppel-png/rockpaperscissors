function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == playerSelection.toUpperCase()) {
        return 2
    } 
    else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {return 1}
    else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {return 1}
    else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER") {return 1}
    else {return 0}
}

function checkPlayerSelection (playerSelection) {
    if (playerSelection == null || !myArray.includes(playerSelection.toUpperCase())) {console.log("Please enter a correct response! Restarting the Game."); playGame()}
}

function playGame() {
    let playerWin = 0;
    let computerWin = 0;
    let computerSelection;
    let roundResult;
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper, Scissors?");
        checkPlayerSelection(playerSelection);
        roundResult = playRound(playerSelection, computerSelection);
        if(roundResult === 1) {playerWin++; console.log("You won this round!")} 
        else if (roundResult === 0) {computerWin++; console.log("You lost this round!")}
        else {console.log("It was a tie!")}
        console.log("Your choice was " + playerSelection.toLowerCase() + " and the computer had " + computerSelection.toLowerCase() + "!");
    }
    if (playerWin == computerWin) {return "Tie"}
    else if (playerWin > computerWin) {return "You Win"}
    else {return "You Lost"}
}

const myArray = ["ROCK", "PAPER", "SCISSORS"];
console.log(playGame());
