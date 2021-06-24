import React from "react";

const StudentDataListItem = ({ name, assignment, fun, difficulty }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{assignment}</td>
      <td>{fun}</td>
      <td>{difficulty}</td>
    </tr>
  );
};

export default StudentDataListItem;
