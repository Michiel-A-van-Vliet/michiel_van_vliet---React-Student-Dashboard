import React from "react";
import { useSelector } from "react-redux";
import StudentDataListItem from "./StudentDataListItem";

const StudentDataList = () => {
  const allStudentData = useSelector((state) => state.studentData);

  return (
    <tbody>
      {allStudentData.map((entry) => (
        <StudentDataListItem
          key={entry.id}
          name={entry.name}
          assignment={entry.assignment}
          difficulty={entry.difficultyRating}
          fun={entry.funRating}
        />
      ))}
    </tbody>
  );
};

export default StudentDataList;
