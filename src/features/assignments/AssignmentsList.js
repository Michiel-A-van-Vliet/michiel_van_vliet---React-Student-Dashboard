import React from "react";
import { useSelector } from "react-redux";
import AssignmentsListItem from "./AssignmentsListItem";

const AssignmentsList = () => {
  const assignments = useSelector((state) => state.assignments);

  return (
    <ul>
      {assignments.map((assignment) => (
        <AssignmentsListItem key={assignment.id} assignment={assignment} />
      ))}
    </ul>
  );
};

export default AssignmentsList;
