import React, { useState } from "react";

const MultipleElements = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [dropdownOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [listItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  return (
    <div>
      <h2>Working with Multiple Elements</h2>

      {/* Locate Multiple Elements - Checkboxes */}
      <section>
        <h3>Locate Multiple Elements - Basic</h3>
        <p>Select the checkboxes below and count them.</p>
        <div>
          <label>
            <input
              type="checkbox"
              value="Checkbox 1"
              onChange={handleCheckboxChange}
            />
            Checkbox 1
          </label>
          <label>
            <input
              type="checkbox"
              value="Checkbox 2"
              onChange={handleCheckboxChange}
            />
            Checkbox 2
          </label>
          <label>
            <input
              type="checkbox"
              value="Checkbox 3"
              onChange={handleCheckboxChange}
            />
            Checkbox 3
          </label>
        </div>
        <p>Selected Checkboxes: {selectedCheckboxes.length}</p>
      </section>

      {/* Iterate Over Elements - Dropdown */}
      <section>
        <h3>Iterate Over Elements</h3>
        <p>Below is a dropdown menu. Print all its options.</p>
        <select>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>
          Options:
          <ul>
            {dropdownOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </p>
      </section>

      {/* Locate Unique Element - nth-child */}
      <section>
        <h3>Locate Unique Element Among Similar</h3>
        <p>Locate a specific item in the list using positional selectors.</p>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>For example, locate the second item: <strong>{listItems[1]}</strong></p>
      </section>

      {/* Retrieve Nested Elements */}
      <section>
        <h3>Retrieve Nested Elements</h3>
        <p>Interact with nested elements in the structure below.</p>
        <ul>
          <li>
            Parent Item 1
            <ul>
              <li>Nested Item 1.1</li>
              <li>Nested Item 1.2</li>
            </ul>
          </li>
          <li>
            Parent Item 2
            <ul>
              <li>Nested Item 2.1</li>
              <li>Nested Item 2.2</li>
            </ul>
          </li>
        </ul>
        <p>Practice retrieving and interacting with nested elements like the second nested item under Parent Item 1: <strong>Nested Item 1.2</strong>.</p>
      </section>
    </div>
  );
};

export default MultipleElements;
