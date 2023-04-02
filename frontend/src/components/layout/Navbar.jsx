import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const genericPages = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Contact us", url: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const mdNavLinks = genericPages.map((page) => (
    <li>
      <button className="btn btn-primary" onClick={() => navigate(page.url)}>
        {page.name}
      </button>
    </li>
  ));

  const mdNavOptions = (
    <div className="hidden md:flex items-center space-x-1">{mdNavLinks}</div>
  );

  return (
    <div className="navbar bg-white">
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
        <button className="btn btn-ghost normal-case text-black text-xl">
          Underberg Congregational Church
        </button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-black px-1">{mdNavOptions}</ul>
      </div>
    </div>
  );
}

export default Navbar;
