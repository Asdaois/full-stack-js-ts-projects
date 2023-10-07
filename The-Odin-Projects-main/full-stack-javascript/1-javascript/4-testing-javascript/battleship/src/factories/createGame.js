export default function createGame() {
  let turnPlayer1 = true;

  function changeTurn() {
    turnPlayer1 ? (turnPlayer1 = false) : (turnPlayer1 = true);
  }

  function isTurn1() {
    return turnPlayer1;
  }

  function loop() {}
  return { loop, changeTurn, isTurn1 };
}
