import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

// React Router Dom Imports
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);
  const [isApple, setIsApple] = useState(false);
  const [isAsus, setIsAsus] = useState(false);
  const [isHacker, setIsHacker] = useState(false);
  const [isDell, setIsDell] = useState(false);

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button>
        <Link to="/sign-in">Sign IN</Link>
      </button>
      {/* <button onClick={() => setIsApple((v) => !v)}>Apple</button>
      <button onClick={() => setIsAsus((v) => !v)}>Asus</button>
      <button onClick={() => setIsHacker((v) => !v)}>Hacker</button>
      <button onClick={() => setIsDell((v) => !v)}>Dell</button> */}
      <button>
        <Link
          to={`/query-print?apple=${isApple}&asus=${isAsus}&dell=${isDell}&hacker=${isHacker}`}
        >
          Query Print
        </Link>
      </button>
      <button>
        <Link to='/dummy'>
          Dummy Page
        </Link>
      </button>
    </>
  );
};

export default Home;
