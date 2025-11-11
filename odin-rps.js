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
    const humanScoreTxt = document.querySelector("#humanScoreTxt");
    humanScoreTxt.textContent = humanScore;
  } else {
    console.log(
      "You lose because " + computerChoice + " beats " + humanChoice + "."
    );
    computerScore++;
    const computerScoreTxt = document.querySelector("#computerScoreTxt");
    computerScoreTxt.textContent = computerScore;
  }

}

const rock = document.querySelector("#rock");
rock.onclick = () => playRound("rock");

const paper = document.querySelector("#paper");
paper.onclick = () => playRound("paper");

const scissors = document.querySelector("#scissors");
scissors.onclick = () => playRound("scissors");

