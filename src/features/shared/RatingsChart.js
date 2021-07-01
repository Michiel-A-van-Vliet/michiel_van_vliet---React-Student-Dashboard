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

const RatingsChart = ({ ratingsList }) => {
  return (
    <VictoryChart
      domainPadding={10}
      theme={VictoryTheme.material}
      width={600}
      height={300}
    >
      <VictoryGroup offset={3}>
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
            angle={60}
            style={{ fontSize: 7, color: "black" }}
            textAnchor={"start"}
          />
        }
      />
      <VictoryAxis
        dependentAxis
        // label="Rating"
        domain={[0, 5]}
        tickLabelComponent={
          <VictoryLabel
            style={{ fontSize: 10, color: "black" }}
            textAnchor={"end"}
          />
        }
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

export default RatingsChart;
