import { useState, useEffect } from "react";

import axios from "axios";

const Counter = ({ joke }) => {
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count is {count}
      </button>
      <p>{joke}</p>
    </>
  );
};

export default Counter;
