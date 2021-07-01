import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

let i = 0;
const initialState = rawStudentData.map(function (entry) {
  return {
    id: i++,
    name: entry.name,
    assignment: entry.assignment,
    difficultyRating: entry.difficutly,
    funRating: entry.fun,
  };
});

export const studentDataSlice = createSlice({
  name: "studentData",
  initialState,
  reducers: {},
});

export default studentDataSlice.reducer;
