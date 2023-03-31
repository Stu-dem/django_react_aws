import className from "classname";
import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ sidebarOpen }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  const sidebarLinks = [
    {
      id: 1,
      title: "Navigation",
      links: [
        {
          title: "Link 1",
          icon: {
            img: (
              <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            ),
            color: "secondary",
          },
          url: "/",
        },
      ],
    },
    {
      id: 1,
      title: "Account",
      links: [
        { title: "Profile", icon: "icon1" },
        { title: "Notifications", icon: "icon1" },
        { title: "Settings", icon: "icon1" },
        {
          title: "Logout",
          icon: "icon1",
          onClick: () => {
            handleLogoutClick();
          },
        },
      ],
    },
  ];

  const sidebarItems = sidebarLinks.map((group) => (
    <>
      <li className="menu-title">
        <span className="my-1 uppercase">{group.title}</span>
      </li>
      {group.links.map((link) => {
        const classNames = className(
          "rounded-2xl",
          link.icon.color
            ? `text-${link.icon.color} stroke-${link.icon.color}`
            : "text-current stroke-current"
        );
        return (
          <li>
            <button onClick={link.onClick} className={classNames}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              {link.title}
            </button>
          </li>
        );
      })}
    </>
  ));

  return (
    <div className="sidebar-content px-4 py-6">
      {sidebarOpen ? <ul className="menu ">{sidebarItems}</ul> : ""}
    </div>
  );
}

export default Sidebar;
