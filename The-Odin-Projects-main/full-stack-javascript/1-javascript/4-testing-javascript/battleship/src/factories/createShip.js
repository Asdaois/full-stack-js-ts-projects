export default function createShip(
  length = 0,
  initCord = { x: 0, y: 0 },
  direction = true,
) {
  const shipHitReference = initHitReferenceArray();

  function createReference() {
    const referenceArray = [];
    for (let index = 0; index < length; index++) {
      const coord = {
        x: initCord.x + (direction ? index : null),
        y: initCord.y + (direction ? null : index),
        damaged: false,
      };
      referenceArray.push(coord);
    }
    return referenceArray;
  }

  function canCreateShip() {
    let canCreate = true;
    shipHitReference.forEach((coord) => {
      if (coord.x >= 10 || coord.y >= 10) {
        canCreate = false;
      }
    });
    return canCreate;
  }

  function initHitReferenceArray() {
    return createReference();
  }

  function hit(cord = { x: 0, y: 0 }) {
    let isHit = false;
    let hitIndex = 0;
    shipHitReference.forEach((hitCord, index) => {
      if (hitCord.x === cord.x && hitCord.y === cord.y) {
        isHit = true;
        hitIndex = index;
      }
    });
    if (isHit) {
      shipHitReference[hitIndex].damaged = true;
    }
    return shipHitReference[hitIndex].damaged;
  }

  function isSunk() {
    return shipHitReference.every((hit) => {
      return hit.damaged;
    });
  }

  function getShipReference() {
    return [...shipHitReference];
  }
  return { hit, isSunk, getShipReference, canCreateShip };
}
