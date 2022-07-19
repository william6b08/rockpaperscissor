let player_score = 0;
let computer_score = 0;
const result_Area = document.querySelector('.result');
const annoucement_Area = document.querySelector('.annoucement');
const player_Score_Area = document.querySelector('.player-score');
const computer_Score_Area = document.querySelector('.computer-score');
const rps_btns = document.querySelectorAll('button[name]');
const reset_btn = document.querySelector('.restart');

function computerPlay() { //this run when playRound(e) get called, to get computer's option.
  const listOfOutcome = ["rock", "paper", "scissors"];
  return listOfOutcome[Math.floor(Math.random()* listOfOutcome.length)];
}

function restartGame() {
  player_score = 0;
  computer_score = 0;
  annoucement_Area.innerText ='';
}

function updateResult(){
  if (player_score < 5 && computer_score < 5)
  {
    player_Score_Area.innerText = `Player score: ${player_score}`;
    computer_Score_Area.innerText = `Computer score: ${computer_score}`;
  }
  else {
    player_Score_Area.innerText = `Player score: ${player_score}`;
    computer_Score_Area.innerText = `Computer score: ${computer_score}`;

    if (computer_score >  player_score)
  {
    annoucement_Area.innerText = `Computer has defeated you by ${computer_score - player_score} points`;
  }

  else {annoucement_Area.innerText = `You have defeated computer by ${player_score - computer_score} points`;
}

  }
}

function playRound(e) //this take (e) event as parameter
{
  const playerSelection = e.target.name;
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) return;

  else
  {
    if (playerSelection === "rock" && computerSelection ==="paper")
    {
      computer_score ++;
    }

    else if (playerSelection === "rock" && computerSelection ==="scissors")
    {

      player_score ++;

    }

    else if (playerSelection === "paper" && computerSelection ==="rock")
    {

      player_score ++;

    }

    else if (playerSelection === "paper" && computerSelection ==="scissors")
    {
      computer_score ++;
    }

    if (playerSelection === "scissors" && computerSelection ==="rock")
    {
      computer_score ++;
    }

    else if (playerSelection === "scissors" && computerSelection ==="paper")
    {
      player_score ++;
    }
  }
}

rps_btns.forEach((btn) => btn.addEventListener('click', updateResult));
rps_btns.forEach((btn) => btn.addEventListener('click', playRound));
reset_btn.addEventListener('click', restartGame);
reset_btn.addEventListener('click', updateResult);





