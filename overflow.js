function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors?");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
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
