import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
const navigate = useNavigate()
  return (
    <div className='text-yellow-200'>
        you won !!!
      <button onClick={() => navigate('/')}>Play again</button>
    </div>
  );
};

export default Result;
