import React from "react";

function ProgressBar({ progressBarRef, audioRef, timeProgress, duration }) {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="">
      <div className="flex flex-row">
        <span>{formatTime(timeProgress)}</span>
        <input
          type="range"
          className="range range-xs px-1"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
