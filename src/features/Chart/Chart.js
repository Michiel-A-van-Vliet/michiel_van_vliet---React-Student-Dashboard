import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

const testData = [
  { assignment: "w1d1", averageRating: 1 },
  { assignment: "w1d2", averageRating: 4 },
  { assignment: "w1d3", averageRating: 3 },
  { assignment: "w1d4", averageRating: 2 },
  { assignment: "w1d5", averageRating: 5 },
  { assignment: "w2d1", averageRating: 1.3 },
  { assignment: "w2d2", averageRating: 4.5 },
  { assignment: "w2d3", averageRating: 3.5 },
  { assignment: "w2d4", averageRating: 2.5 },
  { assignment: "w2d5", averageRating: 1.5 },
];

// const testAssignmentsList = ["w1d1", "w1d2", "w1d3", "w1d4"];

const Chart = () => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryBar data={testData} x="assignment" y="averageRating" />
    </VictoryChart>
  );
};

export default Chart;
