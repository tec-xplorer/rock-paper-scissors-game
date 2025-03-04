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
    console.log(`Vous avez choisi: ${userInput}`)
    return userInput;
}

getHumanChoice();