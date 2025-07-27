function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    const playerChoice = prompt("Please enter your choice: rock, paper, or scissors");
    const playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Player choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log("Player wins this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }
    
    console.log(`Scores - Player: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();  

playRound(humanSelection, computerSelection);

function playgame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);   
    }

    if( humanScore > computerScore ) {
        console.log("Player wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playgame();