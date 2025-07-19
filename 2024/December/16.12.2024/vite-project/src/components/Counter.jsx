function Counter({ setCount, count, name }) {
  function counterUp() {
    setCount(count + 1);
  }

  function counterDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={counterUp}>+</button>
      <p>count is {count}</p>
      <button onClick={counterDown}>-</button>

      <p>My name is {name}</p>
    </div>
  );
}

export default Counter;
