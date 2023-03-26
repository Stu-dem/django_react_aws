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
  return auth.user;
}

export function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.access;
}

export function getRefreshToken() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return auth.refresh;
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
