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
    choice.textContent = `The player wins, ${f1} beats ${f2}`;

    return 1;
  } else if (
    (f2 === "scissors" && f1 === "paper") ||
    (f2 === "paper" && f1 === "rock") ||
    (f2 === "rock" && f1 === "scissors")
  ) {
    const choice = document.querySelector("#choice");
    choice.textContent = `The PC wins, ${f2} beats ${f1}`;

    return 2;
  } else {
    const choice = document.querySelector("#choice");
    choice.textContent = "It's a TIE!!";

    return 3;
  }
};

// let game = function (f, f1, f2) {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i <= 5; i++) {
//     console.log(`round ${i}`);
//     let outcome = f(f1(), f2());

//     if (outcome === 1) {
//       playerScore++;
//     } else if (outcome === 2) {
//       computerScore++;
//     }
//   }

//   console.log(`Final score: Player: ${playerScore} Computer: ${computerScore}`);
// };

// game(round, playerPlay, computerPlay);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let outcome = round(playerPlay(button.id), computerPlay());
  });
});
