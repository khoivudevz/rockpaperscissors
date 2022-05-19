import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rock from "../../assets/rock.png";
import { reset, setScore } from "../../reducer/gameSlice";
export default function Playing() {
  let dispatch = useDispatch();
  let userRole = useSelector((state) => state.gameSlice.user);
  let computerRole = useSelector((state) => state.gameSlice.computer);
  const resetGame = () => {
    dispatch(reset());
  };
  useEffect(() => {
    dispatch(setScore());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mx-[25rem]">
        <div className="w-[150px] h-[140px]">
          <img
            src={userRole}
            alt="rock"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4"
          />
        </div>
        <div className="w-[150px] h-[140px]">
          <img
            src={computerRole}
            alt="rock"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <button
          className="text-xl text-white bg-blueOcean p-3 rounded-full"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
