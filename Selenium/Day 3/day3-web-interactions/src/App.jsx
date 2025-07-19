import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ButtonsLinks from "./pages/ButtonsLinks";
import Forms from "./pages/Forms";
import Dropdowns from "./pages/Dropdowns";
import Delays from "./pages/Delays";
import CheckboxesRadios from "./pages/CheckboxesRadios";
import MiniProject from "./pages/MiniProject";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Day 3 - Web Interactions</h1>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
            <li><Link to="/buttons-links">Buttons & Links</Link></li>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/dropdowns">Dropdowns</Link></li>
            <li><Link to="/delays">Delays</Link></li>
            <li><Link to="/checkboxes-radios">Checkboxes & Radios</Link></li>
            <li><Link to="/mini-project">Mini-Project</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/buttons-links" element={<ButtonsLinks />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/dropdowns" element={<Dropdowns />} />
          <Route path="/delays" element={<Delays />} />
          <Route path="/checkboxes-radios" element={<CheckboxesRadios />} />
          <Route path="/mini-project" element={<MiniProject />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
