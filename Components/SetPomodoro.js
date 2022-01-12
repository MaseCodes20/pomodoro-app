import { useContext, useState } from "react";
import { SettingContext } from "../context/SettingsContext";
import Button from "./Button";

function SetPomodoro() {
  const { updateExecute } = useContext(SettingContext);

  const [newTimer, setNewTimer] = useState({
    work: 30,
    short: 10,
    long: 15,
    active: "work",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "short":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "long":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="max-w-fit mx-auto">
      <form noValidate>
        <div className="flex justify-center">
          <div className="max-w-fit m-2">
            <div className="text-center text-yellow-400 max-w-fit mx-auto">
              <h1>Work</h1>
            </div>
            <div className="border-2 rounded-md p-2 m-2">
              <input
                name="work"
                onChange={handleChange}
                value={newTimer.work}
                className="bg-transparent text-center text-white"
                size="4"
              />
            </div>
          </div>

          <div className="max-w-fit m-2">
            <div className=" text-center text-yellow-400 max-w-fit mx-auto">
              <h1>Short Break</h1>
            </div>
            <div className="border-2 rounded-md p-2 m-2">
              <input
                name="short"
                onChange={handleChange}
                value={newTimer.short}
                className="bg-transparent text-center text-white"
                size="4"
              />
            </div>
          </div>
          <div className="max-w-fit m-2">
            <div className="text-center text-yellow-400 max-w-fit mx-auto">
              <h1>Long Break</h1>
            </div>
            <div className="border-2 rounded-md p-2 m-2">
              <input
                name="long"
                onChange={handleChange}
                value={newTimer.long}
                className="bg-transparent text-center text-white"
                size="4"
              />
            </div>
          </div>
        </div>
        {/* Set Timer Button */}
        <div className="text-center border bg-yellow-400 hover:bg-yellow-500 text-black rounded-md max-w-fit p-2 mb-4 mx-auto">
          <Button title="Set Timer" _callback={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default SetPomodoro;
