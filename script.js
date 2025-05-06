

function getComputerChoice() {
    //Let us consider three numbers: zero(0), one(1) and two(2) such that
    // 0 represents "Roch", 1 "Paper" and 2 represents "Scissors"

    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0) {
        return 'ROCK';
    }
    else if(randomNumber == 1) {
        return 'PAPER';
    }
    else{
        return 'SCISSORS';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Rock or Paper or Scissors?');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toUpperCase();

    if(computerChoice === humanChoice) {
        console.log(`Ex aequo, you choice both ${humanChoice}`);
        return 0;
    }
    else if(computerChoice === 'ROCK' && humanChoice === 'PAPER') {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1
    }
    else if(computerChoice === 'ROCK' && humanChoice === 'SCISSORS') {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    else if(computerChoice === 'PAPER' && humanChoice === 'ROCK') {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
    else if(computerChoice === 'PAPER' && humanChoice === 'SCISSORS') {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1
    }
    else if(computerChoice === 'SCISSORS' && humanChoice === 'ROCK') {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return 1
    }
    else if(computerChoice === 'SCISSORS' && humanChoice === 'PAPER') {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        return -1;
    }
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let winLoseValue = playRound(humanSelection, computerSelection);

        if(winLoseValue == 1) {
            humanScore++;
        }
        else if(winLoseValue == -1) {
            computerScore++;
        }
        else {
            //nothing to do
        }
    }

    console.log(`GAME IS OVER
        final score:
            YOU : ${humanScore}
            COMPUTER : ${computerScore}`);


    if(humanScore > computerScore) {
        console.log('YOU WIN');
    }
    else if(humanScore < computerScore) {
        console.log('YOU LOSE');
    }
    else {
        console.log('EX AEQUO');
    }

}

playGame();




