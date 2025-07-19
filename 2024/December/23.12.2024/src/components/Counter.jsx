import React, { useState, useEffect } from "react";

// Components
import ImageAvatars from './Avatars'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  console.log("component rendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <ImageAvatars />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default Counter;
