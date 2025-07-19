function Form({ handleSubmit, setScore }) {
  return (
    <div>
      <h1> How did we do? </h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      <ul>
        <li onClick={() => setScore(1)}>1</li>
        <li onClick={() => setScore(2)}>2</li>
        <li onClick={() => setScore(3)}>3</li>
        <li onClick={() => setScore(4)}>4</li>
        <li onClick={() => setScore(5)}>5</li>
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
