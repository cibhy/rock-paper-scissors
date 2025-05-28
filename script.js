function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return 'rock';
  } else if (computerChoice === 2) {
    return 'paper';
  } else {
    return 'scissors'
  }
}

function getPlayerChoice(){
  document.querySelector('.rock').addEventListener('click', () => playGame('rock'));
  document.querySelector('.paper').addEventListener('click', () => playGame('paper'));
  document.querySelector('.scissors').addEventListener('click', () => playGame('scissors'));
}
let result = '';
let score = '';
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  let computerChoice = getComputerChoice();
  if (computerChoice === playerChoice) {
      result = console.log(`Tie. Both chose ${computerChoice}`) ;
      score = console.log(`Player ${playerScore} - Computer ${computerScore}`);

    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
      playerChoice === 'paper' && computerChoice === 'rock' ||
      playerChoice === 'scissors' && computerChoice === 'paper') {
      playerScore++;
      result = console.log(`You Win. Player chose ${playerChoice} and Computer chose ${computerChoice}`);
      score = console.log(`Player ${playerScore} - Computer ${computerScore}`);
      
    } else {
      computerScore++;
      result = console.log(`You Lose. Player chose ${playerChoice} and Computer chose ${computerChoice}`);
      score = console.log(`Player ${playerScore} - Computer ${computerScore}`);
  }


}

getPlayerChoice();