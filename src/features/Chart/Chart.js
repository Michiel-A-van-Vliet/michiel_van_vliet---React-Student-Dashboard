import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryLegend,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useSelector } from "react-redux";

const getAverage = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    let total = 0;
    list.forEach((number) => {
      total += number;
    });
    return total / list.length;
  }
};

const Chart = () => {
  const students = useSelector((state) => state.students);
  const assignments = useSelector((state) => state.assignments);

  const isSelected = (studentName) => {
    const student = students.find((student) => student.name === studentName);
    return student.isSelected;
  };

  let ratingsList = [];
  assignments.forEach((assignment) => {
    const funRatings = assignment.funRatings;
    const difficultyRatings = assignment.difficultyRatings;

    let funList = [];
    funRatings.forEach((funRating) => {
      if (isSelected(funRating.name)) {
        funList.push(funRating.rating);
      }
    });

    let difficultyList = [];
    difficultyRatings.forEach((difficultyRating) => {
      if (isSelected(difficultyRating.name)) {
        difficultyList.push(difficultyRating.rating);
      }
    });

    const newRating = {
      assignment: assignment.name,
      averageFunRating: getAverage(funList),
      averageDifficultyRating: getAverage(difficultyList),
    };

    ratingsList.push(newRating);
  });

  console.log(ratingsList);

  return (
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      width={1000}
      height={400}
    >
      <VictoryGroup offset={5}>
        <VictoryBar
          data={ratingsList}
          x="assignment"
          y="averageFunRating"
          style={{ data: { fill: "green" } }}
        />
        <VictoryBar
          data={ratingsList}
          x="assignment"
          y="averageDifficultyRating"
          style={{ data: { fill: "red" } }}
        />
      </VictoryGroup>
      <VictoryAxis
        // label="Opdracht"
        tickLabelComponent={
          <VictoryLabel
            angle={-60}
            style={{ fontSize: 7 }}
            textAnchor={"end"}
          />
        }
      />
      <VictoryAxis
        dependentAxis
        // label="Rating"
        domain={[0, 5]}
      />
      <VictoryLegend
        data={[
          {
            name: "Hoe Leuk?",
            symbol: {
              fill: "green",
            },
          },
          {
            name: "Hoe Moeilijk?",
            symbol: {
              fill: "red",
            },
          },
        ]}
        orientation="horizontal"
      />
    </VictoryChart>
  );
};

export default Chart;
