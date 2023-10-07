import createShip from "../src/factories/createShip";

describe("ship test", () => {
  test("hit array is create succefuly in x", () => {
    const ship = createShip(3, { x: 0, y: 2 }, true);

    expect(ship.getShipReference()).toEqual([
      { x: 0, y: 2, damaged: false },
      { x: 1, y: 2, damaged: false },
      { x: 2, y: 2, damaged: false },
    ]);
  });

  test("hit array is create succefuly in y", () => {
    const ship = createShip(3, { x: 0, y: 2 }, false);
    expect(ship.getShipReference()).toEqual([
      { x: 0, y: 2, damaged: false },
      { x: 0, y: 3, damaged: false },
      { x: 0, y: 4, damaged: false },
    ]);
  });

  test("is Hit", () => {
    const ship = createShip(3, { x: 4, y: 2 }, false);
    const hitCoord = { x: 4, y: 4 };
    expect(ship.hit(hitCoord)).toBe(true);
  });

  test("is not Hit", () => {
    const ship = createShip(3, { x: 4, y: 2 }, true);
    const hitCoord = { x: 4, y: 4 };
    expect(ship.hit(hitCoord)).toBe(false);
  });

  test("sunk with 2 Hit", () => {
    const ship = createShip(2, { x: 4, y: 2 }, true);
    ship.hit({ x: 4, y: 2 });
    ship.hit({ x: 5, y: 2 });
    expect(ship.isSunk()).toBe(true);
  });

  test("miss one hit to sunk", () => {
    const ship = createShip(2, { x: 4, y: 2 }, true);
    ship.hit({ x: 4, y: 2 });
    ship.hit({ x: 3, y: 2 });
    expect(ship.isSunk()).toBe(false);
  });
});
