import className from "classname";
import React, { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);

    if (width < breakpoint) {
      setSidebarOpen(false);
    }
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);

  const asideClass = className(
    "flex-none h-full mt-4 top-0 shadow z-10 overflow-auto rounded-tr-2xl sidebar shadow-lg rounded duration-150 ease-in bg-base-200 overflow-hidden w-0",
    // {
    //   "-translate-x-full": !sidebarOpen,
    // },
    // {
    //   "translate-x-0": sidebarOpen,
    // },
    {
      "w-0": !sidebarOpen,
    },
    {
      "w-64": sidebarOpen,
    }
  );

  return (
    <div className="min-h-screen flex flex-col h-screen">
      <header>
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </header>
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <aside className={asideClass}>
          <Sidebar sidebarOpen={sidebarOpen} />
        </aside>
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
