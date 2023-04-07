import React from "react";
import { DateTime } from "luxon";

function EventCard({ event }) {
  const tagBadges = event.tag.map((tag) => {
    return (
      <div className="badge badge-secondary badge-outline gap-2">{tag}</div>
    );
  });

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-48">
          <img src={event.image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="grid grid-col-1 justify-start">
            <h2 className="card-title">{event.name}</h2>
            <p className="text-left">{event.description}</p>
            <p class="text-xs text-left py-2 text-neutral-500">
              {DateTime.fromISO(event.date_time).toFormat("d LLL yyyy - h:mm")}
            </p>
            <div class="flex justify-start">
              <div class="flex flex-wrap items-end justify-center space-x-2 space-y-2">
                {tagBadges}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
