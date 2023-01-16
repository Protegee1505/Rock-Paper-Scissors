//This Function return randomly "Rock" or "Paper" or "Scissors"
let getComputerChoice = () => {
  const compChoices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * compChoices.length);
  return (randomStr = compChoices[randomIndex]);
};

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

let playerSelection = (playerChoice) => {
  resetScore();

  let resultOneRound = playRound(getComputerChoice(), playerChoice);
  resultDiv.innerHTML = resultOneRound;

  if (playerScore >= 0 || computerScore >= 0) {
    finalScore.textContent = "";
  }
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
  if (playerScore >= 5) {
    finalScore.style.color = "green";
    finalScore.textContent = "You have 5 points. Win!";
  } else if (computerScore >= 5) {
    finalScore.style.color = "red";
    finalScore.textContent = "Computer have 5 points. Loose!";
  }
};

let resetScore = () => {
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = "You: " + playerScore;
    computerScoreDiv.textContent = "Computer: " + computerScore;
  }
};

let playRound = (computerSelection, playerSelection) => {
  switch (true) {
    case playerSelection === computerSelection:
      return `You select ${playerSelection} the Computer select ${computerSelection}, Tie`;
    case playerSelection === "Rock" && computerSelection === "Paper":
      return `You select Rock, the Computer selects Paper, You lose.`;
    case playerSelection === "Rock" && computerSelection === "Scissors":
      return `You select Rock, the Computer selects Scissors, You win.`;

    case playerSelection === "Paper" && computerSelection === "Rock":
      return `You select Paper, the Computer selects Rock, You win.`;
    case playerSelection === "Paper" && computerSelection === "Scissors":
      return `You select Paper, the Computer selects Rock, You lose.`;

    case playerSelection === "Scissors" && computerSelection === "Rock":
      return `You select Paper, the Computer selects Rock, You lose.`;
    case playerSelection === "Scissors" && computerSelection === "Paper":
      return `You select Paper, the Computer selects Rock, You win.`;
    default:
      console.log("Try Again");
  }
};
