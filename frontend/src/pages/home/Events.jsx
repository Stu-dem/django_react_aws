import React from "react";

import EventCard from "../../components/layout/EventCard";

function Events() {
  const text = "text";

  const eventList = [
    {
      id: 1,
      title: "Tenebrae",
      date: "6 April 2023",
      time: "18:30",
      description:
        "Tenebrae service is a time of reflection on the period leading up to Jesus' crucifixion and death.",
      tags: ["service", "event"],
      image_url:
        "https://images.unsplash.com/photo-1505148829325-2a00b0f718b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      id: 2,
      title: "Good Friday",
      date: "7 April 2023",
      time: "9:00",
      description:
        "This service is a reminder of Christ's death on the cross for the redemption of our sins.",
      tags: ["service"],
      image_url:
        "https://images.unsplash.com/photo-1448227700746-d8eab5a1b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Passover celebration",
      date: "7 April 2023",
      time: "18:00",
      description:
        "Join us for a shared meal where we take a deeper look into the meaning behind the Jewish passover celebration.",
      tags: ["event"],
      image_url:
        "https://images.unsplash.com/photo-1520629716099-d147346eb224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    },
    {
      id: 4,
      title: "Easter Sunday",
      date: "9 April 2023",
      time: "9:00",
      description: "Today we celebrate the resurrection of Jesus!",
      tags: ["service"],
      image_url:
        "https://images.unsplash.com/photo-1521106581851-da5b6457f674?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    },
  ];

  const events = eventList.map((event) => {
    return (
      <EventCard
        key={event.id}
        title={event.title}
        date={event.date}
        time={event.time}
        description={event.description}
        tags={event.tags}
        image_url={event.image_url}
      />
    );
  });

  return (
    <div class="flex items-center justify-center shadow-xl p-8 rounded-xl bg-base-200">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <div class="container max-w-7xl px-4">
            <div class="flex flex-wrap justify-center text-center mb-4">
              <div class="w-full lg:w-6/12 px-4">
                <h1 class="text-gray-900 text-4xl font-bold mb-2">
                  Upcoming events
                </h1>
                <p class="text-gray-700 text-lg font-light">
                  We're so glad that you are here. If you'd like to join us to
                  see what we are about we'll be hosting the following events
                  soon
                </p>
              </div>
            </div>
            <div class="flex flex-col space-y-3 lg:space-x-3 lg:flex-row">
              {events}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
