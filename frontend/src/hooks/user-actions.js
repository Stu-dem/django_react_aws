import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useUserActions() {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8000/api";

  function login(data) {
    return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
      setUserData(res);
      navigate("/");
    });
  }

  function logout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  function register(data) {
    return axios.post(`${baseURL}/auth/register/`, data).then((res) => {
      setUserData(res);
      navigate("/");
    });
  }

  return {
    login,
    register,
    logout,
  };
}

export function getUser() {
  const auth = JSON.parse(localStorage.getItem("auth"));

  let user = null;
  if (auth !== null) {
    user = auth.user !== null ? auth.user : null;
  }
  return user;
}

export function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  let access = null;
  if (auth !== null) {
    access = auth.access !== null ? auth.access : null;
  }
  return access;
}

export function getRefreshToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  let refresh = null;
  if (auth !== null) {
    refresh = auth.refresh !== null ? auth.refresh : null;
  }
  return refresh;
}

export function setUserData(res) {
  localStorage.setItem(
    "auth",
    JSON.stringify({
      access: res.data.access,
      refresh: res.data.refresh,
      user: res.data.user,
    })
  );
}
