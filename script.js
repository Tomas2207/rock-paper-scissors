let computerPlay = function () {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

let playerPlay = function (choice) {
  switch (choice) {
    case "1":
      return "rock";
      break;
    case "2":
      return "paper";
      break;
    case "3":
      return "scissors";
      break;

    default:
      console.log("Not a valid option");
  }
};

let round = function (f1, f2) {
  if (
    (f1 === "scissors" && f2 === "paper") ||
    (f1 === "paper" && f2 === "rock") ||
    (f1 === "rock" && f2 === "scissors")
  ) {
    const choice = document.querySelector("#choice");
    choice.textContent = `PLAYER + 1`;

    return 1;
  } else if (
    (f2 === "scissors" && f1 === "paper") ||
    (f2 === "paper" && f1 === "rock") ||
    (f2 === "rock" && f1 === "scissors")
  ) {
    const choice = document.querySelector("#choice");
    choice.textContent = `PC + 1`;

    return 2;
  } else {
    const choice = document.querySelector("#choice");
    choice.textContent = "TIE";

    return 3;
  }
};

let playerScore = 0;
let computerScore = 0;

let checkWins = function (winner) {
  if (winner === 1) {
    playerScore += 1;
    const score = document.querySelector("#score");
    score.textContent = `Score: ${playerScore}`;
  } else if (winner === 2) {
    computerScore += 1;
    const pcScore = document.querySelector("#pc-score");
    pcScore.textContent = `Score: ${computerScore}`;
  }
  console.log("player: " + playerScore, "COmputer: " + computerScore);

  if (playerScore === 5) {
    const choice = document.querySelector("#choice");
    choice.textContent = "PLAYER 1 WINS!!";
  } else if (computerScore === 5) {
    const choice = document.querySelector("#choice");
    choice.textContent = "THE COMPUTER WINS :(";
  }
};

let reset = function () {
  playerScore = 0;
  computerScore = 0;
  const score = document.querySelector("#score");
  score.textContent = `Score: ${playerScore}`;
  const pcScore = document.querySelector("#pc-score");
  pcScore.textContent = `Score: ${computerScore}`;
  const choice = document.querySelector("#choice");
  choice.textContent = "";
  const playerChoice = document.querySelector("#player-choice");
  playerChoice.textContent = "";
  const computerChoice = document.querySelector("#pc-choice");
  computerChoice.textContent = "";
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore >= 5 || computerScore >= 5) {
      const choice = document.querySelector("#choice");
      choice.textContent = "RESET to play again";
    } else {
      let player = playerPlay(button.id);
      let computer = computerPlay();
      checkWins(round(player, computer));
      const playerChoice = document.querySelector("#player-choice");
      playerChoice.textContent = player.toUpperCase();
      const computerChoice = document.querySelector("#pc-choice");
      computerChoice.textContent = computer.toUpperCase();
    }
  });
});

const reseter = document.querySelector(".reset");

reseter.addEventListener("click", () => {
  reset();
});
