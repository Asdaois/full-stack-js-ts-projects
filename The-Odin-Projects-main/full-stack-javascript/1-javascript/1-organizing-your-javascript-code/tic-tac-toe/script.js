const createPlayer = (playerId, symbol) => {
  const player = document.getElementById(playerId);
  const name = player.querySelector(`#${playerId}-name`);
  name.disabled = true;
  const activeTurn = () => {
    player.classList.add("active");
  };
  const desactiveTurn = () => {
    player.classList.remove("active");
  };
  return { name: name.value, symbol, activeTurn, desactiveTurn };
};
const createDisplay = (id) => {
  const displayWinner = document.getElementById(id);
  const classActive = "active-winner-display";
  const active = () => {
    displayWinner.classList.add(classActive);
  };
  const desactive = () => {
    displayWinner.classList.remove(classActive);
  };
  const selectWinner = (winner) => {
    const displayPiece = displayWinner.querySelector("div.d-piece");
    const winnerMessage = displayWinner.querySelector("#winner-message > h3");
    const tie = "xo";
    active();
    if (winner == "tie") {
      winnerMessage.textContent = "Tie";
      displayPiece.classList.remove("x", "o");
      displayPiece.classList.add(tie);
    } else {
      displayPiece.classList.remove(tie);
      displayPiece.classList.add(winner.symbol);
      winnerMessage.textContent = winner.name;
      console.log(winner);
    }
  };
  return { active, desactive, selectWinner };
};
const Game = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];
  const startButton = document.getElementById("start-button");
  const resetButton = document.getElementById("reset-button");
  const displayWinner = createDisplay("display-winner");
  let gameIsActive = false;
  let turn = "x";
  let winner = null;
  let player1;
  let player2;
  const initGame = () => {
    if (!gameIsActive) {
      displayWinner.desactive();
      player1 = createPlayer("player1", "x");
      player2 = createPlayer("player2", "o");
      player1.activeTurn();
      gameIsActive = true;
      resetGame();
    }
    console.log({ gameIsActive });
  };

  startButton.addEventListener("click", initGame);
  const checkWinner = () => {
    //x
    if (gameboard[0] == turn && gameboard[4] == turn && gameboard[8] == turn) {
      return turn;
    }
    //x inverse
    if (gameboard[2] == turn && gameboard[4] == turn && gameboard[6] == turn) {
      return turn;
    }
    //row

    for (let i = 0; i < 3; i++) {
      let j = i * 3;
      if (
        gameboard[j] == turn &&
        gameboard[j + 1] == turn &&
        gameboard[j + 2] == turn
      ) {
        return turn;
      }
    }

    //col
    for (let i = 0; i < 3; i++) {
      if (
        gameboard[i] == turn &&
        gameboard[i + 3] == turn &&
        gameboard[i + 6] == turn
      ) {
        return turn;
      }
    }
    let hasMovements = gameboard.some((piece) => {
      if (piece == "") return true;
    });
    if (!hasMovements) {
      return "tie";
    }
    return null;
  };

  const doPlay = (piece, i) => {
    if (winner == null) {
      switch (turn) {
        case "x":
          if (gameboard[i] == "") {
            gameboard[i] = "x";
            piece.classList.add("x");
            winner = checkWinner();
            player1.desactiveTurn();
            player2.activeTurn();
            turn = "o";
          }
          break;
        case "o":
          if (gameboard[i] == "") {
            gameboard[i] = "o";
            piece.classList.add("o");
            player1.activeTurn();
            player2.desactiveTurn();
            winner = checkWinner();
            turn = "x";
          }
          break;
      }
    }
    if (winner) {
      gameIsActive = false;
      switch (winner) {
        case "x":
          displayWinner.selectWinner(player1);
          break;
        case "o":
          displayWinner.selectWinner(player2);
          break;
        case "tie":
          displayWinner.selectWinner(winner);
          break;
      }
    }
  };
  const resetGame = () => {
    const pieces = document.querySelectorAll(".pieces");
    pieces.forEach((piece) => {
      piece.classList.remove("x", "o");
    });
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = "";
    }
    winner = null;
  };
  const linkGameboard = (() => {
    const pieces = document.querySelectorAll(".pieces");
    pieces.forEach((piece, i) => {
      piece.addEventListener("click", () => {
        if (gameIsActive) doPlay(piece, i);
      });
    });
  })();
  resetButton.addEventListener("click", resetGame);
  return {
    initGame,
  };
})();
