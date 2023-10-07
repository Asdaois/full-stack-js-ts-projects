import React, { useEffect, useState } from 'react';

export default function DisplayScore(props) {
  const { score, highScore } = props;
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighlight(true);
      return;
    }
    setHighlight(false);
  });

  return (
    <div>
      <span>Score: {score}</span>
      <span style={highlight ? { color: 'red' } : { color: 'gray' }}>
        High score: {highScore}
      </span>
    </div>
  );
}
