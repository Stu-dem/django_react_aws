import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/layout/Hero";

function Welcome() {
  const navigate = useNavigate();

  const buttonList = [
    {
      id: 1,
      title: "Sermons",
      link: "/sermons/",
    },
    {
      id: 2,
      title: "Church life",
      link: "/church-life/",
    },
    {
      id: 3,
      title: "Giving",
      link: "/giving/",
    },
    {
      id: 4,
      title: "Events",
      link: "/events/",
    },
  ];

  const buttonContent = buttonList.map((button) => {
    return (
      <button
        className="btn btn-primary w-24 md:w-38"
        onClick={() => navigate(button.link)}
      >
        {button.title}
      </button>
    );
  });

  const content = (
    <>
      <p class="max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl">
        To know Christ and the power of his resurrection.
      </p>
      <p class="max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl">
        Use the buttons below to find where you need to go
      </p>
      <div className="">
        <div className="btn-group pt-6">{buttonContent}</div>
      </div>
    </>
  );

  return (
    <>
      <Hero
        title="Welcome to Underberg Congregational Church"
        content={content}
        image_url="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
      />
    </>
  );
}

export default Welcome;
