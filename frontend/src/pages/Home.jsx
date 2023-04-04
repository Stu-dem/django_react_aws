import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./home/Welcome";
import Events from "./home/Events";
import Contact from "./contact/Contact";

function Home() {
  const scrollToEvents = useRef();
  const scrollToYouth = useRef();
  const scrollToBible = useRef();

  return (
    <>
      <Welcome />
      <div class="flex flex-col items-center space-y-4 mt-3">
        <div className="flex space-y-3 flex-col lg:flex-row lg:items-start lg:space-x-3 lg:space-y-0 p-3">
          <Events />
        </div>
        <div className="flex space-y-3 flex-col lg:flex-row lg:items-start lg:space-x-3 lg:space-y-0 p-3">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
