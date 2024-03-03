// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main function for the guessing game
function numberGuessingGame() {
    const minRange = 1;
    const maxRange = 10;
    const randomNumber = generateRandomNumber(minRange, maxRange);
    let attempts = 0;

    while (true) {
        let userGuess = parseInt(prompt(`Guess the number between ${minRange} and ${maxRange}:`));
        attempts++;

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
            continue;
        }

        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
            break;
        } else if (userGuess < randomNumber) {
            alert("Try a higher number.");
        } else {
            alert("Try a lower number.");
        }
    }
}

// Start the game
numberGuessingGame();
