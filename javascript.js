function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "Rock";
    }
    if (randomNumber === 1) {
        computerChoice = "Paper";
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getPlayerSelection() {
    let playerSelection = prompt("Enter your choice: (Rock, Paper, Scissors)");
    return playerSelection;
}

console.log(getComputerChoice());
console.log(getPlayerSelection());

function playRound(){
    let computerSelection = getComputerChoice();

}