let options = ["rock","scissors","paper"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(10*Math.random())%3;
    return choice;
}

function getHumanChoice() {
    let user = prompt("Enter rock, paper or scissors: ");
    return user.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let human = options.indexOf(humanChoice);
    let result = human - computerChoice;
    if (result == 0) {
        console.log("It's a tie!");
    } else if (result == 2 || result == -2) {
        if (human == 2) {
            humanScore += 1;
            console.log("You won, paper beats rock.");
        }
        else {
            computerScore += 1;
            console.log("You lost, paper beats rock.");
        }
    } else {
        if (human > computerChoice) {
            computerScore += 1;
            console.log("You lost, " + humanChoice + " beats " + options[computerChoice] + ".");
        }
        else {
            humanScore += 1;
            console.log("You won, " + humanChoice + " beats " + options[computerChoice] + ".");
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("You: " + humanScore + ", Computer: " + computerScore);
}

playGame();