prompt("Lets play a game!");

function computerPlay() {
  let playerOptions = ["Rock", "Paper", "Scissors"];
  let randomString = Math.floor(Math.random() * playerOptions.length);
  //Chooses an Playeroptions from the array on(line 2)//
  return playerOptions[randomString];
}

function playRound(playerSelection, computerSelection) {
  /*storing the message that will be outputed after,
the round has finished and who the winner is in a variable called roundScore (line 13)*/
  const roundResult = {
    roundResultMessage: "",
    roundWinner: "",
  };
  switch (playerSelection) {
    /*In this first case(line 20) if statement, the computer and player both chose rock,
    the message on (line 22) will be outputed*/
    case "Rock":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`;
      } else if (computerSelection === "Paper") {
        prompt(
          (roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`)
        );
        roundResult.roundWinner = "computer";
        /*In this else if statement(line 23) is saying if the computer had to choose paper,
      the player would lose(line 24) and the computer will be the winner(line 25)*/
      } else if (computerSelection === "Scissors") {
        
        prompt(roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`);
        roundResult.roundWinner = "player";
        //In this else if statement(line 28) the winner will be the player due to rock beating scissors//
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        prompt(
          (roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`)
        );
        roundResult.roundWinner = "player";
        /*In this case(line 34) the option is "paper" in the if(line 35),
        is saying if the computer chose rock and the player stuck with paper, 
        the player will win the round(line 37)*/
      } else if (computerSelection === "Paper") {
        prompt(
          (roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`)
        );
        /*In this else if statement(line 41), the computer and player both chose paper,
        the message on (line 42) will outputed*/
      } else if (computerSelection === "Scissors") {
        prompt(
          (roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`)
        );
        roundResult.roundWinner = "computer";
        /*In this else if statement(line 45), the computer chose scissors and the player chose paper, 
        then the message on (line 46) will outputed and the computer will win the round(line 47)*/
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        prompt(
          (roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`)
        );
        roundResult.roundWinner = "computer";
        /*In this case(line 52) the option is "scissors" in the if(line 53),
        is saying if the computer chose rock and the player stuck with scissors, 
        the message on (line 54) will be outputed,
        and player will lose the round and the computer will be the winner(line 55)*/
      } else if (computerSelection === "Paper") {
        
        prompt(roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`);
        roundResult.roundWinner = "player";
        /*In this else if statement(line 60), the computer chose rock and the player
        chose scissors, the message on (line 61) will outputed and the player will win the round(line 62)*/
      } else if (computerSelection === "Scissors") {
        
        prompt(roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`);
        /*In this else if statement(line 63), the computer and player both
        chose scissors, the message on (line 66) will outputed*/
      }
      break;
    default:
      prompt("You did not enter a valid option!");
  }
  return roundResult;
}

function game() {
  //creating a NEW function called game()(line 77)
  let playerScore = 0,
    computerScore = 0,
    gameResultMessage;
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt(
      `Round ${i + 1}: Please enter rock, paper or scissors.`
    );
    let formattedUserSelection =
      userSelection.charAt(0).toUpperCase() +
      userSelection.slice(1).toLowerCase();
    let { roundResultMessage, roundWinner } = playRound(
      formattedUserSelection,
      computerPlay()
    );
    if (roundResultMessage === "" && roundWinner === "") {
      i--;
    } else {
      prompt(`Round ${i + 1}: ${roundResultMessage}`);
      if (roundWinner === "player") {
        playerScore += 1;
      } else if (roundWinner === "computer") {
        computerScore += 1;
      }
    }
  }
  if (playerScore === computerScore) {
    gameResultMessage = "The game was a tie";
  } else {
    gameResultMessage =
      playerScore > computerScore
        ? `\nCongratulations! You won the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`
        : `\nSorry! You lost the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
  }
  prompt(`END OF THE GAME! ${gameResultMessage}`);
}

game();
