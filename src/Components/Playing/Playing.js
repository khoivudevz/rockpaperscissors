import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, setScore } from "../../reducer/gameSlice";
export default function Playing() {
  let dispatch = useDispatch();
  let userRole = useSelector((state) => state.gameSlice.user);
  let computerRole = useSelector((state) => state.gameSlice.computer);
  let textResult = useSelector((state) => state.gameSlice.textResult);
  const resetGame = () => {
    dispatch(reset());
  };
  useEffect(() => {
    dispatch(setScore());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between md:mx-[10rem] xl:mx-[25rem] lg:mx-[15rem]">
        <div className="w-[150px] h-[140px]">
          <div className="flex items-center justify-center bg-deepBlue border-2 border-blueOcean">
            <p className="text-3xl text-blueOcean">USER</p>
          </div>
          <img
            src={userRole}
            alt="rock"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4"
          />
        </div>
        <div className="w-[150px] h-[140px]">
          <div className="flex items-center justify-center bg-deepBlue border-2 border-blueOcean">
            <p className="text-3xl text-blueOcean">COMP</p>
          </div>
          <img
            src={computerRole}
            alt="rock"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <p className="text-5xl text-white">{textResult}</p>
      </div>
      <div className="flex items-center justify-center mt-2">
        <button
          className="text-xl text-white bg-blueOcean hover:bg-white hover:text-blueOcean transition-all p-3 rounded-full"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
