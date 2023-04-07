import React, { useState } from "react";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

import SermonsList from "./SermonList";
import { tracks } from "../../assets/tracks";
import Paper from "../../components/layout/Paper";

function Sermons() {
  const [currentSermon, setCurrentSermon] = useState(tracks[0]);
  return (
    <>
      <div className="grid grid-col-1 lg:w-10/12 space-y-6 mx-auto mt-6">
        <div className="w-9/12 md:2/3 mx-auto">
          <Paper>
            <h1 class="text-gray-900 text-4xl font-bold mb-2">
              Sermon archive
            </h1>
            <p class="text-gray-700 text-lg text-center font-light w-11/12">
              You can find many of our past sermons here in case you've missed
              something or would like to get a feel for our church. Scroll down
              and choose a sermon to listen to from our archive and then use the
              audio player to manage your playback.
            </p>

            <p class="text-gray-700 text-xl font-semibold text-center w-11/12 py-4">
              Please note that these are not our actual sermons - only dummy
              content to prove the concept...
            </p>
            <AudioPlayer {...{ currentSermon }} />
          </Paper>
        </div>
        <div className="w-9/12 md:2/3 mx-auto">
          <SermonsList
            {...{ sermonList: tracks }}
            setCurrentSermon={setCurrentSermon}
          />
        </div>
      </div>
    </>
  );
}

export default Sermons;
