const computerChoiceOptions = ["rock", "paper", "scissors"]
let playerChoice = prompt('Please enter rock, paper, or scissors').toLowerCase()

console.log(playerChoice)

function getComputerChoice() {
    return computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
}

let computerChoice = getComputerChoice()

console.log(computerChoice)

function playGame(computerChoice, playerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "Tie game!"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win!"
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        return "You lose!"
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        return "Tie game!"
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!"
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "Tie Game!"
    } 
}

let result = playGame(computerChoice, playerChoice);
console.log(result)