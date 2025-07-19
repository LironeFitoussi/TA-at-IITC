import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [ability, setAbility] = useState("")
  // const [type, setType] = useState("electric")

  // const [pokemon, setPokemon] = useState({
  //   name: "",
  //   ability: "",
  //   type: "electric",
  // });

  // const handleFormChange = (e) => {
    // console.log(...pokemon);
  //   setPokemon((prevPokemon) => {
  //     return { ...prevPokemon, [e.target.name]: e.target.value };
  //   });
  // };

  const addPokemon = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())
    console.log(formObj);
  };

  return (
    <>
      <form onSubmit={addPokemon}>
        <h1>Add a Pokemon</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            // value={pokemon.name}
            type="text"
            name="name"
            id="name"
            // onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="abilitiy">Ability: </label>
          <input
            type="text"
            name="ability"
            id="ability"
            // value={pokemon.ability}
            // onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            name="type"
            id="type"
            // value={pokemon.type}
            // onChange={handleFormChange}
          >
            <option value="electric">Electric</option>
            <option value="water">Water</option>
            <option value="fire">Fire</option>
            <option value="fly">Fly</option>
          </select>
        </div>
        <button type="submit">Send Form</button>
      </form>
    </>
  );
}

export default App;
