import "./App.css";
import Start from "./components/start/Start";
import Game from "./components/game/Game";
import { useState } from "react";

function App() {
  const [playWith, setPlayWith] = useState({ cpu: false, player: false });
  const [mark, setMark] = useState(true);

  return (
    <>
      {!playWith.cpu && !playWith.player && (
        <Start mark={mark} setMark={setMark} setPlayWith={setPlayWith} />
      )}
      {(playWith.cpu || playWith.player) && (
        <Game playWith={playWith} mark={mark} setPlayWith={setPlayWith} />
      )}
    </>
  );
}

export default App;
