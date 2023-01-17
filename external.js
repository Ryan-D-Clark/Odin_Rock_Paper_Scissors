let computerScore = 0;
let playerScore = 0;

let playerChoice;
let computerChoice;

let matchStatus = "";

document.getElementById("player-score").innerHTML = 0
document.getElementById("computer-score").innerHTML = 0

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
    playerChoice = button.id
    playRound(playerChoice)
    })
})

function getComputerChoice(){
    let = optionsArray = ["Rock", "Paper", "Scissors"];
    let randomValue = Math.floor(Math.random()*optionsArray.length);
    let computerChoice = optionsArray[randomValue];
    return computerChoice;
}



function playRound(player){

    let computer = getComputerChoice().toLowerCase();

    if (player === computer){
        console.log('Tie!', player, computer);
        matchStatus = "Computer picked " + computer + ", it was a draw!"
    }
    else if (player === "rock"){
        if (computer === "scissors"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            matchStatus = "Computer picked " + computer + ", you won that round!"
            playerScore +=1;
        }
        if (computer === "paper"){
            console.log("You lose!", 'Player picked:', player, 'Computer picked:', computer);
            matchStatus = "Computer picked " + computer + ", you lost that round!"
            computerScore +=1;
        }
    }
    else if (player === "paper"){
        if (computer === "rock"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            matchStatus = "Computer picked " + computer + ", you won that round!"
            playerScore +=1;
        }
        if (computer === "scissors"){
            console.log("You lose!", 'Player picked:', player, 'Computer picked:', computer);
            matchStatus = "Computer picked " + computer + ", you lost that round!"
            computerScore +=1;
        }
    }
    else if (player === "scissors"){
        if (computer === "paper"){
            console.log('You win!', 'Player picked:', player, 'Computer picked:', computer);
            matchStatus = "Computer picked " + computer + ", you won that round!"
            playerScore +=1;
        }
        if (computer === "rock"){
            console.log("You lose!", 'Player picked:', player,  'Computer picked:',computer);
            matchStatus = "Computer picked " + computer + ", you lost that round!"
            computerScore +=1;
        }
    }

    console.log("Player Score:" , playerScore, 'Computer Score:', computerScore,)


    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("computer-score").innerHTML = computerScore
    document.getElementById("status").innerHTML = matchStatus

    if(playerScore == 5 || computerScore == 5){
        endGame()
    }

}

function endGame(){
    playerScore == 5 ? document.getElementById("status").innerHTML = "Player Won!" : document.getElementById("status").innerHTML = "Computer Won!"
    computerScore = 0
    playerScore = 0
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("computer-score").innerHTML = computerScore
}




