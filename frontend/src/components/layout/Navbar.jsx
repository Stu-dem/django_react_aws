import className from "classname";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const genericPages = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Contact us", url: "/contact" },
];

function Navbar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  // const token = useSelector((state) => state.users.currentUser.auth_token);
  // const [logout, { isSuccess }] = useLogoutMutation();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleLogoutClick = () => {
    // const request = logout();
    // toast.promise(request, {
    //   loading: "Logging you out...",
    //   success: "Logout success!",
    //   error: "Something went wrong logging you out...",
    // });
    navigate("/");
  };

  const loginLogoutButton = (
    <div className="btn-group">
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="btn btn-primary"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate("/registration")}
        className="btn btn-primary"
      >
        Signup
      </button>
    </div>
  );

  const handleDropdownClick = (page) => {
    setHamburgerOpen(false);
    navigate(page.url);
  };

  const mdNavLinks = genericPages.map((page) => (
    <li>
      <button onClick={() => navigate(page.url)}>{page.name}</button>
    </li>
  ));

  const mdNavOptions = (
    <div className="hidden md:flex items-center space-x-1">{mdNavLinks}</div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {mdNavLinks}
          </ul>
        </div>

        <div className="btn-group">
          <button className="btn btn-ghost normal-case text-xl">
            Django+React+daisyUI
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => toggleSidebar()}
          >
            {sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{mdNavOptions}</ul>
      </div>
      <div className="navbar-end">{loginLogoutButton}</div>
    </div>
  );
}

export default Navbar;
