import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import useUserActions from "../../../hooks/user-actions";

function RegistrationForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const userActions = useUserActions();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      userActions.login(data).catch((err) => {
        console.log(err);
        if (err.message) {
          setError(err.message);
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        placeholder="Email address"
      />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password_1}
        className="block border border-grey-light w-full p-3 rounded mb-4"
        placeholder="Password"
      />

      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>
      <p>{error}</p>
    </form>
  );
}

export default RegistrationForm;
