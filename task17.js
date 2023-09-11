// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct
if (userGuess === secretNumber) {
  console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  console.log("Close enough to the correct answer");
} else {
  console.log("Sorry, try again!");
}





