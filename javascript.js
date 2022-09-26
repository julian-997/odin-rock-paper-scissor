const cpuScoreText = document.querySelector("#cpuScore");
const playerScoreText = document.querySelector("#playerScore");
const resultDescription = document.querySelector("#resultDescription");
const resultText = document.querySelector("#result");
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");
const btnRestart = document.querySelector("#restart");

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
        playerScoreText.classList.add("win");
        cpuScoreText.classList.add("lose");
        resultDescription.textContent = "Final result:";
        resultText.textContent = "Congratulations, you won!";
        btnRestart.classList.remove("hide");
    }

    if (cpuScore == 5){
        cpuScoreText.classList.add("win");
        playerScoreText.classList.add("lose");
        resultDescription.textContent = "Final result:";
        resultText.textContent = "You lost. Try again!";
        btnRestart.classList.remove("hide");
    }

    if ((playerScore < 5) && (cpuScore < 5)) {
        cpuScoreText.classList.remove("win", "lose");
        playerScoreText.classList.remove("win", "lose");
    }
}





btnRock.addEventListener('click', () => {
    if ((playerScore < 5) && (cpuScore < 5)){
    playRound("rock", getComputerChoice());
    updateScore();
    }
    else {
        alert("Start a new game if you want to play again.")
    }
});

btnPaper.addEventListener('click', () => {
    if ((playerScore < 5) && (cpuScore < 5)){
    playRound("paper", getComputerChoice());
    updateScore();
    }
    else {
        alert("Start a new game if you want to play again.")
    }
});

btnScissors.addEventListener('click', () => {
    if ((playerScore < 5) && (cpuScore < 5)){
    playRound("scissors", getComputerChoice());
    updateScore();
    }
    else {
        alert("Start a new game if you want to play again.")
    }
});

btnRestart.addEventListener('click', () => {
    resultDescription.textContent = "Result of the last round: "
    resultText.textContent = "No game played yet.";
    playerScore = 0;
    cpuScore = 0;
    updateScore();
    btnRestart.classList.add("hide");
})
