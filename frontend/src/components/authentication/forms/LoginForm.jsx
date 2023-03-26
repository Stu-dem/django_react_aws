import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function RegistrationForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      axios
        .post("http://localhost:8000/api/auth/login/", data)
        .then((res) => {
          localStorage.setItem(
            "auth",
            JSON.stringify({
              access: res.data.access,
              refresh: res.data.refresh,
              user: res.data.user,
            })
          );
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          if (err.message) {
            setError(err.request.response);
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
        Create Account
      </button>
      <p>{error}</p>
    </form>
  );
}

export default RegistrationForm;
