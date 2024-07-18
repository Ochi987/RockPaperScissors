let humanScore = 0;
let computerScore = 0;

function getComputerChoice()    {
    let randNum = parseInt(Math.random()*3);
    if(randNum === 0)   {
        return "rock";
    }
    else if(randNum === 1)  {
        return "paper";
    }
    else    {
        return "scissors";
    }
}

function getHumanChoice()   {
    let choice = prompt("choose rock, paper, or scissors");
    choice = choice.toLowerCase();
    while(true) {
        if(choice === "rock") return choice;
    
        else if(choice === "paper") return choice;

        else if(choice === "scissors") return choice;

        else    {
            alert("bad input please try again");
            choice = prompt("choose rock, paper, or scissors");
        }
    }   
}


function playRound(humanChoice, computerChoice)    {
    if(humanChoice === computerChoice)  {
        return "Draw, you both picked the same thing";
    }
    else if(humanChoice === "rock")  {
        if(computerChoice === "paper")  {
            computerScore++;
            return "You lose, Paper beats Rock";
        }
        else    {
            humanScore++;
            return "You win, Rock beats Scissors"
        }
    }
    else if(humanChoice === "paper")  {
        if(computerChoice === "rock")  {
            return "You win, Paper beats Rock";
            humanScore++;
        }
        else    {
            computerScore++;
            return "You lose, Scissors beats Paper"
        }
    }
    else  {
        if(computerChoice === "rock")  {
            computerScore++;
            return "You lose, Rock beats Scissors";
        }
        else    {
            humanScore++;
            return "You win, Scissors beats Paper"
        }
    }
}

function playGame() {
    for(let i=0; i<5; i++)  {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
    }
    if(humanScore > computerScore)  {
        alert(`Congrats, you win: ${humanScore} - ${computerScore}`);
    }
    else if(humanScore === computerScore)   {
        alert(`It's a tie: ${humanScore} - ${computerScore}`)
    }
    else {
        alert(`You lose: ${computerScore} - ${humanScore}`);
    }
}

playGame();
