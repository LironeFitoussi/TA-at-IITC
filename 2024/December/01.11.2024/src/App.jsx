import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
};

// useSearchParams
const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemonData, setPokemonData] = useState(null);
  console.log();
  const pokemonId = searchParams.get("pokemonId");

  // Fetch pokemon data from API
  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (pokemonId) {
      fetchPokemon(pokemonId);
    }
  }, [pokemonId]);


  return (
    <div>
      <h2>About</h2>
      {/* Render Pokemon */}
    </div>
  )
};
const Contact = () => <h2>Contact</h2>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
