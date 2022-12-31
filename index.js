//This Function return randomly Rock, Paper, Scissors
let getComputerChoice = () => {
  let compChoices = ["Rock", "Paper", "Scissors"]
  let randomIndex = Math.floor(Math.random() * compChoices.length)
  return randomStr = compChoices[randomIndex]
}

// This variable contain Computer randomly generate Rock, Paper, Scissors
let computerSelection = getComputerChoice()

// This variable accept Player input and make it lower case
let playerSelection = prompt('Enter').toLocaleLowerCase()


// This Function takes randomly generate Rock, Paper, Scissors and Player input and log the result on the console
let playRound  = (computerSelection,playerSelection) => {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    return `You choose Rock the Computer choose ${computerSelection},Tie`
  } else if (playerSelection === "rock" && computerSelection === "Paper"){
    return `You choose Rock the Computer choose ${computerSelection},You Loose`
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return `You choose Rock the Computer choose ${computerSelection},You Win`



  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return `You choose Paper the Computer choose ${computerSelection},You Win`
  } else if (playerSelection === "paper" && computerSelection === "Paper"){
    return `You choose Paper the Computer choose ${computerSelection},Tie`
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return `You choose Paper the Computer choose ${computerSelection},You Loose`



  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return `You choose Scissors the Computer choose ${computerSelection},You Loose`
  } else if (playerSelection === "scissors" && computerSelection === "Paper"){
    return `You choose Scissors the Computer choose ${computerSelection},You Win` 
  } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
    return `You choose Scissors the Computer choose ${computerSelection},Tie`
}
};


//This Function loop through playRound Function 5 times and log the result of the game
let game = () => {
  let player = 0;
  let comp = 0;
  for (let i = 0; i < 5; i++ ) {
    playRound(computerSelection,playerSelection)
    computerSelection = getComputerChoice();
    console.log(playRound(computerSelection,playerSelection))
    if (playRound(computerSelection,playerSelection).includes("Win")) {
      player++
    }else if (playRound(computerSelection,playerSelection).includes("Loose")){
      comp++
    }
  }
  if(player < comp) {
    console.log(`You ${player}: Computer ${comp} : Computer Win!`)
  }else if (player > comp) {
    console.log(`You ${player}: Computer ${comp} : You Win!`)
  }else {
    console.log(`You ${player}: Computer ${comp} : Tie!`)
  }
}


game()


