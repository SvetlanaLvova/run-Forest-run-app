import "./WorkoutDate.css";

function WorkoutDate(props) {

  const month = props.date.toLocaleString("ru-Ru", { month: "long"});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-Ru", { day: "2-digit"});

  return (
    <div className="workout-date">
    <div className="workout-date__month">{month}</div>
    <div className="workout-date__year">{year}</div>
    <div className="workout-date__day">{day}</div>
  </div>
  );
}

export default WorkoutDate;
