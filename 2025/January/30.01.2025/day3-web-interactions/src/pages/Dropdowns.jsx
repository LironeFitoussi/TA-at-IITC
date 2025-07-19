import React, { useState } from "react";

const Dropdowns = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (e) => setSelectedOption(e.target.value);

  return (
    <div id="dropdowns-container">
      <h2>Dropdowns</h2>
      <label htmlFor="country-dropdown">Select a country:</label>
      <select
        id="country-dropdown"
        onChange={handleDropdownChange}
        value={selectedOption}
      >
        <option value="">--Select--</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="IN">India</option>
      </select>
      <p>Selected Country: {selectedOption}</p>
    </div>
  );
};

export default Dropdowns;
