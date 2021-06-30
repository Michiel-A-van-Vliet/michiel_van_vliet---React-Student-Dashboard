import React from "react";
import Chart from "./Chart.js";
import StudentsList from "../students/StudentsList.js";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Chart />
      <StudentsList />
    </main>
  );
};

export default Home;
