import { Route, Routes } from "react-router-dom";

import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Choices from "./components/Choices";
import { useEffect, useState } from "react";
import Result from "./components/Result";

function App() {
  const [myChoice, setMyChoice] = useState(
    localStorage.getItem("myChoice") || ""
  );
  const [houseChoice, setHouseChoice] = useState(
    localStorage.getItem("houseChoice") || ""
  );
  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem("scores");
    return savedScores
      ? JSON.parse(savedScores)
      : { myScore: 0, houseScore: 0 };
  });
  const [hasWon, setHasWon] = useState(null);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    localStorage.setItem("myChoice", myChoice);
    localStorage.setItem("houseChoice", houseChoice);
  }, [myChoice, houseChoice]);

  return (
    <div className="mx-auto">
      <Header scores={scores} hasWon={hasWon} setScores={setScores} />
      <div className="w-[700px] mx-auto mb-6">
        <Routes>
          <Route
            path="/"
            element={
              <Game
                setMyChoice={setMyChoice}
                setHouseChoice={setHouseChoice}
                setHasWon={setHasWon}
                setScores={setScores}
              />
            }
          />
          <Route
            path="/choices"
            element={
              <Choices
                myChoice={myChoice}
                houseChoice={houseChoice}
                setHouseChoice={setHouseChoice}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                myChoice={myChoice}
                houseChoice={houseChoice}
                setScores={setScores}
                setHasWon={setHasWon}
                hasWon={hasWon}
              />
            }
          />
        </Routes>
      </div>
      <Rules setScores={setScores}/>
    </div>
  );
}

export default App;
