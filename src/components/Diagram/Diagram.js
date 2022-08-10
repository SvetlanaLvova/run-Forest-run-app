import DiagramBar from "../DiagramBar/DiagramBar";
import "./Diagram.css";

function Diagram(props) {
const dataSetsValue = props.dataSets.map(dataSet => dataSet.value)
const maxMonthCosts = Math.max(...dataSetsValue)

  return (
    <div className="diagram">
      {props.dataSets.map((e) => (
        <DiagramBar
          key={e.label}
          value={e.value}
          maxValue={maxMonthCosts}
          label={e.label}
        />
      ))}
    </div>
  );
}

export default Diagram;
