import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";
import {
  randomLastname,
  randomTown,
  randomTelephone,
} from "../../data/randomData";

var studentsList = [];
rawStudentData.forEach((element) => {
  if (!studentsList.includes(element.name)) {
    studentsList.push(element.name);
  }
});

var i = 0;
const initialState = studentsList.map(function (element) {
  return {
    id: i++,
    name: element,
    lastName: randomLastname(),
    town: randomTown(),
    telephone: randomTelephone(),
    isSelected: true,
  };
});

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    toggleIsSelected: (state, action) => {
      const index = state.findIndex(
        (student) => student.id === action.payload.id
      );
      state[index].isSelected = action.payload.isSelected;
    },
  },
});

export const { toggleIsSelected } = studentsSlice.actions;

export default studentsSlice.reducer;
