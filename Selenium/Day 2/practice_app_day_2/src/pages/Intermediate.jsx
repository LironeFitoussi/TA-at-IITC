import React from "react";

const Intermediate = () => {
  return (
    <div>
      <h2>Intermediate Locating</h2>
      <ul>
        <li>
          <p>
            <strong>Locate by XPath - Attributes:</strong> 
            Locate a button using XPath with an `@attribute='value'` condition.
          </p>
          <button id="xpath-button">XPath Button</button>
        </li>
        <li>
          <p>
            <strong>Locate by XPath - Text:</strong> 
            Locate an element with XPath using its visible text.
          </p>
          <p>Click Here</p>
        </li>
        <li>
          <p>
            <strong>Locate by CSS Selector - Attributes:</strong> 
            Locate an input field using CSS selectors.
          </p>
          <input type="text" placeholder="CSS Selector Example" />
        </li>
        <li>
          <p>
            <strong>Locate by CSS Selector - Classes:</strong> 
            Locate an element with compound class selectors.
          </p>
          <div className="box example-box">CSS Selector Box</div>
        </li>
      </ul>
    </div>
  );
};

export default Intermediate;
