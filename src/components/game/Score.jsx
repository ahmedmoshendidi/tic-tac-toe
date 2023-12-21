import React from "react";

function Score({ scoreText, score, className }) {
  return (
    <div className={className}>
      <p>{scoreText}</p>
      <p>{score}</p>
    </div>
  );
}

export default Score;
