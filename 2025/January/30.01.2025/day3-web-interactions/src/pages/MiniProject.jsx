import React, { useState } from "react";

const MiniProject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    acceptTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Mini-Project: Automating Web Forms</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>
        <label>
          Country:
          <select name="country" onChange={handleChange} value={formData.country}>
            <option value="">--Select--</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Form Submitted: {JSON.stringify(formData)}</p>}
    </div>
  );
};

export default MiniProject;
