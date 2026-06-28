
# 📘 Assignment: Games in Python

## 🎯 Objective

Build the classic Hangman word-guessing game to practice Python string manipulation, loops, conditionals, and random selection.

## 📝 Tasks

### 🛠️ Game Setup and Word Selection

#### Description
Set up the initial game state by importing the `random` module, defining a list of possible words, and randomly selecting a secret word. Also initialize variables to track guessed letters, incorrect guesses, and the maximum allowed incorrect attempts.

#### Requirements
Completed program should:

- Use the `random` module to randomly select a word from a predefined list
- Initialize a variable to store the secret word
- Initialize a set or list for guessed letters (start empty)
- Set a variable for the maximum number of incorrect guesses allowed (e.g., 6)
- Set a counter for incorrect guesses made so far (start at 0)

### 🛠️ Main Game Loop

#### Description
Build the core game loop that displays the current word progress, prompts the player for a letter guess, updates the game state, and repeats until the game ends.

#### Requirements
Completed program should:

- Display the current progress of the word, showing guessed letters and underscores for unguessed letters (e.g., `_ _ t h _ _`)
- Prompt the player to guess a single letter using `input()`
- Check if the guessed letter is in the secret word and update the display accordingly
- Track incorrect guesses and inform the player how many attempts remain
- Handle repeated guesses gracefully (e.g., notify the player they already guessed that letter)

### 🛠️ Win and Lose Conditions

#### Description
Determine when the game should end and display the appropriate outcome to the player.

#### Requirements
Completed program should:

- End the game when the player guesses all letters in the secret word and display a winning message with the word
- End the game when the player runs out of incorrect attempts and display a losing message revealing the word
- Use a `while` loop that continues as long as the player has remaining attempts and the word is not fully guessed
