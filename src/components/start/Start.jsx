import React from "react";
import Logo from "../../Logo";
import Xmark from "./Xmark";
import Omark from "./Omark";
import Button from "../../Button";
import { useState } from "react";
function Start() {
  const [mark, setMark] = useState(true);
  return (
    <div className="start-container">
      <Logo />
      <div className="choices-box">
        <h3>PICK PLAYER 1’S MARK</h3>
        <div className="marks">
          <Xmark mark={mark} setMark={setMark} />
          <Omark mark={mark} setMark={setMark} />
        </div>
        <h5>REMEMBER : X GOES FIRST</h5>
      </div>
      <div className="buttons">
        <Button content="NEW GAME (VS CPU)" className="but but-bg-yellow" />
        <Button
          content="NEW GAME  (VS PLAYER)"
          className="but but-bg-light-blue"
        />
      </div>
    </div>
  );
}

export default Start;
