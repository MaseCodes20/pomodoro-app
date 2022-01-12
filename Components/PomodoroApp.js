import { useContext, useEffect } from "react";
import { SettingContext } from "../context/SettingsContext";
import Button from "./Button";
import CountDownAnimation from "./CountDownAnimation";
import SetPomodoro from "./SetPomodoro";

function PomodoroApp() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    settingButton,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingContext);

  useEffect(() => updateExecute(executing), [executing, startAnimate]);
  return (
    <div className="appContainer">
      <div className="text-center">
        <div className="font-bold text-center text-5xl mb-4  text-white">
          <h1>Pomodoro</h1>
        </div>

        <small className="text-white text-xl">Be Productive</small>
      </div>

      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <div>
          <ul className="flex justify-center">
            <li className="flex justify-between p-2">
              <div
                className={`${
                  executing.active === "work"
                    ? "TimerBtn bg-[#0E6973]"
                    : "TimerBtn"
                }`}
              >
                <Button
                  title="Work"
                  _callback={() => setCurrentTimer("work")}
                />
              </div>
              <div
                className={`${
                  executing.active === "short"
                    ? "TimerBtn bg-[#0E6973]"
                    : "TimerBtn"
                }`}
              >
                <Button
                  title="Short Break"
                  _callback={() => setCurrentTimer("short")}
                />
              </div>
              <div
                className={`${
                  executing.active === "long"
                    ? "TimerBtn bg-[#0E6973]"
                    : "TimerBtn"
                }`}
              >
                <Button
                  title="Long Break"
                  _callback={() => setCurrentTimer("long")}
                />
              </div>
            </li>
          </ul>

          {/* Settings Button */}
          <div className="bg-white text-center hover:bg-transparent hover:text-white  rounded-md max-w-fit mx-auto p-2">
            <Button title="Settings" _callback={settingButton} />
          </div>

          {/* Count Down Timer */}
          <div className="my-4 justify-center">
            <div className="max-w-fit mx-auto rounded-full shadow-md shadow-white text-white">
              <CountDownAnimation
                k={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountDownAnimation>
            </div>
          </div>

          {/* Button Wrapper */}
          <div className="flex justify-center">
            <div className="m-2">
              <div
                className={`"startPause" ${
                  startAnimate ? "startPause bg-[#0E6973]" : "startPause"
                }`}
              >
                <Button title="start" _callback={startTimer} />
              </div>
            </div>

            <div className="m-2">
              <div
                className={`"startPause" ${
                  !startAnimate ? "startPause bg-[#A60A33]" : "startPause"
                }`}
              >
                <Button title="pause" _callback={pauseTimer} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default PomodoroApp;
