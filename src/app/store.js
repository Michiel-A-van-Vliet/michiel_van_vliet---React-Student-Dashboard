import { configureStore } from "@reduxjs/toolkit";
import studentDataReducer from "../features/studentData/studentDataSlice";
import studentsReducer from "../features/students/studentsSlice";
import assignmentsReducer from "../features/assignments/assignmentsSlice";

export const store = configureStore({
  reducer: {
    studentData: studentDataReducer,
    students: studentsReducer,
    assignments: assignmentsReducer,
  },
});
