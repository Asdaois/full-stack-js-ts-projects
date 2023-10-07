import createGameboard  from "./createGameboard";

export default function createPlayer(name = "Player", isComputer = false) {
  const gameboard = createGameboard();
  const automaticFire = createAutomaticFire();
  const oldPlays = [];
  function createAutomaticFire() {
    const plays = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        plays.push({ x: i, y: j });
      }
    }

    return plays.sort(() => Math.random() - 0.5);
  }

  function playTurn(attackCord = { x: 0, y: 0 }, enemyGameboard) {
    let isValidPlay = true;

    oldPlays.forEach((coord) => {
      if (coord.x === attackCord.x && coord.y === attackCord.y) {
        isValidPlay = false;
      }
    });
    if (!isComputer) {
      enemyGameboard.receiveAttack(attackCord);
    } else {
      enemyGameboard.receiveAttack(automaticFire.pop());
    }
    if (isValidPlay) {
      oldPlays.push(attackCord);
      return true;
    } else {
      return false;
    }
  }

  function getGameboard() {
    return gameboard;
  }
  return { playTurn, getGameboard };
}
