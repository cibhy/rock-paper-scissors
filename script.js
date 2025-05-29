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

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const finalResult = document.querySelector('.final-result');

function playGame(playerChoice){
  if (gameOver) return;
  let computerChoice = getComputerChoice();
  if (computerChoice === playerChoice) {
      playerScoreDisplay.innerHTML = `${playerScore}`;
      computerScoreDisplay.innerHTML = `${computerScore}`
      result.innerHTML += `Tie. Both chose ${computerChoice}. <br>` ;

    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
      playerChoice === 'paper' && computerChoice === 'rock' ||
      playerChoice === 'scissors' && computerChoice === 'paper') {
      playerScore++;
      playerScoreDisplay.innerHTML = `${playerScore}`;
      computerScoreDisplay.innerHTML = `${computerScore}`
      result.innerHTML += `You Win. Player chose ${playerChoice} and Computer chose ${computerChoice}. <br>`;

    } else {
      computerScore++;
      playerScoreDisplay.innerHTML = `${playerScore}`;
      computerScoreDisplay.innerHTML = `${computerScore}`
      result.innerHTML += `You Lose. Player chose ${playerChoice} and Computer chose ${computerChoice}. <br>`;
  }

  if (playerScore === 5 || computerScore === 5){
    gameOver = true;
    finalResult.innerHTML += playerScore === 5 ? `You Won. Congratulation !!!` : `You Lost. Better luck next time !`;
  }

}

getPlayerChoice();

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerHTML = `${playerScore}`;
  computerScoreDisplay.innerHTML = `${computerScore}`;
  result.innerHTML ='';
  finalResult.innerHTML = '';
  gameOver = false;
}
