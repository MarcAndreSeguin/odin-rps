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

function getHumanChoice() {
  const RPS = prompt("Rock, paper, scissors?", "rock");
  const RPSLowerCase = RPS.toLowerCase();
  switch (RPSLowerCase) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return "rock";
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
    return "T";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log(
      "You win because " + humanChoice + " beats " + computerChoice + "."
    );
    return "H";
  } else {
    console.log(
      "You lose because " + computerChoice + " beats " + humanChoice + "."
    );
    return "C";
  }
}
