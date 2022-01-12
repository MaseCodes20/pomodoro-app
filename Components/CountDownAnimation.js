import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

function CountDownAnimation({ k = 1, timer = 20, animate = true, children }) {
  const { stopTimer } = useContext(SettingContext);

  const duration = (time) => {
    return time * 60;
  };

  return (
    <div>
      <CountdownCircleTimer
        k={k}
        isPlaying={animate}
        duration={duration(timer)}
        colors={["#0E6973", "#0E7373", "#F25E7A", "#A60A33"]}
        colorsTime={[
          duration(timer),
          (duration(timer) / 4) * 3,
          duration(timer) / 2,
          0,
        ]}
        strokeWidth={6}
        size={220}
        trailColor=""
        onComplete={() => {
          stopTimer();
        }}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  );
}

export default CountDownAnimation;
