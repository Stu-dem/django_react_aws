import React from "react";
import { useNavigate } from "react-router-dom";
import useUserActions, { getUser } from "../../hooks/user-actions";

function NavigationBar() {
  const navigate = useNavigate();
  const userActions = useUserActions();
  const user = getUser();
  const handleLogoutClick = () => {
    userActions.logout();
  };

  const loginLogoutButton = user ? (
    <button
      type="button"
      onClick={handleLogoutClick}
      className="btn btn-secondary"
    >
      Logout
    </button>
  ) : (
    <div className="btn-group">
      <button
        type="button"
        onClick={() => navigate("/login/")}
        className="btn btn-primary"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate("/registration/")}
        className="btn btn-primary"
      >
        Signup
      </button>
    </div>
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
        </div>

        <button className="btn btn-ghost normal-case text-xl">
          Django+React+daisyUI
        </button>
      </div>
      <div className="navbar-end">{loginLogoutButton}</div>
    </div>
  );
}

export default NavigationBar;
