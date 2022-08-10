import "./WorkoutList.css";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import WorkoutFilter from "../WorkoutFilter/WorkoutFilter";
import React, { useState } from "react";

function WorkoutList(props) {
  const [year, setYear] = useState("2021");
  const changeYearHandler = (year) => {
    setYear(year);
  };

  const filteredYear = props.workout.filter(
    (e) => {
      return e.date.getFullYear().toString() === year
    });

  return (
    <div className="workout">
      <WorkoutFilter year={year} onChangeYear={changeYearHandler} />
      {filteredYear.length ? filteredYear.map((el) => (
        <WorkoutItem
          key={el.id}
          date={el.date}
          description={el.description}
          distance={el.distance}
        />
      )) : `Ничего не найдено за ${year} год`
      }
    </div>
  );
}

export default WorkoutList;
