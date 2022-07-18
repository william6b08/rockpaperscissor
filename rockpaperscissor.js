
const output_Area = document.querySelector('.result');
let player_Choice = '';
function computerPlay() {
  const listOfOutcome = ["rock", "paper", "scissors"];
  return listOfOutcome[Math.floor(Math.random()* listOfOutcome.length)];
}

function rock_playRound()
{
  const playerSelection = 'rock';

  const computerSelection = computerPlay();

  if (playerSelection === computerSelection)
  {
    output_Area.innerText = "You and computer both selected " + playerSelection+ ". That is a draw.";
  }

  else
  {
    if (playerSelection === "rock" && computerSelection ==="paper")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You lose! Paper beats rock.";

    }

    else if (playerSelection === "rock" && computerSelection ==="scissors")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You win! Rock beats scissors.";

    }
  }
}

function paper_playRound()
{
  const playerSelection = 'paper';

  const computerSelection = computerPlay();

  if (playerSelection === computerSelection)
  {
    output_Area.innerText = "You and computer both selected " + playerSelection+ ". That is a draw.";
  }

  else 
  {
    if (playerSelection === "paper" && computerSelection ==="rock")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You win! Paper beats rock.";

    }

    else if (playerSelection === "paper" && computerSelection ==="scissors")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You lose! scissors beat paper.";

    }
  }
}

function scissors_playRound()
{
  const playerSelection = 'scissors';

  const computerSelection = computerPlay();

  if (playerSelection === computerSelection)
  {
    output_Area.innerText = "You and computer both selected " + playerSelection+ ". That is a draw.";
  }

  else
  {

    if (playerSelection === "scissors" && computerSelection ==="rock")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You lose! scissors beat rock.";

    }

    else if (playerSelection === "scissors" && computerSelection ==="paper")
    {
      output_Area.innerText = `Computer chose ${computerSelection}.`;
      output_Area.innerText += "You win! scissors beats paper.";
    }
  }
}


function game() 
{
  console.clear();
  let playerScore = 0;
  let computerScore = 0;
  let choice = prompt("choose Rock, Paper or Scissors...");
  const playerChoice = choice.toLowerCase();
  console.log(playerChoice);

  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
  {
      let result = playRound(playerChoice, computerPlay());
      if (result == false) {
        computerScore += 1;
      }
      else {
        playerScore += 1;
      }
    
    console.log(`PlayerScore is ${playerScore} and ComputerScore is ${computerScore}`);

    if (playerScore < computerScore)
    {
      console.log(`Computer beated you by ${computerScore - playerScore} rounds`);
    }

    else if (playerScore > computerScore)
    {
      console.log(`You beated computer by ${playerScore - computerScore} rounds`);
    }

    else if (playerScore == computerScore)
    {
      console.log("Nobody win!");
    }
  }
  else {
    alert("Invalid input!!");
    game();
  }
}



const rock_btn = document.querySelector('#rock_btn');
const paper_btn = document.querySelector('#paper_btn');
const scissors_btn = document.querySelector('#scissors_btn');

rock_btn.addEventListener('click', rock_playRound);
paper_btn.addEventListener('click', paper_playRound);
scissors_btn.addEventListener('click', scissors_playRound);




