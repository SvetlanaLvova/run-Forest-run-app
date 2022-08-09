import WorkoutList from "./components/WorkoutList/WorkoutList";
import Logo from "./components/Logo/Logo";
import NewWorkout from "./components/NewWorkout/NewWorkout";
import workoutFromDb from "./server/fakeServer";

function App() {
  const saveWorkoutDataHandler = (inputWorkoutData) => {
    console.log(inputWorkoutData);
  };

  return (
    <>
      <Logo />
      <NewWorkout onSaveWorkoutData={saveWorkoutDataHandler} />
      <WorkoutList workout={workoutFromDb} />
    </>
  );
}

export default App;
