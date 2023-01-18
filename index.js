const playerRockBtn = document.querySelector(".rock");
const playerPaperBtn = document.querySelector(".paper");
const playerScissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");
const playerScoreDiv = document.querySelector(".playerScore");
const computerScoreDiv = document.querySelector(".computerScore");
const finalScore = document.querySelector(".finalScore");

playerRockBtn.addEventListener("click", () => {
  return playerSelection("Rock");
});

playerPaperBtn.addEventListener("click", () => {
  return playerSelection("Paper");
});

playerScissorsBtn.addEventListener("click", () => {
  return playerSelection("Scissors");
});

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  const compChoices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * compChoices.length);
  return (randomStr = compChoices[randomIndex]);
};

let playerSelection = (playerChoice) => {
  const resultOneRound = playRound(getComputerChoice(), playerChoice);
  resultDiv.textContent = resultOneRound;

  if (resultOneRound.includes("win")) {
    playerScore += 1;
    playerScoreDiv.textContent = "You: " + playerScore;
  } else if (resultOneRound.includes("lose")) {
    computerScore += 1;
    computerScoreDiv.textContent = "Computer: " + computerScore;
  }

  checkWin();
};

let checkWin = () => {
  const winnerTextBox = document.querySelector(".winner-text");

  if (playerScore >= 5) {
    showWinBoxFinal();
    winnerTextBox.style.color = "green";
    winnerTextBox.textContent = "You have 5 points. Win!";
  } else if (computerScore >= 5) {
    showWinBoxFinal();
    winnerTextBox.style.color = "red";
    winnerTextBox.textContent = "Computer have 5 points. Loose!";
  }
};

let showWinBoxFinal = () => {
  const showWinBox = document.querySelector(".show-winner-final");
  const resetScoreBtn = document.querySelector(".playAgain-btn");
  const playerScoreText = document.querySelector(".player-score");
  const computerScoreText = document.querySelector(".computer-score");
  showWinBox.style.display = "block";

  if (playerScore > computerScore) {
    playerScoreText.style.color = "green";
    computerScoreText.style.color = "grey";
  } else if (playerScore < computerScore) {
    computerScoreText.style.color = "red";
    playerScoreText.style.color = "grey";
  }

  resetScoreBtn.addEventListener("click", (e) => {
    resetScore();
    showWinBox.style.display = "none";
  });

  playerScoreText.textContent = "You : " + playerScore;
  computerScoreText.textContent = "Computer :" + computerScore;
};

let resetScore = () => {
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = "You: " + playerScore;
    computerScoreDiv.textContent = "Computer: " + computerScore;
    resultDiv.textContent = "Choose what you want to play.";
  }
};

let playRound = (computerSelection, playerSelection) => {
  switch (true) {
    case playerSelection === computerSelection:
      return `You select ${playerSelection}. Computer select ${computerSelection}, Tie`;

    case playerSelection === "Rock" && computerSelection === "Paper":
      return `You select Rock. Computer selects Paper, You lose the round.`;
    case playerSelection === "Rock" && computerSelection === "Scissors":
      return `You select Rock. Computer selects Scissors, You win the round.`;

    case playerSelection === "Paper" && computerSelection === "Rock":
      return `You select Paper. Computer selects Rock, You win the round.`;
    case playerSelection === "Paper" && computerSelection === "Scissors":
      return `You select Paper. Computer selects Rock, You lose the round.`;

    case playerSelection === "Scissors" && computerSelection === "Rock":
      return `You select Scissors. Computer selects Rock, You lose the round.`;
    case playerSelection === "Scissors" && computerSelection === "Paper":
      return `You select Scissors. Computer selects Paper, You win the round.`;
    default:
      console.log("Try Again");
  }
};
