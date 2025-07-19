import { useState, useEffect } from "react";
import axios from "axios";
import styles from  './Pokemon.module.css'

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div className={styles.card}>
        <h1>{name}</h1>
        <div>
          <h2>Abilties</h2>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Pokemon;
