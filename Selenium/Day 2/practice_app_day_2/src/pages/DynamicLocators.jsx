import React, { useState, useEffect } from "react";

const DynamicLocators = () => {
  const [showDynamicElement, setShowDynamicElement] = useState(false);
  const [dynamicItems, setDynamicItems] = useState([]);

  useEffect(() => {
    // Simulate dynamic content loading after a delay
    setTimeout(() => {
      setDynamicItems(["Dynamic Item 1", "Dynamic Item 2", "Dynamic Item 3"]);
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Dynamic Locators</h2>

      {/* Dynamic Element with Partial Match */}
      <section>
        <h3>Dynamic Elements by Partial Match</h3>
        <p>
          Below is an element that appears with a dynamic attribute. Use a
          partial match to locate it.
        </p>
        <button
          onClick={() => setShowDynamicElement(!showDynamicElement)}
          style={{ marginBottom: "10px" }}
        >
          Toggle Dynamic Element
        </button>
        {showDynamicElement && (
          <div id="dynamic-element-12345" className="dynamic-class">
            I am a dynamic element!
          </div>
        )}
        <p>
          Practice locating the element by its dynamic ID (e.g.,
          <code>dynamic-element-*</code>) or class name.
        </p>
      </section>

      {/* Wait for Dynamic Content */}
      <section>
        <h3>Wait for Dynamic Content</h3>
        <p>
          The list below will load after 3 seconds. Use a wait strategy to
          handle its appearance.
        </p>
        {dynamicItems.length > 0 ? (
          <ul>
            {dynamicItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Loading dynamic items...</p>
        )}
      </section>

      {/* Dynamic Attributes */}
      <section>
        <h3>Handle Dynamic Attributes</h3>
        <p>
          Use locators like <code>contains()</code> or <code>starts-with()</code> in XPath to locate elements with changing attributes.
        </p>
        <input
          type="text"
          id={`dynamic-input-${Math.floor(Math.random() * 1000)}`}
          placeholder="Dynamic ID input"
        />
        <p>
          Practice locating this input field using a partial match on its ID
          (e.g., <code>dynamic-input-*</code>).
        </p>
      </section>
    </div>
  );
};

export default DynamicLocators;
