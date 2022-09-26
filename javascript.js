function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    if (randomNumber === 1) {
        computerChoice = "paper";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getPlayerSelection() {
    let playerSelection = prompt("Enter your choice: (Rock, Paper, Scissors)");
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock") || (playerSelection === "paper") || (playerSelection === "scissors")) {
        return playerSelection;
    }
    else {
        return "invalid"
    }
}

function playRound(playerSelection, computerSelection){
    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);
    if (playerSelection === computerSelection) {
        return ("It's a draw! You both chose " + playerSelection) + ".";
    }

    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats Scissors.";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You lose! Paper beats Rock.";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Paper beats Rock.";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You lose! Scissors beats Paper.";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats Paper.";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You lose! Rock beats Scissors.";
    }
    else {
        return "The choice you entered was invalid. Try again.";
    }

}

function game() {
    let playerScore = 0;
    let comScore = 0;
    
}

game();