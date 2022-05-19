import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  let score = useSelector((state) => state.gameSlice.score);
  return (
    <div className="flex justify-center items-center w-fulll h-full">
      <div className="w-[180px] h-[130px] flex justify-center items-center">
        <div className="flex justify-center items-center space-x-3">
          <p className="text-5xl text-white">SCORE:</p>
          <p className="text-5xl text-blueOcean">{score ? score : 0}</p>
        </div>
      </div>
    </div>
  );
}
