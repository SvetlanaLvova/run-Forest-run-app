import "./WorkoutItem.css";
import WorkoutDate from "../WorkoutDate/WorkoutDate";
/* import React, {useState} from 'react'; */

function WorkoutItem(props) {
/* const { id } = props;
const [workout, setDelete] = useState(workout) */ //workout = [массив всех забегов]

  /* const deleteWorkoutHandler = (e) => {
 setDelete (prev => prev.filter((e) => e.id !== id))
} */


  return (
    <div className="workout-item">
      <WorkoutDate date={props.date} />
      <div className="workout-item__description">
        <h2>{props.description}</h2>
        <div className="workout-item__distance">{props.distance}км</div>
        <button className="workout-item__delete" /* onClick={() => deleteWorkoutHandler(workout.id)} */>Удалить</button>
      </div>
    </div>
  );
}

export default WorkoutItem;
