import React from "react";

import Overview from "./Overview";

import ChildCard from "../../components/layout/ChildCard";

function About() {
  const aboutUsList = [
    {
      id: 1,
      title: "Beliefs statement",
      description: "This is where we can list our church's beliefs.",
      image_url:
        "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Church governance",
      description: "This is where we describe how our church works.",
      image_url:
        "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Church history",
      description: "This is where can record our history.",
      image_url:
        "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "People",
      description:
        "This is where can let visitors know about our church leadership and members.",
      image_url:
        "https://images.unsplash.com/photo-1604931668626-ab49cb27d952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const aboutUsContent = aboutUsList.map((about) => {
    return (
      <ChildCard
        title={about.title}
        text={about.description}
        image_url={about.image_url}
      />
    );
  });

  return (
    <>
      <Overview />
      <div class="flex flex-col items-center space-y-4 mt-3">
        <div className="flex space-y-3 flex-col lg:flex-row lg:items-start lg:space-x-3 lg:space-y-0 p-3">
          <div class="flex items-center justify-center p-8 rounded-xl bg-base-200 shadow-xl">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <div class="container max-w-7xl px-4">
                  <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3">
                    {aboutUsContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
