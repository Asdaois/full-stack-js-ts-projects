const plays = ["rock", "paper", "scissors"];
function getComputerPlay() {
  let randomPlay = getRandomInt(plays.length);
  return plays[randomPlay];
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let computerWinTimes = 0;
let playerWinTimes = 0;
const countPlayer = document.querySelector("#count-player");
const countEnemy = document.querySelector("#count-enemy");
function updateScore() {
  countPlayer.textContent = playerWinTimes;
  countEnemy.textContent = computerWinTimes;
}

const UIMessages = document.getElementById("UI-messages");
const messageElement = UIMessages.querySelector("#mes-1");
messageElement.addEventListener("animationend", (e) => {
  if (e.animationName == "changeName") {
    messageElement.classList.remove("animationChange");
  }
});
function changeMessageOne(message) {
  messageElement.textContent = message;
}
function playRound(_playerMove) {
  let playerMove = _playerMove;
  let computerMove = getComputerPlay();
  let winner = "draw";
  if (playerMove != "error") {
    if (playerMove == "rock" && computerMove == "paper") {
      winner = "computer";
    }
    if (playerMove == "rock" && computerMove == "scissors") {
      winner = "player";
    }
    if (playerMove == "scissors" && computerMove == "paper") {
      winner = "player";
    }
    if (playerMove == "scissors" && computerMove == "rock") {
      winner = "computer";
    }
    if (playerMove == "paper" && computerMove == "rock") {
      winner = "player";
    }
    if (playerMove == "paper" && computerMove == "scissors") {
      winner = "computer";
    }
  } else {
    winner = "error";
  }
  let message = "";
  let color = "black";
  switch (winner) {
    case "draw":
      message = "It is a draw, trying again comon you can";
      color = "green";
      break;
    case "computer":
      message = winComputer(playerMove, computerMove);
      color = "red";
      computerWinTimes++;
      break;
    case "player":
      message = winPlayer(playerMove, computerMove);
      color = "blue";
      playerWinTimes++;
      break;
    case "error":
      message = "Player does not know the game, have issues";
      break;
  }
  changeMessageOne(message);
  messageElement.style.color = color;
  messageElement.classList.add("animationChange");
  let message2 = UIMessages.querySelector("#mes-2");
  message2.textContent = "Contine playing";
  updateScore();
  if (playerWinTimes == 5) {
    message = "You Win, congratulatios by you great ability";
    message2.textContent = "Wanna play again?";
    changeMessageOne(message);
    resetScore();
  } else if (computerWinTimes == 5) {
    message = "You lose, sorry kido best luck the next time";
    message2.textContent = "Wanna play again?";
    resetScore();
  }
}
function winPlayer(playerMove, computerMove) {
  let message = `You win, ${playerMove} beats ${computerMove}`;
  return message;
}
function winComputer(playerMove, computerMove) {
  let message = `You lose, ${computerMove} beats ${playerMove}`;
  return message;
}
function resetScore() {
  playerWinTimes = 0;
  computerWinTimes = 0;
  updateScore();
}
const playerButtons = document
  .getElementById("player")
  .querySelectorAll(".played-img");
playerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(button.id);
  });
});
