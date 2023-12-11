import { useState } from "react";
import Logo from "../../Logo";
import Square from "./Square";
import Xturn from "./Xturn";
import Oturn from "./Oturn";
import TurnScreen from "./TurnScreen";
import Button from "../../Button";
import Restart from "./Restart";

function Game() {
  const handleClickRestart = () => {
    setSquares([
      { isItEmpty: true, index: 0, content: "" },
      { isItEmpty: true, index: 1, content: "" },
      { isItEmpty: true, index: 2, content: "" },
      { isItEmpty: true, index: 3, content: "" },
      { isItEmpty: true, index: 4, content: "" },
      { isItEmpty: true, index: 5, content: "" },
      { isItEmpty: true, index: 6, content: "" },
      { isItEmpty: true, index: 7, content: "" },
      { isItEmpty: true, index: 8, content: "" },
    ]);
  };
  const [turn, setTurn] = useState(true);
  const [squares, setSquares] = useState([
    { isItEmpty: true, index: 0, content: "" },
    { isItEmpty: true, index: 1, content: "" },
    { isItEmpty: true, index: 2, content: "" },
    { isItEmpty: true, index: 3, content: "" },
    { isItEmpty: true, index: 4, content: "" },
    { isItEmpty: true, index: 5, content: "" },
    { isItEmpty: true, index: 6, content: "" },
    { isItEmpty: true, index: 7, content: "" },
    { isItEmpty: true, index: 8, content: "" },
  ]);
  let newSquares = squares.map((item) => (
    <Square
      key={item.index}
      className="square"
      number={item.index}
      turn={turn}
      setTurn={setTurn}
      squares={squares}
      setSquares={setSquares}
    />
  ));
  return (
    <div className="game-contaier">
      <header className="game__header">
        <Logo />
        <TurnScreen turn={turn ? <Xturn /> : <Oturn />} />
        <Button
          content={<Restart />}
          className="restart-but"
          onClick={handleClickRestart}
        />
      </header>
      <div className="game__board">{newSquares}</div>
    </div>
  );
}

export default Game;
