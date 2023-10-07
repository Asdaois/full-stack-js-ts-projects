import { useState } from 'react';
import createGameboard from '../factories/createGameboard';
import '../styles/Gameboard.css';

const state = { PLACING: 'placing', SHOTING: 'shoting', WAITING: 'waiting' };

export default function Gameboard() {
  const [direction, setDirection] = useState(true);
  const [posibleShip, setPosibleShip] = useState([]);
  let currentState = state.PLACING;
  const gameboard = createGameboard();

  const coords = () => {
    const plays = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        plays.push({ x: i, y: j });
      }
    }
    return [...plays];
  };

  const handleCellClick = (e) => {
    console.log(e.target.dataset.x, e.target.dataset.y);
    switch (currentState) {
      case state.PLACING:
        break;
      case state.SHOTING:
        break;
      case state.WAITING:
        break;
      default:
    }
  };
  const handleHoverGameboard = (e) => {
    const posibleGameboard = createGameboard();
    const canPlace = posibleGameboard.placeShip(
      5,
      { x: +e.target.dataset.x, y: +e.target.dataset.y },
      direction,
    );
    if (canPlace) {
      setPosibleShip(posibleGameboard.getShips()[0]);
    } else {
      setPosibleShip([]);
    }
  };
  const handleDirection = () => {
    setDirection(!direction);
  };
  return (
    <div className="gameboard">
      <div>
        <h2>Gameboard</h2>
        <label htmlFor="axis">
          <input
            onClick={handleDirection}
            name="axis"
            type="button"
            value={`Direction ${direction ? 'X' : 'Y'} `}
          />
        </label>
      </div>
      <div className="cells-container">
        {coords().map((coord) => {
          const key = coord.x.toString() + coord.y.toString();
          let isPosible = false;
          posibleShip.forEach((posibleCoord) => {
            if (posibleCoord.x === coord.x && posibleCoord.y === coord.y) {
              isPosible = true;
            }
          });
          return (
            <div
              key={key}
              data-x={coord.x}
              data-y={coord.y}
              onClick={handleCellClick}
              onMouseEnter={handleHoverGameboard}
              className={`${isPosible ? 'posible' : null} cell`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
