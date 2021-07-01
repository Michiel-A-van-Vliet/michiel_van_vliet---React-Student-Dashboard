import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";
import {
  randomLastname,
  randomTown,
  randomTelephone,
  randomHood,
  randomEmail,
} from "../../data/randomData";

let studentsList = [];
rawStudentData.forEach((element) => {
  if (!studentsList.includes(element.name)) {
    studentsList.push(element.name);
  }
});

let i = 0;
const initialState = studentsList.map(function (element) {
  const picUrl = "https://robohash.org/dummycat" + i + ".png?size=200x200";
  return {
    id: i++,
    name: element,
    lastName: randomLastname(),
    town: randomTown(),
    hood: randomHood(),
    email: randomEmail(),
    telephone: randomTelephone(),
    isSelected: true,
    picture: picUrl,
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
