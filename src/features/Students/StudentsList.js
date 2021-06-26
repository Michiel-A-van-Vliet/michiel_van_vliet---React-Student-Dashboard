import React from "react";
import { useSelector } from "react-redux";
import StudentsListItem from "./StudentsListItem";

const StudentsList = () => {
  const students = useSelector((state) => state.students);

  return (
    <ul>
      {students.map((student) => (
        <StudentsListItem
          key={student.id}
          id={student.id}
          name={student.name}
          lastName={student.lastName}
          isSelected={student.isSelected}
        />
      ))}
    </ul>
  );
};

export default StudentsList;
