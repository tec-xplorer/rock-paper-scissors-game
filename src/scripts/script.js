const MAX_ROUNDS = 5;
const GAME_CHOICES = {1: "Pierre", 2: "Papier", 3: "Ciseaux"};
let playerChoice = "";
let computerChoice = "";
let playerWin = false;
let computerWin = false;
let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

function displayChoices() {
    console.log("Choisissez une option :");
    for (let key in GAME_CHOICES) {
        console.log(`${key} pour ${GAME_CHOICES[key]}`);
    }
}

function getHumanChoice() {
    displayChoices();
    let userInput = parseInt(prompt("Faites votre choix !"), 10);
    while(userInput !== 1 && userInput !== 2 && userInput !== 3 ) {
        console.log("Entrée invalide. Veuillez saisir 1, 2 ou 3.");
        userInput = parseInt(prompt("Faites votre choix !"), 10);
    }
    console.log(`Vous avez choisi: ${userInput}`);
    return userInput;
}

function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`L'ordinateur a choisi: ${computerRandomChoice}`);
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

function displayRoundResult (playerChoice, computerChoice) {
    if (playerWin === true && computerWin === false) {
        console.log(`Vous gagnez ! ${GAME_CHOICES[playerChoice]} bat ${GAME_CHOICES[computerChoice]}`);
    } else if (playerWin == false && computerWin == true) {
        console.log(`L'ordinateur gagne ! ${GAME_CHOICES[computerChoice]} bat ${GAME_CHOICES[playerChoice]}`);
    } else {
        console.log(`C'est une égalité ! Vous avez tous deux choisi ${GAME_CHOICES[playerChoice]}`);
    }
}

function checkEndCondition(humanScore, computerScore, numberOfRounds) {
    if (humanScore === 3) {
        return "joueur gagne";
    } else if (computerScore === 3) {
        return "ordinateur gagne";
    } else if (numberOfRounds === MAX_ROUNDS) {
        return "limite atteinte";
    }
    return "continuer";
}

function displayEndCondition(gameState) {
    switch (gameState) {
        case "joueur gagne":
            console.log("Vous avez gagné la partie !");
            break;
        case "ordinateur gagne":
            console.log("L'ordinateur a gagné la partie !");
            break;
        case "limite atteinte":
            console.log("La limite des tours a été atteinte, fin de la partie.");
            break;
        case "continuer":
            console.log("La partie continue !");
            break;
        default:
            console.log("État inconnu, veuillez vérifier le programme.");
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
    while (checkEndCondition(humanScore, computerScore, numberOfRounds) === "continuer") {
        playRound();
        numberOfRounds += 1;
        if (playerWin === true) {
            humanScore += 1;
        } else if (computerWin === true) {
            computerScore += 1;
        }
        console.log(`Votre score : ${humanScore}, le score de l'ordinateur : ${computerScore}`)
    }
    gameState = checkEndCondition(humanScore, computerScore, numberOfRounds);
    displayEndCondition(gameState);
}