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
  resultDiv.textContent = resultOneRound;

  if (playerScore >= 0 || computerScore >= 0) {
    finalScore.textContent = "";
  }
  if (resultOneRound.includes("Win")) {
    playerScore += 1;
    playerScoreDiv.textContent = "You: " + playerScore;
  } else if (resultOneRound.includes("Loose")) {
    computerScore += 1;
    computerScoreDiv.textContent = "Computer: " + computerScore;
  }

  checkWin();
};

let checkWin = () => {
  if (playerScore >= 5) {
    finalScore.textContent = "Win";
  } else if (computerScore >= 5) {
    finalScore.textContent = "Loose";
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
      return `You choose ${playerSelection} the Computer choose ${computerSelection}, Tie`;
    case playerSelection === "Rock" && computerSelection === "Paper":
      return `You choose Rock the Computer choose Paper, You Loose`;
    case playerSelection === "Rock" && computerSelection === "Scissors":
      return `You choose Rock the Computer choose Scissors, You Win`;

    case playerSelection === "Paper" && computerSelection === "Rock":
      return `You choose Paper the Computer choose Rock, You Win`;
    case playerSelection === "Paper" && computerSelection === "Scissors":
      return `You choose Paper the Computer choose Scissors, You Loose`;

    case playerSelection === "Scissors" && computerSelection === "Rock":
      return `You choose Scissors the Computer choose Rock, You Loose`;
    case playerSelection === "Scissors" && computerSelection === "Paper":
      return `You choose Scissors the Computer choose Paper, You Win`;
    default:
      console.log("Try Again");
  }
};
