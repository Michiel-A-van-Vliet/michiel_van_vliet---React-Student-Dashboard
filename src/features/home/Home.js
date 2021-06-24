import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const studentData = useSelector((state) => state.studentData);
  //   console.log("* studentData", studentData);

  const selectedStudentData = studentData.filter(
    (data) => data.isSelected === true
  );
  //   console.log("* selectedStudentData", selectedStudentData);

  let assignmentsList = [];
  selectedStudentData.forEach((element) => {
    console.log(element);
    if (!assignmentsList.includes(element.assignment)) {
      assignmentsList.push(element.assignment);
    }
  });
  console.log("* assignmentsList", assignmentsList);

  //   let assignmentRatings = [];
  //   selectedStudentData.forEach((element) => {
  //       if assignmentRatings.some()
  //   })

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
