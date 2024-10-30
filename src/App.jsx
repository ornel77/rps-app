import { Route, Routes } from "react-router-dom";

import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Choices from "./components/Choices";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [houseChoice, setHouseChoice] = useState("");
  const [scores, setScores] = useState({ myScore: 0, houseScore: 0 });
  const [hasWon, setHasWon] = useState(null);

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
                setScore={setScores}
                setHasWon={setHasWon}
                hasWon={hasWon}
              />
            }
          />
        </Routes>
      </div>
      <Rules />
    </div>
  );
}

export default App;
