function getComputerChoice() {
  const randomNbr = Math.random();
  if (randomNbr < 0.34) {
    return "rock";
  } else if (randomNbr < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?");
  return choice.toLowerCase(); // attention à ne pas utiliser toLocaleLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
}

// Appel du round avec les bonnes variables
const humanChoice = getHumanChoice();       // appelle la fonction et stocke le résultat
const computerChoice = getComputerChoice(); // pareil

playRound(humanChoice, computerChoice);
