import React from "react";
import Chart from "./Chart.js";
import StudentsList from "../students/StudentsList.js";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Chart />
      <p>Aanvinkbare lijst studenten</p>
      <StudentsList />
    </main>
  );
};

export default Home;
