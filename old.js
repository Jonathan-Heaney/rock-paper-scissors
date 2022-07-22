if (playerChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        result = "It's a tie!";
        break;
      case "paper":
        result = "You lose! Paper beats Rock";
        break;
      case "scissors":
        result = "You win! Rock beats Scissors";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        result = "You win! Paper beats Rock";
        break;
      case "paper":
        result = "It's a tie!";
        break;
      case "scissors":
        result = "You lose! Scissors beat Paper";
        break;
      default:
        console.log("Something went wrong");
    }
  } else if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        result = "You lose! Rock beats Scissors";
        break;
      case "paper":
        result = "You win! Scissors beat Paper";
        break;
      case "scissors":
        result = "It's a tie!";
        break;
      default:
        console.log("Something went wrong");
    }
  } else getPlayerChoice();
  return result;
}