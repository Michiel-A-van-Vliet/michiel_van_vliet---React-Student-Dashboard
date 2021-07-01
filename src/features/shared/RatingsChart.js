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

export default RatingsChart;
