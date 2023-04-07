import React, { useEffect } from "react";
import Paper from "../../components/layout/Paper";
import EventCard from "../../components/layout/EventCard";

import { useGetUpcomingEventsQuery, useGetPastEventsQuery } from "../../store";

function Events() {
  const eventsUpcoming = useGetUpcomingEventsQuery();

  let contentUpcoming;

  if (eventsUpcoming.isLoading) {
    contentUpcoming = "Loading...";
  } else if (eventsUpcoming.isSuccess) {
    contentUpcoming = eventsUpcoming.data.map((event) => (
      <div className="w-full md:w-1/3 lg:w-1/4">
        <EventCard key={event.id} event={event} />
      </div>
    ));
  } else if (eventsUpcoming.isError) {
    contentUpcoming = <div>{eventsUpcoming.error.toString()}</div>;
  }

  const eventsPast = useGetPastEventsQuery();

  let contentPast;

  if (eventsPast.isLoading) {
    contentPast = "Loading...";
  } else if (eventsPast.isSuccess) {
    contentPast = eventsPast.data.map((event) => (
      <div className="w-full md:w-1/3 lg:w-1/4">
        <EventCard key={event.id} event={event} />
      </div>
    ));
  } else if (eventsPast.isError) {
    contentPast = <div>{eventsPast.error.toString()}</div>;
  }

  return (
    <div className="p-5 w-11/12 m-auto">
      <Paper>
        <div className="grid grid-cols-1">
          <div className="max-w-7xl m-auto">
            <h1 class="text-gray-900 text-4xl font-bold mb-2">UCC events</h1>
            <p class="text-gray-700 text-lg font-light">
              We're so glad that you are here. Our church is a
              community-focussed church. We partner with various organisations
              (mostly in unofficial ways) and do what we can to build a stronger
              and more God-fearing town. Below you can get a feel for the kinds
              of things we do here at UCC.
            </p>

            <h1 class="text-gray-900 text-2xl font-bold pt-3">
              Upcoming events
            </h1>
            <p class="text-gray-700 text-lg pb-4">
              If you'd like to join us to see what we are about, we'll be
              hosting the following events soon.
            </p>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-3 w-full m-auto md:space-x-3">
              {contentUpcoming}
            </div>
          </div>

          <h1 class="text-gray-900 text-2xl font-bold p-5">Past events</h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 w-full m-auto md:space-x-3">
            {contentPast}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Events;
