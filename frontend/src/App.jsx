import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Home from "./pages/Home";
import Ministries from "./pages/Ministries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/layout/Base";
import Sermons from "./pages/Sermons";
import People from "./pages/People";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons/" element={<Sermons />} />
        <Route path="/ministries/" element={<Ministries />} />
        <Route path="/people/" element={<People />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/registration/" element={<Registration />} />
        <Route path="/login/" element={<Login />} />
        <Route
          path="/profile/"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
