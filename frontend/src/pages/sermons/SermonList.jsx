import React from "react";

import SermonCard from "../../components/layout/SermonCard";

function SermonsList({ sermonList, setCurrentSermon }) {
  const sermons = sermonList.map((sermon) => {
    return <SermonCard {...{ sermon }} setCurrentSermon={setCurrentSermon} />;
  });

  return (
    <div class="container p-3 rounded-xl bg-base-200">
      <div class="grid grid-cols-1 space-y-3 md:grid-cols-2 md:space-x-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lg:space-x-3">
        {sermons}
      </div>
    </div>
  );
}

export default SermonsList;
