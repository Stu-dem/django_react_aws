import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/authentication/forms/RegistrationForm";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  return (
    <div className="bg-grey-lighter flex flex-col mt-20">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Registration</h1>
          <RegistrationForm />
          <div className="text-grey-dark mt-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="btn btn-secondary"
            >
              Login
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Forgot your password?{" "}
            <button type="button" className="btn btn-secondary">
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
