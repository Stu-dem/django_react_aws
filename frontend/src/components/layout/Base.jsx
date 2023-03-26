import React from "react";
import NavigationBar from "./Navbar";

function Layout(props) {
  return (
    <div className="">
      <NavigationBar />
      <div className="">{props.children}</div>
    </div>
  );
}

export default Layout;
