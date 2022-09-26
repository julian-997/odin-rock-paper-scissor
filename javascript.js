let playerScore = 0;
let cpuScore = 0;

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


function playRound(playerSelection, computerSelection){
    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);
    if (playerSelection === computerSelection) {
        resultText.textContent = "It's a draw! You both chose " + playerSelection + ".";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        resultText.textContent = "You win! Rock beats Scissors.";
        playerScore++;
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        resultText.textContent = "You lose! Paper beats Rock.";
        cpuScore++;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        resultText.textContent = "You win! Paper beats Rock.";
        playerScore++;
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        resultText.textContent = "You lose! Scissors beats Paper.";
        cpuScore++;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        resultText.textContent = "You win! Scissors beats Paper.";
        playerScore++;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        resultText.textContent = "You lose! Rock beats Scissors.";
        cpuScore++;
    }
}

function updateScore(){
    cpuScoreText.textContent = cpuScore;
    playerScoreText.textContent = playerScore;
    
    if (playerScore == 5){
        alert("Congratulations, you won!");
    }

    if (cpuScore == 5){
        alert("The computer won. Try again!");
    }
}


const cpuScoreText = document.querySelector("#cpuScore");
const playerScoreText = document.querySelector("#playerScore");
const resultText = document.querySelector("#result");
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");


btnRock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
    updateScore();
});
btnPaper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    updateScore();
});
btnScissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
    updateScore();
});
