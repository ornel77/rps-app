import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHouseChoice } from "../utils/rules";

const Choices = ({ myChoice, houseChoice, setHouseChoice }) => {
 
  const navigate = useNavigate();
  useEffect(() => {
    const houseTimeout = setTimeout(() => {
      setHouseChoice(getHouseChoice());
    }, 1000);
    const timeOut = setTimeout(() => {    
      navigate("/result");
    }, 2000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(houseTimeout);
    };
  }, [navigate]);

  return (
    <div className="text-white flex justify-center gap-20 text-center ">
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

export default Choices;
