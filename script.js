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
          rockTie.style.color = "black";
          break;
        case "paper":
          const rockLoss = document.querySelector("#results");
          rockLoss.textContent = "You lose! Paper beats Rock";
          rockLoss.style.color = "red";
          computerWins++;
          break;
        case "scissors":
          const rockWin = document.querySelector("#results");
          rockWin.textContent = "🪨 You win! Rock beats Scissors";
          rockWin.style.color = "green";
          playerWins++;
          break;
        default:
          console.log("Something went wrong");
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          const paperWin = document.querySelector("#results");
          paperWin.textContent = "📜 You win! Paper beats Rock";
          paperWin.style.color = "green";
          playerWins++;
          break;
        case "paper":
          const paperTie = document.querySelector("#results");
          paperTie.textContent = "It's a tie!";
          paperTie.style.color = "black";
          break;
        case "scissors":
          const paperLoss = document.querySelector("#results");
          paperLoss.textContent = "You lose! Scissors beat Paper";
          paperLoss.style.color = "red";
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
          scissorsLoss.style.color = "red";
          computerWins++;
          break;
        case "paper":
          const scissorsWin = document.querySelector("#results");
          scissorsWin.textContent = "✂️ You win! Scissors beat Paper";
          scissorsWin.style.color = "green";
          playerWins++;
          break;
        case "scissors":
          const scissorsTie = document.querySelector("#results");
          scissorsTie.textContent = "It's a tie!";
          scissorsTie.style.color = "black";
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
  console.log(playerChoice, computerChoice);
}

function checkScore() {
  const scoreMessage = document.querySelector(".score");
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
  const winnerMessage = document.querySelector("#winner");
  if (playerWins === 5) {
    winnerMessage.textContent = `🏆 YOU WIN, ${playerWins} to ${computerWins}! 🏆`;
    winnerMessage.style.color = "purple";
    winnerMessage.style.fontWeight = "bold";
    winnerMessage.style.fontSize = "32px";
    winnerMessage.style.fontStyle = "normal";
    const jonah = document.createElement("IMG");
    jonah.setAttribute("src", "/img/jonah-hill.gif");
    jonah.setAttribute("width", "304");
    jonah.setAttribute("height", "auto");
    jonah.setAttribute("margin", "200px");
    document.getElementById("gif").appendChild(jonah);
    rematchButton();
  } else if (computerWins === 5) {
    winnerMessage.textContent = `😭 Computer wins, ${computerWins} to ${playerWins}! 😭`;
    winnerMessage.style.color = "dark-gray";
    winnerMessage.style.fontWeight = "bold";
    winnerMessage.style.fontSize = "32px";
    winnerMessage.style.fontStyle = "normal";
    const dawson = document.createElement("IMG");
    dawson.setAttribute("src", "/img/dawson.gif");
    dawson.setAttribute("width", "304");
    dawson.setAttribute("height", "auto");
    dawson.setAttribute("margin", "200px");
    document.getElementById("gif").appendChild(dawson);
    rematchButton();
  }
}

// function rematch() {
//   document.querySelector(rematch).addEventListener("click", function () {
//     window.location.reload();
//     return false;
//   });
// }

function rematchButton() {
  const rematch = document.createElement("button");
  const rematchText = document.createTextNode("REMATCH");
  rematch.appendChild(rematchText);
  rematch.style.margin = "1rem";
  rematch.style.padding = ".5rem";
  rematch.style.fontWeight = "bold";
  document.getElementById("rematch").appendChild(rematch);
  rematch.addEventListener("click", function () {
    window.location.reload();
    return false;
  });
}
