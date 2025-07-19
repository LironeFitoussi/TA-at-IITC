import React, { useState } from "react";

const CheckboxesRadios = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <div>
      <h2>Checkboxes & Radios</h2>
      <label>
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={(e) => setCheckboxChecked(e.target.checked)}
        />
        Accept Terms
      </label>
      <p>Checkbox is {checkboxChecked ? "Checked" : "Unchecked"}</p>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 1"
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 2"
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Option 2
        </label>
      </div>
      <p>Selected Radio: {selectedRadio}</p>
    </div>
  );
};

export default CheckboxesRadios;
