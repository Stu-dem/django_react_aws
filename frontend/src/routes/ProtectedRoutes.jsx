import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let user;
  try {
    user = JSON.parse(localStorage.getItem("auth"));
  } catch (e) {
    user = null;
  }
  console.log(`User: ${user}`);
  return user ? <>{children}</> : <Navigate to="/login/" />;
}

export default ProtectedRoute;
