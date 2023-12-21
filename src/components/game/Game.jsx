import { useState } from "react";
import Logo from "../../Logo";
import Square from "./Square";
import Xturn from "./Xturn";
import Oturn from "./Oturn";
import TurnScreen from "./TurnScreen";
import Button from "../../Button";
import RestartIcon from "./RestartIcon";
import Score from "./Score";
import Popup from "../popup/Popup";
import Xicon from "./Xicon";
import Oicon from "./Oicon";

function Game({ playWith, mark, setPlayWith }) {
  const [restartOption, setRestartOption] = useState(false);
  const [whoWin, setWhoWin] = useState(false);

  const handleRestartOption = () => {
    setRestartOption(true);
  };

  const handleNextRound = () => {
    setSquares([
      { isItEmpty: true, index: 0, content: "", winSquare: false },
      { isItEmpty: true, index: 1, content: "", winSquare: false },
      { isItEmpty: true, index: 2, content: "", winSquare: false },
      { isItEmpty: true, index: 3, content: "", winSquare: false },
      { isItEmpty: true, index: 4, content: "", winSquare: false },
      { isItEmpty: true, index: 5, content: "", winSquare: false },
      { isItEmpty: true, index: 6, content: "", winSquare: false },
      { isItEmpty: true, index: 7, content: "", winSquare: false },
      { isItEmpty: true, index: 8, content: "", winSquare: false },
    ]);
    setTurn(true);
    setTimesPlay(0);
    setGameOver(false);
    setRestartOption(false);
    setGameOver(false);
    setWhoWin(false);
  };

  const handleClickRestartYes = () => {
    setSquares([
      { isItEmpty: true, index: 0, content: "", winSquare: false },
      { isItEmpty: true, index: 1, content: "", winSquare: false },
      { isItEmpty: true, index: 2, content: "", winSquare: false },
      { isItEmpty: true, index: 3, content: "", winSquare: false },
      { isItEmpty: true, index: 4, content: "", winSquare: false },
      { isItEmpty: true, index: 5, content: "", winSquare: false },
      { isItEmpty: true, index: 6, content: "", winSquare: false },
      { isItEmpty: true, index: 7, content: "", winSquare: false },
      { isItEmpty: true, index: 8, content: "", winSquare: false },
    ]);
    setTurn(true);
    setTimesPlay(0);
    setGameOver(false);
    setRestartOption(false);
    setWhoWin(false);
  };
  const handleClickRestartNo = () => {
    setRestartOption(false);
  };

  const handleClickQuit = () => {
    setPlayWith(() => ({ cpu: false, player: false }));
  };
  const [turn, setTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const [squares, setSquares] = useState([
    { isItEmpty: true, index: 0, content: "", winSquare: false },
    { isItEmpty: true, index: 1, content: "", winSquare: false },
    { isItEmpty: true, index: 2, content: "", winSquare: false },
    { isItEmpty: true, index: 3, content: "", winSquare: false },
    { isItEmpty: true, index: 4, content: "", winSquare: false },
    { isItEmpty: true, index: 5, content: "", winSquare: false },
    { isItEmpty: true, index: 6, content: "", winSquare: false },
    { isItEmpty: true, index: 7, content: "", winSquare: false },
    { isItEmpty: true, index: 8, content: "", winSquare: false },
  ]);

  const [score, setScore] = useState({ x: 0, ties: 0, o: 0 });
  const [timesPlay, setTimesPlay] = useState(0);

  const handleCheckScore = () => {
    let newArr = [...squares];
    if (squares[0].content == squares[1].content && squares[0].content) {
      if (squares[1].content == squares[2].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[0].content]: prevScore[squares[0].content] + 1,
          };
        });
        newArr[0].winSquare = true;
        newArr[1].winSquare = true;
        newArr[2].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[0].content;
      }
    }
    if (squares[3].content == squares[4].content && squares[3].content) {
      if (squares[3].content == squares[5].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[3].content]: prevScore[squares[3].content] + 1,
          };
        });
        newArr[3].winSquare = true;
        newArr[4].winSquare = true;
        newArr[5].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[3].content;
      }
    }
    if (squares[6].content == squares[7].content && squares[6].content) {
      if (squares[6].content == squares[8].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[6].content]: prevScore[squares[6].content] + 1,
          };
        });
        newArr[6].winSquare = true;
        newArr[7].winSquare = true;
        newArr[8].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[6].content;
      }
    }
    if (squares[0].content == squares[3].content && squares[6].content) {
      if (squares[6].content == squares[0].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[6].content]: prevScore[squares[6].content] + 1,
          };
        });
        newArr[0].winSquare = true;
        newArr[3].winSquare = true;
        newArr[6].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[0].content;
      }
    }
    if (squares[1].content == squares[4].content && squares[7].content) {
      if (squares[1].content == squares[7].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[7].content]: prevScore[squares[7].content] + 1,
          };
        });
        newArr[1].winSquare = true;
        newArr[4].winSquare = true;
        newArr[7].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[1].content;
      }
    }
    if (squares[2].content == squares[5].content && squares[8].content) {
      if (squares[2].content == squares[8].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[8].content]: prevScore[squares[8].content] + 1,
          };
        });
        newArr[2].winSquare = true;
        newArr[5].winSquare = true;
        newArr[8].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[2].content;
      }
    }
    if (squares[2].content == squares[4].content && squares[6].content) {
      if (squares[2].content == squares[6].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[6].content]: prevScore[squares[6].content] + 1,
          };
        });
        newArr[2].winSquare = true;
        newArr[4].winSquare = true;
        newArr[6].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[2].content;
      }
    }
    if (squares[0].content == squares[4].content && squares[8].content) {
      if (squares[0].content == squares[8].content) {
        setScore((prevScore) => {
          return {
            ...prevScore,
            [squares[8].content]: prevScore[squares[8].content] + 1,
          };
        });
        newArr[0].winSquare = true;
        newArr[4].winSquare = true;
        newArr[8].winSquare = true;
        setSquares(newArr);
        setTimesPlay(0);
        setGameOver(true);
        return squares[0].content;
      }
    }
    if (timesPlay == 9) {
      setScore((prevScore) => ({ ...prevScore, ties: prevScore.ties + 1 }));
      setTimesPlay(0);
      setGameOver(true);
      return false;
    }
  };
  const playWithCpu = () => {
    let newArray = [...squares];
    let randomNum = Math.floor(Math.random() * 9);
    if (newArray[randomNum].isItEmpty) {
      mark
        ? (newArray[randomNum].content = "x")
        : (newArray[randomNum].content = "o");
      newArray[randomNum].isItEmpty = false;
      setSquares(newArray);
      setTurn(!turn);
      setTimesPlay(timesPlay + 1);
    } else {
      playWithCpu();
    }
  };

  let lastIcon;

  if (timesPlay >= 5) {
    lastIcon = handleCheckScore();
    if (lastIcon == "x") {
      setWhoWin("x");
    } else if (lastIcon == "o") {
      setWhoWin("o");
    }
  }

  if (!lastIcon) {
    //here i play with x mark
    if (!turn && playWith.cpu && !gameOver && !mark) {
      setTimeout(playWithCpu, 3000);
    }
    //here i play with o mark
    if (turn && playWith.cpu && !gameOver && mark) {
      setTimeout(playWithCpu, 3000);
    }
  }
  let newSquares = squares.map((item) => (
    <Square
      key={item.index}
      className={`square 
      ${turn && item.isItEmpty && !playWith.cpu && "x-outline"} 
      ${!turn && item.isItEmpty && !playWith.cpu && "o-outline"}
      ${playWith.cpu && turn && !mark && item.isItEmpty && "x-outline"}
      ${playWith.cpu && !turn && mark && item.isItEmpty && "o-outline"}
      ${playWith.cpu && turn && mark && item.isItEmpty && "not-allowed"}
      ${playWith.cpu && !turn && !mark && item.isItEmpty && "not-allowed"}
      ${item.winSquare && item.content == "x" && "x-win"}
      ${item.winSquare && item.content == "o" && "o-win"}
      ${!item.isItEmpty && "clicked"}`}
      number={item.index}
      turn={turn}
      setTurn={setTurn}
      squares={squares}
      setSquares={setSquares}
      timesPlay={timesPlay}
      setTimesPlay={setTimesPlay}
      playWith={playWith}
      mark={mark}
    />
  ));
  return (
    <>
      <div className="game-contaier">
        <header className="game__header">
          <Logo className="logo-game" />
          <TurnScreen turn={turn ? <Xturn /> : <Oturn />} />
          <Button
            content={<RestartIcon />}
            className="restart-but bg-silver shadow-sm-silver bg-silver-hover"
            onClick={handleRestartOption}
          />
        </header>
        <div className="game__board">{newSquares}</div>
        <footer className="score-screen">
          <Score
            scoreText={
              playWith.cpu ? (!mark ? "X (YOU)" : "X (CPU)") : "X (P1)"
            }
            score={score.x}
            className="score bg-blue"
          />
          <Score
            scoreText="TIES"
            score={score.ties}
            className="score bg-silver"
          />
          <Score
            scoreText={playWith.cpu ? (mark ? "O (YOU)" : "O (CPU)") : "O (P2)"}
            score={score.o}
            className="score bg-yellow"
          />
        </footer>
        {playWith.cpu && mark && turn && !gameOver && (
          <div className="youropponent text-sm-bold-silver-center-wide">
            Your opponent is thinking
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        {playWith.cpu && !mark && !turn && !gameOver && (
          <div className="youropponent text-sm-bold-silver-center-wide">
            Your opponent is thinking
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      {restartOption && (
        <Popup
          btnOne={
            <Button
              content="NO, CANCEL"
              className="popup__btn bg-silver shadow-sm-silver bg-silver-hover"
              onClick={handleClickRestartNo}
            />
          }
          btnTwo={
            <Button
              content="YES, RESTART"
              className="popup__btn bg-yellow shadow-sm-yellow bg-yellow-hover"
              onClick={handleClickRestartYes}
            />
          }
          heading="RESTART GAME?"
        />
      )}
      {gameOver && (
        <Popup
          btnOne={
            <Button
              content="QUIT"
              className="popup__btn bg-silver shadow-sm-silver bg-silver-hover"
              onClick={handleClickQuit}
            />
          }
          btnTwo={
            <Button
              content="NEXT ROUND"
              className="popup__btn bg-yellow shadow-sm-yellow bg-yellow-hover"
              onClick={handleNextRound}
            />
          }
          message={
            playWith.cpu
              ? whoWin
                ? mark
                  ? whoWin == "o"
                    ? "YOU WON!"
                    : "OH NO, YOU LOST..."
                  : whoWin == "x"
                  ? "YOU WON!"
                  : "OH NO, YOU LOST..."
                : ""
              : whoWin
              ? whoWin == "x"
                ? "PLAYER 1 WIN!"
                : "PLAYER 2 WIN!"
              : " "
          }
          heading={
            whoWin ? (
              whoWin == "x" ? (
                <div className="heading__container light-blue-color">
                  <Xicon className="popup__icon" /> TAKES THE ROUND
                </div>
              ) : (
                <div className="heading__container light-yellow-color">
                  <Oicon /> TAKES THE ROUND
                </div>
              )
            ) : (
              "ROUND TIED"
            )
          }
        />
      )}
    </>
  );
}

export default Game;
