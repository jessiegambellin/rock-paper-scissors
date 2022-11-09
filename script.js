let computerChoiceOptions = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)]
}

getComputerChoice();
