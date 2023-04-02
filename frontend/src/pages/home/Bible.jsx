import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Bible() {
  const navigate = useNavigate();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body m-auto align-middle justify-items-center">
        <div class="grid justify-items-center ...">
          <h2 className="card-title">
            Our important upcoming events are as follows:
          </h2>
          <p className="mt-5">
            Use the buttons below to find where you need to go
          </p>
        </div>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1591643671657-d634fe5db0af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Album"
        />
      </figure>
    </div>
  );
}

export default Bible;
