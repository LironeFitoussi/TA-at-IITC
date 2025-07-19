import { useEffect, useRef, useState } from "react";
import "./App.css";

import Child from "./Child";
function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <Child />
    </>
  );
}

export default App;
