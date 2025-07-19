import React from "react";

const Basics = () => {
  return (
    <div>
      <h2>Basics of Locators</h2>
      <ul>
        <li>
          <p>
            <strong>Locate by ID:</strong> 
            Locate an input field and print its placeholder text.
          </p>
          <input id="example-input" placeholder="Type something here..." />
        </li>
        <li>
          <p>
            <strong>Locate by Name:</strong> 
            Locate a form element and type text into it.
          </p>
          <input name="username" placeholder="Enter username" />
        </li>
        <li>
          <p>
            <strong>Locate by Class Name:</strong> 
            Find a button by its class and click it.
          </p>
          <button className="example-button">Click Me</button>
        </li>
        <li>
          <p>
            <strong>Locate by Tag Name:</strong> 
            Retrieve all anchor tags and print their `href`.
          </p>
          <a href="https://example.com">Example Link</a>
        </li>
        <li>
          <p>
            <strong>Locate by Link Text:</strong> 
            Click a link using its visible text.
          </p>
          <a href="/home">Home</a>
        </li>
        <li>
          <p>
            <strong>Locate by Partial Link Text:</strong> 
            Print the URL of a link using a partial match.
          </p>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Basics;
