import React from "react";
import { useSelector } from "react-redux";
import StudentDataListItem from "./StudentDataListItem";

const StudentDataList = () => {
  const allStudentData = useSelector((state) => state.studentData);

  return (
    <tbody>
      {allStudentData.map((student) => (
        <StudentDataListItem
          key={student.id}
          name={student.name}
          assignment={student.assignment}
          difficulty={student.difficultyRating}
          fun={student.funRating}
        />
      ))}
    </tbody>
  );
};

export default StudentDataList;
