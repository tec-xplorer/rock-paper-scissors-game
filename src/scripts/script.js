const MAX_ROUNDS = 5;
const GAME_CHOICES = {1: "Rock", 2: "Paper", 3: "Scissors"};
let playerChoice = "";
let computerChoice = "";
let playerWin = false;
let computerWin = false;
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

function displayChoices() {
    console.log("Choose an option:");
    for (let key in GAME_CHOICES) {
        console.log(`${key} for ${GAME_CHOICES[key]}`);
    }
}

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

function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`The computer chose: ${computerRandomChoice}`);
    return computerRandomChoice;
}

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

function displayRoundResult(playerChoice, computerChoice) {
    if (playerWin === true && computerWin === false) {
        console.log(`You win! ${GAME_CHOICES[playerChoice]} beats ${GAME_CHOICES[computerChoice]}`);
    } else if (playerWin === false && computerWin === true) {
        console.log(`The computer wins! ${GAME_CHOICES[computerChoice]} beats ${GAME_CHOICES[playerChoice]}`);
    } else {
        console.log(`It's a tie! Both chose ${GAME_CHOICES[playerChoice]}`);
    }
}

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

function displayEndCondition(gameState) {
    switch (gameState) {
        case "player wins":
            console.log("You have won the game!");
            break;
        case "computer wins":
            console.log("The computer has won the game!");
            break;
        case "limit reached":
            console.log("The maximum number of rounds has been reached, game over.");
            break;
        case "continue":
            console.log("The game continues!");
            break;
        default:
            console.log("Unknown state, please check the program.");
    }
}

function playRound() {
    playerWin = false;
    computerWin = false;
    playerChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    determineRoundWinner(playerChoice, computerChoice);
    displayRoundResult(playerChoice, computerChoice);
}

function playGame() {
    while (checkEndCondition(humanScore, computerScore, numberOfRounds) === "continue") {
        playRound();
        numberOfRounds += 1;
        if (playerWin === true) {
            humanScore += 1;
        } else if (computerWin === true) {
            computerScore += 1;
        }
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    gameState = checkEndCondition(humanScore, computerScore, numberOfRounds);
    displayEndCondition(gameState);
}
playGame();