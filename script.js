const computerChoiceOptions = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
}

function playGame(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie game!"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win!"
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        return "You win!"
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!"
    }
}

function fullGame () {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Please enter rock, paper, or scissors').toLowerCase()
        let computerChoice = getComputerChoice()
        let result = playGame(computerChoice, playerChoice);
        console.log(result)
    }
}

fullGame();