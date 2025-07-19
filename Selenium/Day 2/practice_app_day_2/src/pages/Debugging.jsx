import React, { useState } from "react";

const Debugging = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
  };

  return (
    <div>
      <h2>Debugging Locators</h2>

      {/* Inspect and Test Locators */}
      <section>
        <h3>Inspect and Test Locators</h3>
        <p>
          Use Chrome DevTools to inspect the elements below. Practice testing
          different locator strategies like <code>id</code>, <code>name</code>,
          and <code>css_selector</code>.
        </p>
        <form id="debug-form" onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" placeholder="Enter username" />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <br />
          <button id="submit-button" type="submit">
            Submit
          </button>
        </form>
        {formSubmitted && <p id="confirmation">Form submitted successfully!</p>}
        <p>
          Debugging Tip: Try intentionally using incorrect locators to trigger
          errors and practice troubleshooting.
        </p>
      </section>

      {/* Handle Locator Errors */}
      <section>
        <h3>Handle Locator Errors</h3>
        <p>
          Below is a non-existent element. Use error handling to gracefully
          manage scenarios where the element cannot be found.
        </p>
        <div style={{ display: "none" }} id="hidden-element">
          This element is hidden.
        </div>
        <p>
          Debugging Tip: Use strategies like waits or try-catch blocks to handle
          such cases in your scripts.
        </p>
      </section>

      {/* Improve Locator Reliability */}
      <section>
        <h3>Improve Locator Reliability</h3>
        <p>
          The list below contains dynamic elements. Use robust locators like
          relative XPath or CSS selectors to interact with them reliably.
        </p>
        <ul>
          <li id="item-1">Item 1</li>
          <li id="item-2">Item 2</li>
          <li id="item-3">Item 3</li>
        </ul>
        <p>
          Debugging Tip: Avoid absolute XPath or fragile locators that rely on
          UI structure, as they are more prone to breaking with minor changes.
        </p>
      </section>
    </div>
  );
};

export default Debugging;
