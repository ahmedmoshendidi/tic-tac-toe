import React from "react";

function TurnScreen({ turn }) {
  return (
    <div className="turn-screen">
      <div> {turn}</div>
      <p className="turn-screen__text">Turn</p>
    </div>
  );
}

export default TurnScreen;
