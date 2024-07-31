let humanScore = 0;
let computerScore = 0;

let results = document.querySelector(".results");
let score = document.querySelector(".score");


const buttons = document.querySelectorAll("button");

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        playRound(buttons[i].textContent, getComputerChoice())
        playGame();
    });
}


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
    humanChoice = humanChoice.toLowerCase();
    console.log(computerChoice);
    if(humanChoice === computerChoice)  {
        results.textContent = "Draw, you both picked the same thing";
    }
    else if(humanChoice === "rock")  {
        if(computerChoice === "paper")  {
            computerScore++;
            results.textContent = "You lose, Paper beats Rock";
        }
        else    {
            humanScore++;
            results.textContent = "You win, Rock beats Scissors"
        }
    }
    else if(humanChoice === "paper")  {
        if(computerChoice === "rock")  {
            results.textContent = "You win, Paper beats Rock";
            humanScore++;
        }
        else    {
            computerScore++;
            results.textContent = "You lose, Scissors beats Paper"
        }
    }
    else  {
        if(computerChoice === "rock")  {
            computerScore++;
            results.textContent = "You lose, Rock beats Scissors";
        }
        else    {
            humanScore++;
            results.textContent = "You win, Scissors beats Paper"
        }
    }
}

function playGame() {
    if(humanScore === 5)  {
        score.textContent = `Congrats, you win: ${humanScore} - ${computerScore}`;
        buttons.forEach(function(button)    {
            button.disabled = true;
        });
        let p = document.createElement("p");
        let div = document.querySelector(".blank");
        let container = document.querySelector(".container");
        p.textContent = "Click the reload button to play again";
        container.insertBefore(p,div);
       
    }
    else if(computerScore === 5) {
        score.textContent = `You lose: ${computerScore} - ${humanScore}`;
    }
    else {
        score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    }
}


