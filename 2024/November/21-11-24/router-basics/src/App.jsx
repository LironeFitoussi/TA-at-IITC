import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Import
import Home from "./pages/Home/Home.jsx";
import About from './pages/About/About.jsx'
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

import Articles from './pages/Articles/Articles.jsx';

// Nested Articles
import Tech from "./pages/Articles/Tech/Tech.jsx";

// Components Imports
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="news" element={<h2>This is News Section</h2>} />
            <Route path="politics" element={<h2>Politics Section</h2>} />
            <Route path="tech/:id" element={<Tech />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
