import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/authentication/forms/RegistrationForm";

function Registration() {
  return (
    <div className="">
      <div className="">
        <h1>Welcome to the site</h1>
        <p>Use the form below to register as a new user.</p>
        <p>
          <Link to="/login/">Login</Link> here if you already have an account
          with us.
        </p>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Registration;
