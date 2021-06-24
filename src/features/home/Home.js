import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const studentData = useSelector((state) => state.studentData);
  console.log("* studentData", studentData);
  const selectedStudentData = studentData.filter(
    (data) => data.isSelected === true
  );
  console.log("* selectedStudentData", selectedStudentData);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;
