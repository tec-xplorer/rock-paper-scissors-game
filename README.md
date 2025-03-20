# rock-paper-scissors-game

This small project helped me improve my project management skills. While working on it, I set up a clear workflow, learned how to name my Git branches in a professional way, and wrote clear, detailed commit messages and pull requests. This experience was an important step in my growth as a developer, helping me learn better development practices.

*Thank you to The Odin Project team.*

---

## Introduction

This project is a simple Rock, Paper, Scissors game built in JavaScript. It allows you to play against the computer while practicing basic programming concepts such as loops, conditionals, and functions. 

The project was developed as part of the training provided by [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

---

## Features

- **Play against the computer:** Challenge the computer in a classic game of Rock, Paper, Scissors.
- **Score tracking:** The game displays the current score after each round.
- **Tie management:** In case both players choose the same option, the round is replayed.
- **Game end conditions:** The game ends when a player reaches 3 wins or after 5 rounds maximum.
- **Clear messages:** Each round and the final game state are communicated clearly via messages.

---

## Technologies

- **Language:** JavaScript

---

### Code Example

```javascript
const MAX_ROUNDS = 5;
const GAME_CHOICES = {1: "Rock", 2: "Paper", 3: "Scissors"};
let playerChoice = "";
let computerChoice = "";
let playerWin = false;
let computerWin = false;
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

/*
 * Displays the available game choices.
 */
function displayChoices() {
    console.log("Choose an option:");
    for (let key in GAME_CHOICES) {
        console.log(`${key} for ${GAME_CHOICES[key]}`);
    }
}

/*
 * Prompts the user to enter a choice and returns it after validation.
 */
function getHumanChoice() {
    displayChoices();
    let userInput = parseInt(prompt("Make your choice!"), 10);
    while (userInput !== 1 && userInput !== 2 && userInput !== 3) {
        console.log("Invalid entry. Please enter 1, 2, or 3.");
        userInput = parseInt(prompt("Make your choice!"), 10);
    }
    console.log(`You have chosen: ${userInput}`);
    return userInput;
}

/*
 * Generates and returns the computer's choice randomly.
 */
function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`The computer chose: ${computerRandomChoice}`);
    return computerRandomChoice;
}

/*
 * Determines the winner of the round by setting playerWin or computerWin.
 */
function determineRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return; // undefined, no change, equality
    } else if (playerChoice === 1 && computerChoice === 3) {
        playerWin = true;
    } else if (playerChoice === 2 && computerChoice === 1) {
        playerWin = true;
    } else if (playerChoice === 3 && computerChoice === 2) {
        playerWin = true;
    } else {
        computerWin = true;
    }
}

/*
 * Displays the result of the round based on the winner.
 */
function displayRoundResult(playerChoice, computerChoice) {
    if (playerWin === true && computerWin === false) {
        console.log(
            `You win! ${GAME_CHOICES[playerChoice]} beats ` +
            `${GAME_CHOICES[computerChoice]}`
        );
    } else if (playerWin === false && computerWin === true) {
        console.log(
            `The computer wins! ${GAME_CHOICES[computerChoice]} beats ` +
            `${GAME_CHOICES[playerChoice]}`
        );
    } else {
        console.log(`It's a tie! Both chose ${GAME_CHOICES[playerChoice]}`);
    }
}

/*
 * Checks the end condition of the game.
 * Returns "player wins", "computer wins", "limit reached", or "continue".
 */
function checkEndCondition(humanScore, computerScore, numberOfRounds) {
    if (humanScore === 3) {
        return "player wins";
    } else if (computerScore === 3) {
        return "computer wins";
    } else if (numberOfRounds === MAX_ROUNDS) {
        return "limit reached";
    }
    return "continue";
}

/*
 * Displays the final game state message.
 */
function displayEndCondition(gameState) {
    switch (gameState) {
        case "player wins":
            console.log("You have won the game!");
            break;
        case "computer wins":
            console.log("The computer has won the game!");
            break;
        case "limit reached":
            console.log(
                "The maximum number of rounds has been reached, game over."
            );
            break;
        case "continue":
            console.log("The game continues!");
            break;
        default:
            console.log("Unknown state, please check the program.");
    }
}

/*
 * Plays a single round of the game:
 * Resets win indicators, gets choices, determines the winner, 
 * and displays the round result.
 */
function playRound() {
    playerWin = false;
    computerWin = false;
    playerChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    determineRoundWinner(playerChoice, computerChoice);
    displayRoundResult(playerChoice, computerChoice);
}

/*
 * Manages the game loop:
 * Continues playing rounds until the game end condition is met,
 * updates scores, and displays the final game state.
 */
function playGame() {
    while (
        checkEndCondition(humanScore, computerScore, numberOfRounds) 
        === "continue"
    ) {
        playRound();
        numberOfRounds += 1;
        if (playerWin === true) {
            humanScore += 1;
        } else if (computerWin === true) {
            computerScore += 1;
        }
        console.log(
            `Your score: ${humanScore}, Computer score: ${computerScore}`
        );
    }
    gameState = checkEndCondition(humanScore, computerScore, numberOfRounds);
    displayEndCondition(gameState);
}

// Start the game
playGame();
```

---
## Contact

- **GitHub:** https://github.com/think-efficient
- **Email:** securecyberlink@protonmail.com