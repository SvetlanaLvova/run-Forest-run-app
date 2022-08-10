import "./WorkoutItem.css";
import WorkoutDate from "../WorkoutDate/WorkoutDate";

function WorkoutItem(props) {
  
  return (
    <div className="workout-item">
      <WorkoutDate date={props.date} />
      <div className="workout-item__description">
        <h2>{props.description}</h2>
        <div className="workout-item__distance">{props.distance}км</div>
      </div>
    </div>
  );
}

export default WorkoutItem;
