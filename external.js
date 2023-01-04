function getComputerChoice(){
    let = optionsArray = ["Rock", "Paper", "Scissors"];
    let randomValue = Math.floor(Math.random()*optionsArray.length);
    let computerChoice = optionsArray[randomValue];
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, Scissors?");
    return playerChoice;
}

function playRound(){

    let player = getPlayerChoice().toLowerCase();
    let computer = getComputerChoice().toLowerCase();

    if (player === computer){
        console.log('Tie!', player, computer);
    }
    else if (player === "rock"){
        if (computer === "scissors"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            playerScore +=1;
        }
        if (computer === "paper"){
            console.log("You lose!", 'Player picked:', player, 'Computer picked:', computer);
            computerScore +=1;
        }
    }
    else if (player === "paper"){
        if (computer === "rock"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            playerScore +=1;
        }
        if (computer === "scissors"){
            console.log("You lose!", 'Player picked:', player, 'Computer picked:', computer);
            computerScore +=1;
        }
    }
    else if (player === "scissors"){
        if (computer === "paper"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            playerScore +=1;
        }
        if (computer === "rock"){
            console.log("You lose!", 'Player picked:', player,  'Computer picked:',computer);
            computerScore +=1;
        }
    }

    console.log("Player Score:" , playerScore, 'Computer Score:', computerScore,)

}

function startGame(roundsAmount){
    for (let i = 1; i <= roundsAmount; i++){
        playRound()
    }
    console.log("Game Over!")
    console.log("Final Player Score:" , playerScore, 'Final Computer Score:', computerScore,)

}

let computerScore = 0;
let playerScore = 0;

startGame(5)