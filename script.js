// Étape 1 : Variables pour stocker le score
let humanScore = 0;
let computerScore = 0;

// Étape 2 : Fonction pour le choix de l'ordi
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Étape 3 : Fonction qui joue un round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Étape 4 : Fonction pour mettre à jour l’affichage du score
function updateScore() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
}

// Étape 5 : Fonction pour vérifier s'il y a un gagnant
function checkWinner() {
  const winnerDisplay = document.getElementById("winner");
  if (humanScore === 5) {
    winnerDisplay.textContent = "🎉 You won the game!";
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "💻 Computer won the game!";
  }
}

// Étape 6 : Fonction appelée quand on clique sur un bouton
function handleClick(humanChoice) {
  if (humanScore >= 5 || computerScore >= 5) return;

  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  document.getElementById("round-result").textContent = result;
  updateScore();
  checkWinner();
}

// Étape 7 : Attacher les écouteurs d’événements aux boutons
document.getElementById("rock").addEventListener("click", () => handleClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleClick("scissors"));
