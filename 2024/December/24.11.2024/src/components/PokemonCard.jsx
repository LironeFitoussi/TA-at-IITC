import { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
//   console.log(pokemon);

  const fetchPokemon = async () => {
    const { data } = await axios.get(pokemon.url);
    // console.log(data)
    setPokemonData(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    pokemonData.name && (
      <div
        style={{
          backgroundColor: "#f3f3f3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25vw",
          height: "20vh",
          borderRadius: "10px",
          border: "1px solid #0c0c0c",
          padding: "10px"
        }}
      >
        <h4>{pokemon.name}</h4>
        <img src={pokemonData?.sprites?.front_default} alt="" />
      </div>
    )
  );
};

export default PokemonCard;
