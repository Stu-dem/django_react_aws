import { Route, Routes } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home";
import ChurchLife from "./pages/church-life/ChurchLife";
import About from "./pages/about/About";
import Layout from "./components/layout/Base";
import Sermons from "./pages/sermons/Sermons";
import Giving from "./pages/giving/Giving";
import Events from "./pages/events/Events";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons/" element={<Sermons />} />
        <Route path="/church-life/" element={<ChurchLife />} />
        <Route path="/giving/" element={<Giving />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/about/" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
