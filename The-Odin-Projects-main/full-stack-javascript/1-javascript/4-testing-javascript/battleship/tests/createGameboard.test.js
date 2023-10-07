import createGameboard from "../src/factories/createGameboard";

const { test, expect } = require("@jest/globals");

test("correct creation of ships", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  expect(JSON.parse(JSON.stringify(gameboard.getShips()))).toEqual([
    [
      { x: 1, y: 1, damaged: false },
      { x: 2, y: 1, damaged: false },
      { x: 3, y: 1, damaged: false },
      { x: 4, y: 1, damaged: false },
      { x: 5, y: 1, damaged: false },
    ],
    [
      { x: 0, y: 1, damaged: false },
      { x: 0, y: 2, damaged: false },
    ],
  ]);
});

test("Place two ship whitout interference", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  expect(gameboard.placeShip(2, { x: 0, y: 1 }, false)).toEqual("PASS");
});

test("Place two ship whit interference", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  expect(gameboard.placeShip(2, { x: 0, y: 1 }, true)).toEqual("ERROR");
});

test("Attack a ship and hit", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  expect(gameboard.receiveAttack({ x: 0, y: 1 })).toBe(true);
});

test("Attack a ship and fail", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  expect(gameboard.receiveAttack({ x: 10, y: 1 })).toBe(false);
});

test("get fail shots received", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(5, { x: 1, y: 1 }, true);
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  gameboard.receiveAttack({ x: 10, y: 1 });
  gameboard.receiveAttack({ x: 10, y: 3 });
  gameboard.receiveAttack({ x: 8, y: 1 });
  gameboard.receiveAttack({ x: 10, y: 2 });

  expect(gameboard.getMissedShots()).toEqual([
    { x: 10, y: 1 },
    { x: 10, y: 3 },
    { x: 8, y: 1 },
    { x: 10, y: 2 },
  ]);
});

test("All ships are sunk", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  gameboard.placeShip(2, { x: 1, y: 1 }, false);

  gameboard.receiveAttack({ x: 0, y: 1 });
  gameboard.receiveAttack({ x: 0, y: 2 });
  gameboard.receiveAttack({ x: 1, y: 1 });
  gameboard.receiveAttack({ x: 1, y: 2 });

  expect(gameboard.allShipsSunks()).toEqual(true);
});

test("All ships are not sunk", () => {
  const gameboard = createGameboard();
  gameboard.placeShip(2, { x: 0, y: 1 }, false);
  gameboard.placeShip(2, { x: 1, y: 1 }, false);

  gameboard.receiveAttack({ x: 0, y: 1 });
  gameboard.receiveAttack({ x: 0, y: 2 });
  gameboard.receiveAttack({ x: 1, y: 1 });
  gameboard.receiveAttack({ x: 1, y: 3 });

  expect(gameboard.allShipsSunks()).toEqual(false);
});
