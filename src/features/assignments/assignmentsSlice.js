import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

console.log(rawStudentData);

let assignmentsList = [];
rawStudentData.forEach((element) => {
  if (!assignmentsList.includes(element.assignment)) {
    assignmentsList.push(element.assignment);
  }
});

console.log(assignmentsList);

const initialState = assignmentsList;

export const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
});

export default assignmentsSlice.reducer;
