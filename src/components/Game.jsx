import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHOICES } from "../utils/data";

const Game = ({ setMyChoice, setHouseChoice }) => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    setTimeout(() => {
      setMyChoice(choice);
      setHouseChoice("");
      navigate("/choices");
    }, 1000);
  };

  return (
    <div className="triangle w-full h-[50vh] flex justify-center items-center">
      {/* <div className="w-[250px] h-[250px]"> */}
      <div className="flex flex-wrap w-[400px]  justify-center bg-triangle bg-no-repeat bg-contain triangle gap-14">
        {CHOICES.map((choice, index) => (
          <button
            className={`m-4 w-[124px] h-[124px] rounded-full bg-${choice} shadow-${choice}-sd flex items-center justify-center`}
            onClick={() => handleChoice(choice)}
            key={index}
          >
            <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
              <img
                src={`/images/icon-${choice}.svg`}
                alt=""
                className="w-12 h-12"
              />
            </div>
          </button>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Game;
