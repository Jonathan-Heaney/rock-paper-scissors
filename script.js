function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection;
  if (randomNum === 0) {
    computerSelection = "rock";
  } else if (randomNum === 1) {
    computerSelection = "paper";
  } else if (randomNum === 2) {
    computerSelection = "scissors";
  }
  return computerSelection;
}
