import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

console.log(rawStudentData);

let assignmentsList = [];
rawStudentData.forEach((element) => {
  if (!assignmentsList.includes(element.assignment)) {
    assignmentsList.push(element.assignment);
  }
});

// console.log(assignmentsList);

let tempList = [];
let i = 0;
assignmentsList.forEach((element) => {
  //   console.log(element);
  let ratingsList = [];
  // Do iets voor ratinglist
  const newObject = {
    id: i++,
    name: element,
    ratings: ratingsList,
  };
  tempList.push(newObject);
});

console.log(tempList);

// const initialState = assignmentsList;
const initialState = tempList;

export const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {},
});

export default assignmentsSlice.reducer;
