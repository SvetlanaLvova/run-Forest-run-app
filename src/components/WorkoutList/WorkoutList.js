import "./WorkoutList.css";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import WorkoutFilter from "../WorkoutFilter/WorkoutFilter";
import React, { useState } from "react";

function WorkoutList(props) {
const[year, setYear] = useState('2022')
  const changeYearHandler = (year) => {
    setYear(year)
  };
  return (
    <div className="workout">
      <WorkoutFilter year={year} onChangeYear={changeYearHandler} />
      {props.workout.map((el) => <WorkoutItem key={el.id} date={el.date} description={el.description} distance={el.distance} />)}
    </div>
  );
}

export default WorkoutList;
