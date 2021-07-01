import React from "react";
import { useSelector } from "react-redux";
import RatingsChart from "../shared/RatingsChart";

const getShortName = (assignmentName) => {
  if (assignmentName.length > 6) {
    return assignmentName.slice(0, 5) + "*";
  } else {
    return assignmentName;
  }
};

const Chart = ({ studentName }) => {
  const assignments = useSelector((state) => state.assignments);

  let ratingsList = [];
  assignments.forEach((assignment) => {
    const funRatings = assignment.funRatings;
    const difficultyRatings = assignment.difficultyRatings;

    let funList = [];
    funRatings.forEach((funRating) => {
      if (funRating.name === studentName) {
        funList.push(funRating.rating);
      }
    });

    let difficultyList = [];
    difficultyRatings.forEach((difficultyRating) => {
      if (difficultyRating.name === studentName) {
        difficultyList.push(difficultyRating.rating);
      }
    });

    const newRating = {
      assignment: getShortName(assignment.name),
      averageFunRating: funList,
      //   averageFunRating: getAverage(funList),
      averageDifficultyRating: difficultyList,
      //   averageDifficultyRating: getAverage(difficultyList),
    };

    ratingsList.push(newRating);
  });

  return <RatingsChart ratingsList={ratingsList} />;
};

export default Chart;
