import "./WorkoutList.css";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import WorkoutFilter from "../WorkoutFilter/WorkoutFilter";
import React, { useState } from "react";
import WorkoutDiagram from "../WorkoutDiagram/WorkoutDiagram";

function WorkoutList(props) {
  const [year, setYear] = useState("2022");
  const changeYearHandler = (year) => {
    setYear(year);
  };

  const filteredYear = props.workout.filter((e) => {
    return e.date.getFullYear().toString() === year;
  });

  return (
    <div className="workout">
      <WorkoutFilter year={year} onChangeYear={changeYearHandler} />
      <WorkoutDiagram workout={filteredYear} />
      {filteredYear.length ? (
        filteredYear.map((el) => (
          <WorkoutItem
            key={el.id}
            date={el.date}
            description={el.description}
            distance={el.distance}
          />
        ))
      ) : (
        <h2 className="workout-list__fallback">
          В этом году тренировок не было
        </h2>
      )}
    </div>
  );
}

export default WorkoutList;
