import React, { useRef, useState } from "react";

import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

import { BsMusicNoteBeamed } from "react-icons/bs";

function AudioPlayer({ currentSermon }) {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="card sm:w-9/12 md:w-6/12 bg-base-100 shadow-xl">
      <audio
        src={currentSermon.src}
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="flex flex-row justify-center">
        {currentSermon.thumbnail ? (
          <img
            src={currentSermon.thumbnail}
            alt="Audio image"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        ) : (
          <div className="pt-5">
            <span>
              <BsMusicNoteBeamed size={55} />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="card-body">
          <h2 className="card-title">{currentSermon.title}</h2>
          <p>{currentSermon.author}</p>
          <div className="card-actions w-full justify-center">
            <div className="">
              <Controls
                {...{ audioRef, progressBarRef, duration, setTimeProgress }}
              />
              <ProgressBar
                {...{ progressBarRef, audioRef, timeProgress, duration }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
