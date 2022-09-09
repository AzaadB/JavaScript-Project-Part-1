function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = prompt("choose Rock,Paper or Scissors");

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  //player chooses rock//
  if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "Paper"
  ) {
    return "You lose,Paper beats Rock!";
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "Rock"
  ) {
    return "It's a tie.";
  } else if (
    playerSelection.toUpperCase() === "ROCK" &&
    computerSelection === "Scissors"
  ) {
    return "You win,Rock beats Scissors!";
  }
  //player chooses scissors//
  if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Rock"
  ) {
    return "You lose,Rock beats Scissors!";
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Scissors"
  ) {
    return "It's a tie.";
  } else if (
    playerSelection.toUpperCase() === "SCISSORS" &&
    computerSelection === "Paper"
  ) {
    return "You win, Scissors beats paper!";
  }
  //player chooses paper//
  if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Scissors"
  ) {
    return "You lose,Scissors beats Paper!";
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Paper"
  ) {
    return "It's a tie.";
  } else if (
    playerSelection.toUpperCase() === "PAPER" &&
    computerSelection === "Rock"
  ) {
    return "You win, Paper beats Rock!";
  }
}

function game() {
  // Created game function for five rounds
  let playerScore = 0; // Variable that starts score from 0
  let computerScore = 0; // Variable that starts score from 0
  let gameResultMessage; // Variable for the message result
  for (let i = 0; i < 5; i++) {
    // Created a for loop to repeat the rounds five times
    let userSelection = prompt(
      `Round ${i + 1} - Please choose rock, paper or scissors.`
    ); // Variable that prompts user to enter their choice
    let formattedUserSelection =
      userSelection.charAt(0).toUpperCase() +
      userSelection.slice(1).toLowerCase(); // Input rock paper scissors in any format. Whatever the input is converted to lowercase to prevent any errors.
    let roundResult = playRound(formattedUserSelection, computerPlay());
    console.log(roundResult[0]);

    if (roundResult[1] === "player") {
      playerScore += 1; // Adds one to score when player wins a round
    } else if (roundResult[1] === "computer") {
      computerScore += 1; // Adds one to score when computer wins a round
    }
  }

  if (playerScore > computerScore) {
    // A message which shows result of the winner and the total scores of each player
    gameResultMessage = `\nCongratulations! You won the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerScore < computerScore) {
    gameResultMessage = `\nSorry! You lost the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
  } else {
    gameResultMessage = "\nThe game was a tie";
  }
  console.log(gameResultMessage);
}

game();
