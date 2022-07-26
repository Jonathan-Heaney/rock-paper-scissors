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
  if (playerWins < 5 && computerWins < 5) {
    if (playerChoice === "rock") {
      switch (computerChoice) {
        case "rock":
          const rockTie = document.querySelector("#results");
          rockTie.textContent = "It's a tie!";
          break;
        case "paper":
          const rockLoss = document.querySelector("#results");
          rockLoss.textContent = "You lose! Paper beats Rock";
          computerWins++;
          break;
        case "scissors":
          const rockWin = document.querySelector("#results");
          rockWin.textContent = "You win! Rock beats Scissors";
          playerWins++;
          break;
        default:
          console.log("Something went wrong");
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          const paperWin = document.querySelector("#results");
          paperWin.textContent = "You win! Paper beats Rock";
          playerWins++;
          break;
        case "paper":
          const paperTie = document.querySelector("#results");
          paperTie.textContent = "It's a tie!";
          break;
        case "scissors":
          const paperLoss = document.querySelector("#results");
          paperLoss.textContent = "You lose! Scissors beat Paper";
          computerWins++;
          break;
        default:
          console.log("Something went wrong");
      }
    } else if (playerChoice === "scissors") {
      switch (computerChoice) {
        case "rock":
          const scissorsLoss = document.querySelector("#results");
          scissorsLoss.textContent = "You lose! Rock beats Scissors";
          computerWins++;
          break;
        case "paper":
          const scissorsWin = document.querySelector("#results");
          scissorsWin.textContent = "You win! Scissors beat Paper";
          playerWins++;
          break;
        case "scissors":
          const scissorsTie = document.querySelector("#results");
          scissorsTie.textContent = "It's a tie!";
          break;
        default:
          console.log("Something went wrong");
      }
    }
    checkForWinner();
    if (playerWins < 5 && computerWins < 5) {
      checkScore();
    }
  }
}

function checkScore() {
  const scoreMessage = document.querySelector("#score");
  if (playerWins < 5 && computerWins < 5) {
    if (playerWins > computerWins) {
      scoreMessage.textContent = `You lead, ${playerWins} to ${computerWins}.`;
    } else if (computerWins > playerWins) {
      scoreMessage.textContent = `Computer leads, ${computerWins} to ${playerWins}.`;
    } else {
      scoreMessage.textContent = `Game is tied, ${playerWins} to ${computerWins}.`;
    }
  }
}

function checkForWinner() {
  const winnerMessage = document.querySelector(".winner");
  if (playerWins === 5) {
    winnerMessage.textContent = `YOU WIN, ${playerWins} to ${computerWins}!`;
  } else if (computerWins === 5) {
    winnerMessage.textContent = `Computer wins, ${computerWins} to ${playerWins}!`;
  }
}
