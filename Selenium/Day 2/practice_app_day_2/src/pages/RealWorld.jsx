import React, { useState } from "react";

const RealWorld = () => {
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
      <h2>Real-World Scenarios</h2>
      <section>
        <h3>Automate a Login Form</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
        {submitted && <p>Form Submitted with data: {JSON.stringify(formData)}</p>}
      </section>

      <section>
        <h3>Extract Table Data</h3>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item A</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item B</td>
              <td>$20</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RealWorld;
