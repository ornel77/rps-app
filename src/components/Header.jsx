import React, { useEffect } from "react";

const Header = ({ scores, hasWon, setScores }) => {

  // console.log("header", hasWon);
  useEffect(() => {
    if (hasWon==="win") {
      setScores((prev) => ({ ...prev, myScore: prev.myScore + 1 }));
    } else if( hasWon==="lost") {
      setScores((prev) => ({ ...prev, houseScore: prev.houseScore + 1 }));
    }
  }, [hasWon, setScores]);


  return (
    <div className="flex items-center justify-between text-white uppercase mt-8 mb-20 p-5 border border-headerOutline rounded-lg w-[550px] mx-auto">
      <h1 className="text-3xl leading-6">
        rock <br /> paper <br /> scissors
      </h1>
      <section className="flex gap-3">
        <article className="bg-white text-center p-2 font-bold rounded-md w-[110px]">
          <p className="text-scoreText text-sm">my score</p>
          <p className="text-darkText text-5xl">{scores.myScore}</p>
        </article>
        <article className="bg-white text-center p-2 font-bold rounded-md w-[110px]">
          <p className="text-scoreText text-sm">house score</p>
          <p className="text-darkText text-5xl">{scores.houseScore}</p>
        </article>
      </section>
    </div>
  );
};

export default Header;
