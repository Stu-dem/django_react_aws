import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Youth() {
  const navigate = useNavigate();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="card-body m-auto align-middle justify-items-center">
        <div class="grid justify-items-center ...">
          <h2 className="card-title">Youth</h2>
          <p className="mt-5">This is one of our most important ministries.</p>
          <p className="">
            We take the time we spend with our children very seriously.
          </p>
        </div>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Album"
        />
      </figure>
    </div>
  );
}

export default Youth;
