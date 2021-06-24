import React from "react";
// import { useSelector } from "react-redux";
import StudentDataList from "./StudentDataList";

const StudentData = () => {
  //   const allStudentData = useSelector((state) => state.studentData);

  return (
    <main>
      <h1>Alle brongegevens</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Wie ben je?</th>
            <th>Welke opdracht lever je nu in?</th>
            <th>Hoe moeilijk vond je deze opdracht?</th>
            <th>Hoe leuk vond je deze opdracht?</th>
          </tr>
        </thead>
        <StudentDataList />
        {/* <StudentDataList data={allStudentData} /> */}
      </table>
    </main>
  );
};

export default StudentData;
