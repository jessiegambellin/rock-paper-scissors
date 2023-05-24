const computerChoiceOptions = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0
let choices = Array.from(document.getElementsByClassName('choice'));



function getComputerChoice() {
    return computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
}

function playGame(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie game!"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore = ++computerScore
        console.log(computerScore)
        return "You lose!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerscore = ++playerScore
        console.log(playerScore)
        return "You win!"
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        playerscore = ++playerScore
        console.log(playerScore)
        return "You win!"
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore = ++computerScore
        console.log(computerScore)
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        computerScore = ++computerScore
        console.log(computerScore)
        return "You lose!"
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerscore = ++playerScore
        console.log(playerScore)
        return "You win!"
    }
}

choices.forEach(choice => {
     choice.addEventListener('click', function(){
        playGame(getComputerChoice(),choice.value)
    })
});


// function fullGame () {
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt('Please enter rock, paper, or scissors').toLowerCase()
//         let computerChoice = getComputerChoice()
//         let result = playGame(computerChoice, playerChoice);
//         console.log(result)
//     }
//     if (playerScore > computerScore) {
//         alert("You Win!")
//     } else if (computerScore > playerScore) {
//         alert("You Lose!")
//     }
// }

// fullGame();