/* Tutorial 4
   Example 7 JavaScript code
*/

const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess a number between 1 and 100:"));
let attempts = 1;

if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
  console.log("Sorry, it is not a valid entry.");
}

while (guess !== randomNumber) {
  if (guess < randomNumber) {
    console.log("Too low, guess again.")
    guess = Number(prompt("Too low, guess again:"));
  } else {
    console.log("Too high, guess again.")
    guess = Number(prompt("Too high, guess again:"));
  }
  attempts++;
}

console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);