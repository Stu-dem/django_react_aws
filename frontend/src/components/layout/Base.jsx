import className from "classname";
import React, { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col h-screen bg-neutral">
      <header>
        <Navbar />
      </header>
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <div className="flex flex-col w-full">
          <main className="flex-1 m-2 mt-4 overflow-y-auto ">{children}</main>
          <div className="mx-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
