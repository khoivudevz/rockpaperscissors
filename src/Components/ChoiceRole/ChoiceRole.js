import React from "react";
import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissor.png";
import { useDispatch } from "react-redux";
import { computerSet, userSet } from "../../reducer/gameSlice";
export default function ChoiceRole() {
  const dispatch = useDispatch();
  let setUserRole = (role) => {
    dispatch(userSet(role));
    dispatch(computerSet());
  };
  return (
    <div>
      <div className="flex items-center justify-between mx-[25rem]">
        <div className="w-[150px] h-[140px]">
          <img
            src={Rock}
            alt="rock"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4 hover:border-white transition-all  cursor-pointer"
            onClick={() => {
              setUserRole("rock");
            }}
          />
        </div>
        <div className="w-[150px] h-[140px]">
          <img
            src={Paper}
            alt="paper"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4 hover:border-white transition-all  cursor-pointer"
            onClick={() => {
              setUserRole("paper");
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[150px] h-[140px] ">
          <img
            src={Scissors}
            alt="scissors"
            className="w-full h-full object-fit rounded-full border-blueOcean border-4 hover:border-white transition-all  cursor-pointer"
            onClick={() => {
              setUserRole("scissors");
            }}
          />
        </div>
      </div>
    </div>
  );
}
