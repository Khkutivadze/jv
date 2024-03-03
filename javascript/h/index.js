// Array of words for the game
const words = ['javascript', 'hangman', 'developer', 'programming', 'computer'];

// Selecting a random word from the array
let randomWord = words[Math.floor(Math.random() * words.length)];

// Array to store the letters guessed by the user
let guessedLetters = [];

// Variable to store the number of remaining guesses
let remainingGuesses = 6;

// Function to initialize the game
function initializeGame() {
    // Reset guessedLetters array
    guessedLetters = [];

    // Display initial message
    alert("Welcome to Hangman!");

    // Display initial underscores representing each letter of the word
    let hiddenWord = '';
    for (let i = 0; i < randomWord.length; i++) {
        hiddenWord += '_ ';
    }
    alert("Guess the word: " + hiddenWord);

    // Start the game loop
    gameLoop();
}

// Function to check if the user has guessed all the letters
function checkWin() {
    for (let letter of randomWord) {
        if (!guessedLetters.includes(letter)) {
            return false;
        }
    }
    return true;
}

// Function to process user input and continue the game loop
function gameLoop() {
    // Check if the game is over
    if (remainingGuesses === 0 || checkWin()) {
        endGame();
        return;
    }

    // Prompt the user to guess a letter
    let letter = prompt(`Remaining guesses: ${remainingGuesses}\nEnter a letter:`);
    if (!letter) {
        return; // User pressed cancel or entered an empty string
    }
    letter = letter.toLowerCase(); // Convert to lowercase

    // Check if the letter has already been guessed
    if (guessedLetters.includes(letter)) {
        alert(`You already guessed '${letter}'. Try again.`);
    } else {
        // Add the letter to the guessedLetters array
        guessedLetters.push(letter);

        // Check if the guessed letter is in the word
        if (!randomWord.includes(letter)) {
            remainingGuesses--;
            alert(`Incorrect guess! ${remainingGuesses} guesses remaining.`);
        }
    }

    // Display the word with correctly guessed letters
    let displayedWord = '';
    for (let char of randomWord) {
        if (guessedLetters.includes(char)) {
            displayedWord += char + ' ';
        } else {
            displayedWord += '_ ';
        }
    }
    alert("Guess the word: " + displayedWord);

    // Continue the game loop
    gameLoop();
}

// Function to end the game
function endGame() {
    if (checkWin()) {
        alert(`Congratulations! You guessed the word '${randomWord}'!`);
    } else {
        alert(`Game over! The word was '${randomWord}'.`);
    }
}

// Initialize the game
initializeGame();
