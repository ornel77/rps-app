import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { rules } from "../utils/rules";

const Result = ({ myChoice, houseChoice, setHasWon, hasWon }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setHasWon(rules(myChoice, houseChoice));
    // console.log(hasWon);
  }, [myChoice, houseChoice, setHasWon]);
  return (
    <div className="text-white flex justify-center gap-20 text-center items-center ">
      <section>
        <p className="uppercase tracking-wider text-sm pb-4">you picked</p>
        <div
          className={`w-[124px] h-[124px] rounded-full bg-${myChoice} shadow-${myChoice}-sd flex items-center justify-center`}
        >
          <div className="bg-iconContainer rounded-full shadow-iconContainer-sd w-24 h-24 flex justify-center items-center">
            <img
              src={`/images/icon-${myChoice}.svg`}
              alt=""
              className="w-12 h-12"
            />
          </div>
        </div>
      </section>
      <section>
        {hasWon === "draw" ? (
          <p className="uppercase text-4xl mb-3">it's a draw</p>
        ) : hasWon === "win" ? (
          <p className="uppercase text-4xl mb-3">you win</p>
        ) : (
          <p className="uppercase text-4xl mb-3">you lost</p>
        )}
        <button
          onClick={() => navigate("/")}
          className="uppercase text-xs tracking-widest text-darkText bg-white px-8 py-2 rounded-md font-bold"
        >
          Play again
        </button>
      </section>
      <section>
        <p className="uppercase tracking-wider text-sm pb-4">
          the house picked
        </p>

        {houseChoice ? (
          <div
            className={`w-[124px] h-[124px] rounded-full bg-${houseChoice} shadow-${houseChoice}-sd flex items-center justify-center`}
          >
            <div className="bg-iconContainer rounded-full shadow-iconContainer-sd w-24 h-24 flex justify-center items-center">
              <img
                src={`/images/icon-${houseChoice}.svg`}
                alt=""
                className="w-12 h-12"
              />
            </div>
          </div>
        ) : (
          <div className=" flex items-center justify-center w-[124px] h-[124px]">
            <div className="bg-[#0b0f274f] w-28 h-28 rounded-full" />
          </div>
        )}
      </section>
    </div>
  );
};

export default Result;
