import PomodoroApp from "./PomodoroApp";

function Body() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Pomodoro Timer */}
      <PomodoroApp />
    </div>
  );
}

export default Body;
