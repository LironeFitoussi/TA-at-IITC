import { useState, useEffect }  from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePokemonPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});

  const fetchPokemon = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemonData);

  const pokemon = {
    name: "Pikachu",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    height: 4,
    weight: 60,
    base_experience: 112,
    types: [{ type: { name: "electric" } }],
  };

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Types:</p>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePokemonPage;
