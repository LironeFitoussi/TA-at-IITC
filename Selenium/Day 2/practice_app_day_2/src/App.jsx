import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Basics from "./pages/Basics";
import Intermediate from "./pages/Intermediate";
import MultipleElements from "./pages/MultipleElements";
import DynamicLocators from "./pages/DynamicLocators";
import Debugging from "./pages/Debugging";
import RealWorld from "./pages/RealWorld";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <header>
          <h1>Practice Exercises for Locating Elements</h1>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
              <li><Link to="/">Basics</Link></li>
              <li><Link to="/intermediate">Intermediate</Link></li>
              <li><Link to="/multiple-elements">Multiple Elements</Link></li>
              <li><Link to="/dynamic-locators">Dynamic Locators</Link></li>
              <li><Link to="/debugging">Debugging</Link></li>
              <li><Link to="/real-world">Real-World</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Basics />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/multiple-elements" element={<MultipleElements />} />
          <Route path="/dynamic-locators" element={<DynamicLocators />} />
          <Route path="/debugging" element={<Debugging />} />
          <Route path="/real-world" element={<RealWorld />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
