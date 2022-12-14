import React, { useState } from "react";
import "./NewWorkout.css";

function NewWorkout(props) {
  const [inputName, setInputName] = useState(""); 
  const [inputDistance, setInputDistance] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false)

  const nameChangeHandler = (event) => { 
    setInputName(event.target.value);
  };

  const distanceChangeHandler = (event) => { 
    setInputDistance(event.target.value);
  };

  const dateChangeHandler = (event) => { 
    setInputDate(event.target.value);
  };

  const inputWordChangeHandler = () => {
    setIsFormVisible(true)
  };

  const cancelInputWorkoutHeandler = () => {
    setIsFormVisible(false)
  }

  const submitHandler = (event) => { 
    event.preventDefault();


    const workoutData = {
      id: Math.random().toString(),
      description: inputName,
      distance: inputDistance,
      date: new Date(inputDate)
    }
    props.onSaveWorkoutData(workoutData)
    setInputName('')
    setInputDistance('')
    setInputDate('')
  };

  return (
    <div className="new-workout">
      {!isFormVisible && <button onClick={inputWordChangeHandler}>Добавить новую тренировку</button>}
      {isFormVisible && <form onSubmit={submitHandler}>
        <div className="new-workout__controls">
          <div className="new-workout__control">
            <label>Название забега:</label>
            <input type="text" value={inputName} onChange={nameChangeHandler} />
          </div>
          <div className="new-workout__control">
            <label>Дистанция:</label>
            <input
              type="text"
              min="0.001"
              step="0.001"
              value={inputDistance}
              onChange={distanceChangeHandler}
            />
          </div>
          <div className="new-workout__control">
            <label>Дата:</label>
            <input type="date" min="2022-01-01" value={inputDate} onChange={dateChangeHandler} />
          </div>
          <div className="new-workout__actions">
            <button type="submit">Записать тренировку</button>
            <button type="button" onClick={cancelInputWorkoutHeandler}>Отмена</button>
          </div>
        </div>
      </form>}
    </div>
  );
}

export default NewWorkout;
