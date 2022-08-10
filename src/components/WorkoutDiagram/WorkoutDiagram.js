import Diagram from "../Diagram/Diagram";

function WorkoutDiagram(props) {
const diagramDataSets = [
 {label: "Jan", value: 0},
 {label: "Feb", value: 0},
 {label: "Mar", value: 0},
 {label: "Apr", value: 0},
 {label: "May", value: 0},
 {label: "Jun", value: 0},
 {label: "Jul ", value: 0},
 {label: "Aug", value: 0},
 {label: "Sep", value: 0},
 {label: "Oct", value: 0},
 {label: "Nov", value: 0},
 {label: "Dec", value: 0},
]

for (const workout of props.workout) {
  const workoutMonth = workout.date.getMonth();
  diagramDataSets[workoutMonth].value += workout.distance 
}

return <Diagram dataSets={diagramDataSets}/>
}

export default WorkoutDiagram;




