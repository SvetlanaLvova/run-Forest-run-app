import "./WorkoutFilter.css";

function WorkoutFilter(props) {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    
  };

  return (
    <div>
      <div className="workout-filter">
        <div className="workout-filter__control">
          <label>Статистика за год:</label>
          <select value={props.year} onChange={yearChangeHandler}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default WorkoutFilter;
