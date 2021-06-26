import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import studentDataReducer from "../features/studentData/studentDataSlice";
import studentsReducer from "../features/students/studentsSlice";
import assignmentsReducer from "../features/assignments/assignmentsSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    studentData: studentDataReducer,
    students: studentsReducer,
    assignments: assignmentsReducer,
  },
});
