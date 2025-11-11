function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // let computerChoice;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
const humanScoreTxt = document.querySelector("#humanScoreTxt");
const computerScoreTxt = document.querySelector("#computerScoreTxt");

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  
  if (humanChoice == computerChoice) {
    console.log(
      "It's a tie because " +
        humanChoice +
        " and " +
        computerChoice +
        " is a stalemate."
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(
      "You win because " + humanChoice + " beats " + computerChoice + "."
    );
    humanScore++;
  } else {
    console.log(
      "You lose because " + computerChoice + " beats " + humanChoice + "."
    );
    computerScore++;
  }

  if (computerScore == 5) {
    alert("Computers WINS! (5 rounds) // Game will now reset");
    resetGame(); 
  }
  
  if (humanScore == 5) {
    alert("You WIN! (5 rounds) // Game will now reset");
    resetGame();
  }
  updateScoreboard();
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
}

function updateScoreboard(){
    humanScoreTxt.textContent = humanScore;
    computerScoreTxt.textContent = computerScore;
}

const rock = document.querySelector("#rock");
rock.onclick = () => playRound("rock");

const paper = document.querySelector("#paper");
paper.onclick = () => playRound("paper");

const scissors = document.querySelector("#scissors");
scissors.onclick = () => playRound("scissors");

const reset = document.querySelector("#reset");
reset.onclick = () => (resetGame(), updateScoreboard());