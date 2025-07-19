import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import Components
import Button from "./components/Button.jsx";
import Pokeball from "./components/Pokeball.jsx";


const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
];

function App() {
  const [count, setCount] = useState(0);
  const usersLi = users.map((user) => (
    <li key={`user-${user.id}`}>
      <p>{user.name}</p>
    </li>
  ));

  // console.log(usersLi);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <Button setCount={setCount}>count is {count}</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ul className="read-the-docs">{usersLi}</ul> */}
      <Pokeball />
    </>
  );
}

export default App;
