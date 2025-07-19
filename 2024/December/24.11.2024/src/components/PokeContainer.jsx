import { useState, useEffect } from "react";
import axios from "axios";

// Components
import PokemonCard from "./PokemonCard";

const PokeContainer = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    // console.log(data.results);

    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  //   console.log(pokemons);

  return (
    pokemons.length > 0 && (
      <>
        <h1>This is Pokemons Container</h1>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4vh"
        }}>
          {pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
        </div>
      </>
    )
  );
};

export default PokeContainer;
