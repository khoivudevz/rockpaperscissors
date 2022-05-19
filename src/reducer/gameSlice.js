import { createSlice } from "@reduxjs/toolkit";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissors from "../assets/scissor.png";
import { localStorageServices } from "../services/localStorageServices";
const initialState = {
  user: null,
  computer: null,
  score: localStorageServices.getScore(),
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    userSet: (state, action) => {
      if (action.payload == "paper") {
        state.user = Paper;
      }
      if (action.payload == "scissors") {
        state.user = Scissors;
      }
      if (action.payload == "rock") {
        state.user = Rock;
      }
    },
    computerSet: (state, action) => {
      let arr = [Rock, Paper, Scissors];
      let computerRole = arr[Math.floor(Math.random() * arr.length)];
      state.computer = computerRole;
    },
    reset: (state) => {
      state.user = null;
      state.computer = null;
    },
    setScore: (state) => {
      if (state.user == Rock && state.computer == Scissors) {
        state.score++;
        localStorageServices.setScore(state.score);
      }
      if (state.user == Scissors && state.computer == Paper) {
        state.score++;
        localStorageServices.setScore(state.score);
      }
      if (state.user == Paper && state.computer == Rock) {
        state.score++;
        localStorageServices.setScore(state.score);
      }
    },
  },
});
export const { userSet, computerSet, reset, setScore } = gameSlice.actions;
export default gameSlice.reducer;
