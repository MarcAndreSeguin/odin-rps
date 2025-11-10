function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // let computerChoice;
  switch (randomNumber) {
    case 1:
        return 'rock';
    case 2:
        return 'paper';
    case 3:
        return 'scissors';
  }
}

function getHumanChoice() {
  const RPS = prompt("Rock, paper, scissors? (please type r/p/s) ", "r");
  switch (RPS) {
    case 'r':
        return 'rock';
    case 'p':
        return 'paper';
    case 's':
        return 'scissors';
  }
}

let humanScore = 0
let computerScore = 0