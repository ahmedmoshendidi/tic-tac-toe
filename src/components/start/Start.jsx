import React from "react";
import Logo from "../../Logo";
import Xmark from "./Xmark";
import Omark from "./Omark";
import Button from "../../Button";
function Start({ setPlayWith, mark, setMark }) {
  const handleClickWith = (e) => {
    setPlayWith((prevData) => ({ ...prevData, [e.target.name]: true }));
  };
  return (
    <div className="start-container">
      <Logo className="logo-start" />
      <div className="choices-box">
        <h3 className="text-sm-bold-silver-center-wide">
          PICK PLAYER 1’S MARK
        </h3>
        <div className="marks">
          <Xmark mark={mark} setMark={setMark} />
          <Omark mark={mark} setMark={setMark} />
        </div>
        <h5>REMEMBER : X GOES FIRST</h5>
      </div>
      <div className="buttons">
        <Button
          content="NEW GAME (VS CPU)"
          className="but  bg-yellow-hover bg-yellow shadow-yellow "
          name="cpu"
          onClick={handleClickWith}
        />
        <Button
          content="NEW GAME  (VS PLAYER)"
          className="but bg-light-blue shadow-light-blue bg-light-blue-hover"
          name="player"
          onClick={handleClickWith}
        />
      </div>
    </div>
  );
}

export default Start;
