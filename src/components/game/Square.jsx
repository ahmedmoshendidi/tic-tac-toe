import Xicon from "./Xicon";
import Oicon from "./Oicon";
import { useState } from "react";
function Square({ className, number, turn, setTurn, squares, setSquares }) {
  let newArray = [...squares];
  const [clicked, setClicked] = useState(false);
  const handleClickSquare = () => {
    console.log(newArray);
    if (newArray[number].isItEmpty) {
      newArray[number].isItEmpty = false;
      if (turn) {
        newArray[number].content = "x";
      } else {
        newArray[number].content = "o";
      }
      setTurn(!turn);
      setClicked(true);
    }
  };

  return (
    <div className={className} onClick={handleClickSquare}>
      {clicked && <>{newArray[number].content == "x" && <Xicon />}</>}
      {clicked && <>{newArray[number].content == "o" && <Oicon />}</>}
    </div>
  );
}

export default Square;
