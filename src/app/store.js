import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import studentDataReducer from "../features/studentData/studentDataSlice";
import studentsReducer from "../features/Students/studentsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    studentData: studentDataReducer,
    students: studentsReducer,
  },
});
