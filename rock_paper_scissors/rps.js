// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
// welcome player to RPS!
// Let player know the rules
// let player choose rock, paper, or scissors
// Compare players choice to computer's choice
// Tally the score

let computerChoice = "";
let choicesFrom = [];

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3);

    computerChoice = rps[randomNumber];
    choicesFrom.push(computerChoice);

}

let btn = document.querySelectorAll('button');

let user = "";

Array.from(btn).forEach(button => {
    let element = button.value;
    button.addEventListener('click', () => {
        user = element;
        choicesFrom.push(element)
        console.log(game());
        gameOutput();
    });
});

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
    getComputerChoice();
    compareTwo(computerChoice, user);

    if (computerScore >= 5) {
        alert("computer wins!");
        window.location.reload();
        
    } else if (userScore >= 5){
        alert("You win!");    
        window.location.reload();    
    }

    return "computerscore: " + computerScore + "\nyourscore: " + userScore +"\nties: " + ties;
}

function maxMin(max, min) {
    return Math.floor(Math.random() * (max-min+1))+min;
}

let rtn = document.querySelector('#return');
let para = "";
let txt = "";

function gameOutput() {
    choicesFrom.forEach(choice => {
        para = document.createElement('p');
        if (choice == user) {
            txt = document.createTextNode(`Your Choice: ${choice}`);
        } else {
            txt = document.createTextNode(`Computer Choice: ${choice}`);
        }
        para.appendChild(txt);
        rtn.appendChild(para);
        choicesFrom = [];
    })

}
