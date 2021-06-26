import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

var i = 0;
const initialState = rawStudentData.map(function (entry) {
  return {
    id: i++,
    name: entry.name,
    assignment: entry.assignment,
    difficultyRating: entry.difficutly,
    funRating: entry.fun,
    isSelected: true,
  };
});

export const studentDataSlice = createSlice({
  name: "studentData",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default studentDataSlice.reducer;
