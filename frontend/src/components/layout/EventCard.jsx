import React from "react";

function EventCard({ title, date, time, description, tags, image_url }) {
  const tagBadges = tags.map((tag) => {
    return (
      <div className="badge badge-secondary badge-outline gap-2">{tag}</div>
    );
  });

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-48">
          <img src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p class="text-xs text-neutral-500">
            {date} - {time}
          </p>
          <div class="flex justify-start">
            <div class="flex flex-wrap items-end justify-center space-x-2 space-y-2">
              {tagBadges}
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More info</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
