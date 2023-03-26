import React from "react";
import { getUser } from "../hooks/user-actions";

function Profile() {
  const user = getUser();

  return (
    <div className="">
      <h1>Profile</h1>
      <p className="">Welcome {user.first_name}!</p>
    </div>
  );
}

export default Profile;
