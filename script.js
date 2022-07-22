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

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors?");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  let result;
  if (playerChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("It's a tie!");
        result = "tie";
        break;
      case "paper":
        console.log("You lose! Paper beats Rock");
        result = "computer";
        break;
      case "scissors":
        console.log("You win! Rock beats Scissors");
        result = "player";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        console.log("You win! Paper beats Rock");
        result = "player";
        break;
      case "paper":
        console.log("It's a tie!");
        result = "tie";
        break;
      case "scissors":
        console.log("You lose! Scissors beat Paper");
        result = "computer";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        console.log("You lose! Rock beats Scissors");
        result = "computer";
        break;
      case "paper":
        console.log("You win! Scissors beat Paper");
        result = "player";
        break;
      case "scissors":
        console.log("It's a tie!");
        result = "tie";
        break;
      default:
        console.log("Something went wrong");
    }
  } else getPlayerChoice();
  return result;
}

// const playerChoice = getPlayerChoice();
// const computerChoice = getComputerChoice();
// console.log(
//   playRound(playerChoice, computerChoice),
//   playerChoice,
//   computerChoice
// );
