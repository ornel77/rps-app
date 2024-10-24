import React from "react";

const Game = () => {
  return (
    <div className="triangle w-full h-[50vh] flex justify-center items-center">
      {/* <div className="w-[250px] h-[250px]"> */}
      <div className="flex flex-wrap w-[400px]  justify-center bg-triangle bg-no-repeat bg-contain triangle gap-8">
        <button className="m-4 w-[124px] h-[124px] rounded-full bg-scissors shadow-scissors-sd flex items-center justify-center">
          <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
            <img src="/images/icon-scissors.svg" alt="" />
          </div>
        </button>
        <button className="m-4 w-[124px] h-[124px] rounded-full bg-paper shadow-paper-sd flex items-center justify-center">
          <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
            <img src="/images/icon-paper.svg" alt="" />
          </div>
        </button>
        <button className="m-4 w-[124px] h-[124px] rounded-full bg-rock shadow-rock-sd flex items-center justify-center">
          <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
            <img src="/images/icon-rock.svg" alt="" />
          </div>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Game;
