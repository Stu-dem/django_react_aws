import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/authentication/forms/LoginForm";

function Login() {
  return (
    <div className="">
      <div className="">
        <h1>Welcome to the site</h1>
        <p>Use the form below to login with your credentials.</p>
        <p>
          <Link to="/registration/">Register</Link> here if you do not have an
          account with us yet...
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
