import { Route, Routes } from "react-router-dom";

import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Choices from "./components/Choices";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [myChoice, setMyChoice] = useState("");

  return (
    <div className="mx-auto">
      <Header />
      <div className="w-[700px] mx-auto mb-6">
        <Routes>
          <Route path="/" element={<Game setMyChoice={setMyChoice}  />} />
          <Route path="/choices" element={<Choices myChoice={myChoice} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Rules />
    </div>
  );
}

export default App;
