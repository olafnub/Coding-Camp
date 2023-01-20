// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
// welcome player to RPS!
// Let player know the rules
// let player choose rock, paper, or scissors
// Compare players choice to computer's choice
// Tally the score

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);

    return rps[randomNumber];

}

function userChoice() {
    let rps = prompt("Rock, Paper, Or Scissors");

    return rps;
}

let user = userChoice();
let computerScore = 0;
let userScore = 0;
let ties = 0;

function compareTwo(computer, user) {
    let computerLower = computer.toLowerCase();
    let userLower = user.toLowerCase();

    if (computerLower == "scissors" && userLower == "paper") {
        computerScore++;
        return user + " lost to computer";
    } else if (computerLower == "rock" && userLower == "scissors") {
        computerScore++;
        return user + " lost to computer";
    } else if (computerLower == "paper" && userLower == "rock") {
        computerScore++;
        return user + " lost to computer";
    } else if (userLower == "scissors" && computerLower == "paper") {
        userScore++;
        return user + " has won against computer";
    } else if (userLower == "rock" && computerLower == "scissors") {
        userScore++;
        return user + " has won against computer";
    } else if (userLower == "paper" && computerLower == "rock") {
        userScore++;
        return user + " has won against computer";
    } else {
        ties++;
        return user + " has drawn with computer";

    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        compareTwo(computer, user);
    }
    return "computerscore: " + computerScore + "\nyourscore: " + userScore +"\nties: " + ties;
}

function maxMin(max, min) {
    return Math.floor(Math.random() * (max-min+1))+min;
}
console.log(game());