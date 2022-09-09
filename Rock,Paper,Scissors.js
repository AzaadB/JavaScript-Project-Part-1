function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = prompt("choose Rock,Paper or Scissors");

let computerSelection = computerPlay();

// function playRound(playerSelection, computerSelection) {
//   //player chooses rock//
//   if (
//     playerSelection.toUpperCase() === "ROCK" &&
//     computerSelection === "Paper"
//   ) {
//     return "You lose,Paper beats Rock!";
//   } else if (
//     playerSelection.toUpperCase() === "ROCK" &&
//     computerSelection === "Rock"
//   ) {
//     return "It's a tie.";
//   } else if (
//     playerSelection.toUpperCase() === "ROCK" &&
//     computerSelection === "Scissors"
//   ) {
//     return "You win,Rock beats Scissors!";
//   }
//   //player chooses scissors//
//   if (
//     playerSelection.toUpperCase() === "SCISSORS" &&
//     computerSelection === "Rock"
//   ) {
//     return "You lose,Rock beats Scissors!";
//   } else if (
//     playerSelection.toUpperCase() === "SCISSORS" &&
//     computerSelection === "Scissors"
//   ) {
//     return "It's a tie.";
//   } else if (
//     playerSelection.toUpperCase() === "SCISSORS" &&
//     computerSelection === "Paper"
//   ) {
//     return "You win, Scissors beats paper!";
//   }
//   //player chooses paper//
//   if (
//     playerSelection.toUpperCase() === "PAPER" &&
//     computerSelection === "Scissors"
//   ) {
//     return "You lose,Scissors beats Paper!";
//   } else if (
//     playerSelection.toUpperCase() === "PAPER" &&
//     computerSelection === "Paper"
//   ) {
//     return "It's a tie.";
//   } else if (
//     playerSelection.toUpperCase() === "PAPER" &&
//     computerSelection === "Rock"
//   ) {
//     return "You win, Paper beats Rock!";
//   }
// }
