import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

let assignmentsList = [];
rawStudentData.forEach((object) => {
  if (!assignmentsList.includes(object.assignment)) {
    assignmentsList.push(object.assignment);
  }
});

let initialState = [];
let i = 0;
assignmentsList.forEach((element) => {
  let funRatingsList = [];
  let difficultyRatingsList = [];
  rawStudentData.forEach((object) => {
    if (object.assignment === element) {
      funRatingsList.push({ name: object.name, rating: object.fun });
      difficultyRatingsList.push({
        name: object.name,
        rating: object.difficutly,
      });
    }
  });

  const newObject = {
    id: i++,
    name: element,
    funRatings: funRatingsList,
    difficultyRatings: difficultyRatingsList,
  };
  initialState.push(newObject);
});

export const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
});

export default assignmentsSlice.reducer;
