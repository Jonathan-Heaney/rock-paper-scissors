function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else if (randomNum === 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// function getPlayerChoice() {
//   let playerChoice = prompt("Rock, paper, or scissors?");
//   playerChoice = playerChoice.toLowerCase();
//   return playerChoice;
// }

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  });
});

let playerWins = 0;
let computerWins = 0;
let result;
function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        const rockTie = document.createElement("p");
        rockTie.textContent = "It's a tie!";
        results.appendChild(rockTie);
        result = "tie";
        break;
      case "paper":
        const rockLoss = document.createElement("p");
        rockLoss.textContent = "You lose! Paper beats Rock";
        results.appendChild(rockLoss);
        result = "computer";
        computerWins++;
        break;
      case "scissors":
        const rockWin = document.createElement("p");
        rockWin.textContent = "You win! Rock beats Scissors";
        results.appendChild(rockWin);
        playerWins++;
        result = "player";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        const paperWin = document.createElement("p");
        paperWin.textContent = "You win! Paper beats Rock";
        results.appendChild(paperWin);
        playerWins++;
        result = "player";
        break;
      case "paper":
        const paperTie = document.createElement("p");
        paperTie.textContent = "It's a tie!";
        results.appendChild(paperTie);
        result = "tie";
        break;
      case "scissors":
        const paperLoss = document.createElement("p");
        paperLoss.textContent = "You lose! Scissors beat Paper";
        results.appendChild(paperLoss);
        computerWins++;
        result = "computer";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        const scissorsLoss = document.createElement("p");
        scissorsLoss.textContent = "You lose! Rock beats Scissors";
        results.appendChild(scissorsLoss);
        computerWins++;
        result = "computer";
        break;
      case "paper":
        const scissorsWin = document.createElement("p");
        scissorsWin.textContent = "You win! Scissors beat Paper";
        results.appendChild(scissorsWin);
        playerWins++;
        result = "player";
        break;
      case "scissors":
        const scissorsTie = document.createElement("p");
        scissorsTie.textContent = "It's a tie!";
        results.appendChild(scissorsTie);
        result = "tie";
        break;
      default:
        console.log("Something went wrong");
    }
  }
  checkScore();
  return result;
}

function winner() {
  if (computerWins > playerWins) {
    console.log(`Computer wins, ${computerWins} to ${playerWins}!`);
  } else if (computerWins < playerWins) {
    console.log(`You win, ${playerWins} to ${computerWins}!`);
  } else {
    console.log(`Tie, ${computerWins} to ${playerWins}`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    if (result === "player") {
      playerWins++;
    } else if (result === "computer") {
      computerWins++;
    }
  }
  winner();
}

function checkScore() {
  const scoreMessage = document.createElement("p");
  if (playerWins > computerWins) {
    scoreMessage.textContent = `Player leads, ${playerWins} to ${computerWins}.`;
  } else if (computerWins > playerWins) {
    scoreMessage.textContent = `Computer leads, ${computerWins} to ${playerWins}.`;
  } else {
    scoreMessage.textContent = `Game is tied, ${playerWins} to ${computerWins}.`;
  }
  results.appendChild(scoreMessage);
}

// game();
// console.log(playerWins);
// console.log(computerWins);
