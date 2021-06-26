import { createSlice } from "@reduxjs/toolkit";
import { rawStudentData } from "../../data/rawStudentData";

const randomLastname = () => {
  const lastNames = ["Tol", "Veerman", "Schilder", "Smit", "Boer", "Molenaar"];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
};

const randomTown = () => {
  const towns = ["Volendam", "Singelwijk", "Edam", "Blokgouw", "Munnikeveld"];
  return towns[Math.floor(Math.random() * towns.length)];
};

const randomTelephone = () => {
  const theRestOfThePhoneNumber = Math.floor(
    Math.random() * 90000000 + 10000000
  );
  return "06" + theRestOfThePhoneNumber;
};

var studentsList = [];
rawStudentData.forEach((element) => {
  if (!studentsList.includes(element.name)) {
    studentsList.push(element.name);
  }
});

// console.log("studentsList", studentsList);

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
  reducers: {},
});

export default studentsSlice.reducer;
