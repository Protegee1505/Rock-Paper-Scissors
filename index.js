//This Function return randomly "Rock" or "Paper" or "Scissors" 
let getComputerChoice = () => {
  const compChoices = ["Rock", "Paper", "Scissors"]
  let randomIndex = Math.floor(Math.random() * compChoices.length)
  return randomStr = compChoices[randomIndex]
};

let computerSelection = getComputerChoice();
let playerSelection = prompt('Enter').toLocaleLowerCase();


// This function takes randomly generate Rock, Paper, Scissors and Player input and return the result of who won the round
let playRound  = (computerSelection,playerSelection) => {
  switch (true) {
   case playerSelection === "rock" && computerSelection === "Rock" :
     return `You choose Rock the Computer choose ${computerSelection},Tie`
   case playerSelection === "rock" && computerSelection === "Paper" :
     return `You choose Rock the Computer choose ${computerSelection},You Loose`
    case playerSelection === "rock" && computerSelection === "Scissors" :
     return `You choose Rock the Computer choose ${computerSelection},You Win`

    case playerSelection === "paper" && computerSelection === "Rock" :
     return `You choose Paper the Computer choose ${computerSelection},You Win`
    case playerSelection === "paper" && computerSelection === "Paper" :
     return `You choose Paper the Computer choose ${computerSelection},Tie`
    case playerSelection === "paper" && computerSelection === "Scissors" :
      
     return `You choose Paper the Computer choose ${computerSelection},You Loose`
    case playerSelection === "scissors" && computerSelection === "Rock" :
     return `You choose Scissors the Computer choose ${computerSelection},You Loose`
    case playerSelection === "scissors" && computerSelection === "Paper" :
     return `You choose Scissors the Computer choose ${computerSelection},You Win`
    case playerSelection === "scissors" && computerSelection === "Scissors" :
     return `You choose Scissors the Computer choose ${computerSelection},Tie`
     default:
     console.log("Try Again")
  }
}





//This Function loop through playRound function 5 times and log the final result of who won the game
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
};


game()


