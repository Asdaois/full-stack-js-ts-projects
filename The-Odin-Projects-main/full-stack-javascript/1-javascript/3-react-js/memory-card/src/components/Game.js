import React, { useState } from 'react';
import DisplayScore from 'components/DisplayScore';
import Board from 'components/Board';

export default function Game() {
  const scoreSystem = useScoreSystem();

  return (
    <div>
      <button onClick={scoreSystem.handles.handleScore}>Aumentar score</button>
      <button onClick={scoreSystem.handles.gameOver}>Perder</button>
      <DisplayScore {...scoreSystem.values} />
    </div>
  );
}

function useScoreSystem() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleScore() {
    setScore(score + 1);
  }

  function gameOver() {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }
  return {
    values: {
      score,
      highScore,
    },
    handles: {
      handleScore,
      gameOver,
    },
  };
}
