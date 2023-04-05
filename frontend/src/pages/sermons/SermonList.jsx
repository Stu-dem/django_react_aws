import React from "react";

import SermonCard from "../../components/layout/SermonCard";

function SermonsList({ sermonList, setCurrentSermon }) {
  const sermons = sermonList.map((sermon) => {
    return <SermonCard {...{ sermon }} setCurrentSermon={setCurrentSermon} />;
  });

  return (
    <div class="container max-w-7xl p-3 rounded-xl bg-base-200">
      <div class="flex flex-wrap">{sermons}</div>
    </div>
  );
}

export default SermonsList;
