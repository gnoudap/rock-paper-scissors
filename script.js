let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const winPoints = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(humanChoice, computerChoice) {
    const resultText = document.querySelector('#result-text');
    const playerScoreEl = document.querySelector('#player-score');
    const computerScoreEl = document.querySelector('#computer-score');
    
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    
    let roundResult = '';
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundResult = "You win this round!";
        console.log("You win this round!");
        humanScore++;
    } else {
        roundResult = "Computer wins this round!";
        console.log("Computer wins this round!");
        computerScore++;
    }
    
    resultText.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${roundResult}`;
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    
    roundsPlayed++;
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    
    if (humanScore == winPoints || computerScore == winPoints) {
        endGame();
    }
}

function endGame() {
    const resultText = document.querySelector('#result-text');
    
    console.log("\n--- GAME OVER ---");
    let gameResult = '';
    if (humanScore > computerScore) {
        gameResult = "🎉 You win the game!";
        console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
        gameResult = "💻 Computer wins the game!";
        console.log("💻 Computer wins the game!");
    } else {
        gameResult = "🤝 The game is a tie!";
        console.log("🤝 The game is a tie!");
    }
    
    resultText.textContent = `GAME OVER! ${gameResult} Click any button to start a new game!`;
    
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    console.log("Click any button to start a new game!");
    
    setTimeout(() => {
        document.querySelector('#player-score').textContent = '0';
        document.querySelector('#computer-score').textContent = '0';
        resultText.textContent = 'Game ready! Choose your move!';
    }, 3000); 
}

function setupEventListeners() {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        determineWinner('rock', computerChoice);
    });

    paper.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        determineWinner('paper', computerChoice);
    });

    scissors.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        determineWinner('scissors', computerChoice);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    document.querySelector('#result-text').textContent = 'Game ready! Choose your move!';
    console.log("Rock Paper Scissors Game Started!");
    console.log("Click Rock, Paper, or Scissors to play!");
});