import Xicon from "./Xicon";
import Oicon from "./Oicon";
function Square({
  className,
  number,
  turn,
  setTurn,
  squares,
  setSquares,
  timesPlay,
  setTimesPlay,
  playWith,
  mark,
}) {
  let newArray = [...squares];
  const handleClickSquare = () => {
    if (newArray[number].isItEmpty) {
      newArray[number].isItEmpty = false;
      if (turn) {
        newArray[number].content = "x";
      } else {
        newArray[number].content = "o";
      }
      setTurn(!turn);
      setTimesPlay(timesPlay + 1);
      setSquares(newArray);
    }
  };

  return (
    <div
      className={className}
      onClick={() => {
        if (
          (playWith.cpu && mark && !turn) ||
          (playWith.cpu && !mark && turn) ||
          playWith.cpu == false
        ) {
          handleClickSquare();
        }
      }}
    >
      {newArray[number].content == "x" && (
        <Xicon winSquare={newArray[number].winSquare} />
      )}
      {newArray[number].content == "o" && (
        <Oicon winSquare={newArray[number].winSquare} />
      )}
    </div>
  );
}

export default Square;
