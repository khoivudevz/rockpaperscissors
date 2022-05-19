import React from "react";
import { useSelector } from "react-redux";
import backGround from "../../assets/background.jpg";
import ChoiceRole from "../../Components/ChoiceRole/ChoiceRole";
import Playing from "../../Components/Playing/Playing";
import Score from "../../Components/Score/Score";
export default function Home() {
  let userData = useSelector((state) => state.gameSlice.user);
  return (
    <div
      className="h-screen w-screen bg-center"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <div>
        <div className="py-[20rem] flex flex-col items-center justify-center w-full h-[156px]">
          <p className="text-white text-5xl">ROCK</p>
          <p className="text-white text-5xl">PAPER</p>
          <p className="text-white text-5xl">SICSSORS</p>
          <div className="container mx-auto mt-20">
            {userData ? <Playing /> : <ChoiceRole />}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[383px] h-[139px] border-blueOcean border-8 rounded-3xl">
          <Score />
        </div>
      </div>
    </div>
  );
}
