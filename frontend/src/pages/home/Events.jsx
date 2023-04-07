import React from "react";

import EventCard from "../../components/layout/EventCard";
import Paper from "../../components/layout/Paper";

import { useGetUpcomingEventsQuery } from "../../store";

function Events() {
  const {
    data: events,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUpcomingEventsQuery();

  let content;

  if (isLoading) {
    content = "Loading...";
  } else if (isSuccess) {
    content = events.map((event) => (
      <div className="w-full md:w-1/3 lg:w-1/4">
        <EventCard key={event.id} event={event} />
      </div>
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Paper>
      <div className="grid grid-cols-1">
        <div className="max-w-7xl m-auto">
          <h1 class="text-gray-900 text-4xl font-bold mb-2">Upcoming events</h1>
          <p class="text-gray-700 text-lg w-3/4 mx-auto font-light pt-3 pb-5">
            We're so glad that you are here. If you'd like to join us to see
            what we are about we'll be hosting the following events soon.
          </p>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-3 w-full m-auto md:space-x-3">
            {content}
          </div>
          <div class="grid grid-cols-1 space-y-3 w-full m-auto md:grid-cols-2 md:space-x-3 lg:grid-cols-4 lg:space-x-3"></div>
        </div>
      </div>
    </Paper>
  );
}

export default Events;
