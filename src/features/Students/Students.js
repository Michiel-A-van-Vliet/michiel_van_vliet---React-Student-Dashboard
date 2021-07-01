import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Students() {
  const students = useSelector((state) => state.students);

  return (
    <main>
      <h1>Studenten</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={"/" + student.name}>
              {student.name} {student.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Students;
