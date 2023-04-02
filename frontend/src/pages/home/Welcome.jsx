import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome({ scrollEvents, scrollYouth, scrollBible }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body m-auto align-middle justify-items-center">
          <div class="grid justify-items-center ...">
            <h2 className="card-title">
              Welcome to Underberg Congregational Church
            </h2>
            <p className="mt-5">
              Use the buttons below to find where you need to go
            </p>
            <div className="btn-group pt-3">
              <button
                className="btn btn-primary w-36"
                onClick={() =>
                  scrollEvents.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Upcoming events
              </button>
              <button
                className="btn btn-primary w-36"
                onClick={() =>
                  scrollYouth.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Kids & Youth
              </button>
              <button
                className="btn btn-primary w-36"
                onClick={() =>
                  scrollBible.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Bible studies
              </button>
            </div>
            <div className="btn-group">
              <button
                className="btn btn-primary w-36"
                onClick={() => navigate("/sermons/")}
              >
                Sermons
              </button>
              <button
                className="btn btn-primary w-36"
                onClick={() => navigate("/ministries/")}
              >
                Ministries
              </button>
              <button
                className="btn btn-primary w-36"
                onClick={() => navigate("/people/")}
              >
                People
              </button>
            </div>
          </div>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1467070607100-22fd5b4f38ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Album"
          />
        </figure>
      </div>
    </>
  );
}

export default Welcome;
