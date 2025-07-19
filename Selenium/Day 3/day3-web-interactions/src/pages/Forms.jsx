import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Forms</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter username"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
      </form>
      {submitted && <p>Form submitted with: {JSON.stringify(formData)}</p>}
    </div>
  );
};

export default Forms;
