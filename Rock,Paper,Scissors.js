const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  //Random is used to generate a random number between 0 and 1, and scaled to the length of the options array
  //Math.floor is used to round down to the nearest whole number as the output of the random function is a decimal
  let random = Math.floor(Math.random() * options.length);
  return options[random];
  //In the return(line 7) it will return the options according whatever option was chosen//
}

function playRound(playerSelection, computerSelection) {
  //If there is an invalid data entered the message on (line 13) will be returned//
  if (playerSelection !== "string" || computerSelection !== "string") {
    return "Invalid input";
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerSelection =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  /*If the user enters an option that is not in the array on (line 1), 
  then we return the message on (line 26)*/
  if (!options.includes(playerSelection)) {
    return `${playerSelection} is NOT a valid input`;
  }

  //List containing the sceanrios where the user wins
  listOfPlayerWins = [
    playerSelection == "Rock" && computerSelection == "Scissors",
    playerSelection == "Paper" && computerSelection == "Rock",
    playerSelection == "Scissors" && computerSelection == "Paper",
  ];

  if (listOfPlayerWins.includes(true)) {
    playerScore += 1;
    roundCounter += 1;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == computerSelection) {
    roundCounter += 1;
    return "Tie!";
  } else {
    computerScore += 1;
    roundCounter += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

let playerScore;
let computerScore;
let roundCounter;
let prevoiusRound;

function game() {
  playerScore = 0;
  computerScore = 0;
  roundCounter = 1;
  prevoiusRound = 1;
  //loops//
  for (let i = 0; i < 5; i++) {
    userInput = prompt("Enter your choice of Rock, Paper, Scissors!");
    console.log(playRound(userInput, computerPlay()));
    while (prevoiusRound == roundCounter) {
      userInput = prompt("Enter your choice of Rock, Paper, Scissors!");
      console.log(playRound(userInput, computerPlay()));
    }
    prevoiusRound++;
    console.log(
      `Round: ${
        prevoiusRound - 1
      } \nCurrent Score: Player ${playerScore} vs. Computer ${computerScore}`
    );
  }
  alert(`Final Score\n Player: ${playerScore} \n Computer: ${computerScore}`);
}

game();
