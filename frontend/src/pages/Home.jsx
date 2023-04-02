import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./home/Welcome";
import Events from "./home/Events";
import Youth from "./home/Youth";
import Bible from "./home/Bible";

function Home() {
  const scrollToEvents = useRef();
  const scrollToYouth = useRef();
  const scrollToBible = useRef();

  return (
    <>
      <div className="pb-3">
        <Welcome
          scrollEvents={scrollToEvents}
          scrollYouth={scrollToYouth}
          scrollBible={scrollToBible}
        />
      </div>

      <div class="grid justify-items-center space-y-3">
        <div ref={scrollToEvents}>
          <Events />
        </div>
        <div ref={scrollToYouth}>
          <Youth />
        </div>
        <div ref={scrollToBible}>
          <Bible />
        </div>
      </div>
    </>
  );
}

export default Home;
