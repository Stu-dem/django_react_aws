import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  return (
    <div className="flex flex-row text-3xl justify-center pb-3">
      <button onClick={skipBackward}>
        <IoPlayBackSharp />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <button onClick={skipForward}>
        <IoPlayForwardSharp />
      </button>
    </div>
  );
};

export default Controls;
