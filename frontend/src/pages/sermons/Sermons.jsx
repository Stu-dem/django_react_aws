import React, { useState } from "react";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

import Overview from "./Overview";
import SermonsList from "./SermonList";
import { tracks } from "../../assets/tracks";

function Sermons() {
  const [currentSermon, setCurrentSermon] = useState(tracks[0]);
  return (
    <>
      <div className="flex space-y-3 flex-col items-center lg:space-x-3 lg:space-y-5 p-3">
        <div class="flex flex-col lg:w-1/2 items-center shadow-xl p-8 rounded-xl bg-base-200">
          <h1 class="text-gray-900 text-4xl font-bold mb-2">Sermon archive</h1>
          <p class="text-gray-700 text-lg text-center font-light w-11/12">
            You can find many of our past sermons here in case you've missed
            something or would like to get a feel for our church. Scroll down
            and choose a sermon to listen to from our archive and then use the
            audio player to manage your playback.
          </p>
          <div className="m-4"></div>
          <AudioPlayer {...{ currentSermon }} />
        </div>
        <SermonsList
          {...{ sermonList: tracks }}
          setCurrentSermon={setCurrentSermon}
        />
      </div>
    </>
  );
}

export default Sermons;
