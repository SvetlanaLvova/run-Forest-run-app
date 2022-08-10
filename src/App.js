import React, { useState } from "react";
import WorkoutList from "./components/WorkoutList/WorkoutList";
import Logo from "./components/Logo/Logo";
import NewWorkout from "./components/NewWorkout/NewWorkout";
import workoutFromDb from "./server/fakeServer";

function App() {
  const [workouts, setWorkout] = useState(workoutFromDb);

  const saveWorkoutDataHandler = (inputWorkoutData) => {
    setWorkout((prev) => {
      return [...prev, inputWorkoutData]          
    });
  };

  return (
    <div>
      <Logo />
      <NewWorkout onSaveWorkoutData={saveWorkoutDataHandler} />
      <WorkoutList workout={workouts} />
    </div>
  );
}

export default App;
