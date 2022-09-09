/* step1: Use build-in function - prompt() to return user's choice and store it in the variable - userChoice. */
let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');
/* step2: in case user's input has different cases, to be more specific, uses .toLowerCase() convert all return values into lower cases. */
userChoice = userChoice.toLowerCase();
/* step3: building an array, declared as choiceStack to let computer choose from */
let choiceStack = ['paper', 'rock', 'scissors'];
/* step4: make use of two JS build-in functions - Math.random()(to generate random number between 0-1), multiply it by 3, because we have 3 choices in our choiceStack array; and pass it into Math.floor()(to return the largest integer less than or equal to a given number) */
let randomNum = Math.floor(Math.random() * 3);
/* step5: pass the generated number as an index to choiceStack, to get the element in the array and store it in another variable - computerChoice */
let computerChoice = choiceStack[randomNum];
/* step6: log the result on the console */
console.log(`Your choice is ${userChoice}, the computer's choice is ${computerChoice}.`);
/* final step: Compare each choice with if/else statement, then print the result on the console */
if (userChoice === computerChoice){
console.log("Tie!");
}else if (userChoice === 'paper' && computerChoice === 'rock'){
console.log("You win!");
}else if (userChoice === 'rock' && computerChoice === 'scissors'){
console.log("You win!");
}else if (userChoice === 'scissors' && computerChoice === 'rock'){
console.log("You lose!");
}else if (userChoice === 'rock' && computerChoice === 'paper'){
console.log("You lose!");
}else if (userChoice === 'paper' && computerChoice === 'scissors'){
console.log("You lose!");
}else if (userChoice === 'scissors' || computerChoice === 'paper'){
console.log("You win!");
}else{
console.log("Invalid input, please try again");
}
