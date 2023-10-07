import createShip from './createShip';

export default function createGameboard() {
  const shipArray = [];
  const missedShots = [];

  function isOverposition(newShip) {
    const shipsPosition = getShips();
    const shipCoordReference = newShip.getShipReference();
    let overposition = false;

    shipsPosition.forEach((ships) => {
      ships.forEach((coord) => {
        shipCoordReference.forEach((shipCoord) => {
          if (shipCoord.x === coord.x && shipCoord.y === coord.y) {
            overposition = true;
          }
        });
      });
    });

    return overposition;
  }

  function placeShip(length, coord, direction) {
    const ship = createShip(length, coord, direction);

    if (isOverposition(ship) || !ship.canCreateShip()) {
      return false;
    } else {
      shipArray.push(ship);
      return true;
    }
  }

  function getShips() {
    const shipsReference = [];
    shipArray.forEach((ship) => {
      shipsReference.push(ship.getShipReference());
    });
    return [...shipsReference];
  }

  function receiveAttack(coord = { x: 0, y: 0 }) {
    let isAttackSuccefulll = false;

    const checkCoords = (hitsCoord) => {
      if (hitsCoord.x === coord.x && hitsCoord.y === coord.y) {
        return true;
      }
    };

    if (!missedShots.some(checkCoords)) {
      shipArray.forEach((ship) => {
        if (ship.hit(coord)) {
          isAttackSuccefulll = true;
        }
      });
    }
    if (isAttackSuccefulll) {
      return true;
    } else {
      missedShots.push(coord);
      return false;
    }
  }

  function getMissedShots() {
    return [...missedShots];
  }

  function allShipsSunks() {
    let allShipsSunks = true;
    shipArray.forEach((currentShip) => {
      if (!currentShip.isSunk()) {
        allShipsSunks = false;
      }
    });

    return allShipsSunks;
  }

  return { placeShip, getShips, receiveAttack, getMissedShots, allShipsSunks };
}
