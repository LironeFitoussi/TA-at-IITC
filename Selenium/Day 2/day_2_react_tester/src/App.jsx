import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Home",
    "Shop",
    "About",
    "Contact Us",
  ]);

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setConfirmationMessage("Thank you for your message! We will contact you soon.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header>
        <h1>Demo Website for Locating Elements</h1>
        <p>Practice locating elements using various strategies!</p>
      </header>

      {/* Navigation Menu */}
      <nav>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className={`menu-item ${index === 1 ? "active" : ""}`}>
              <a href={`/${item.toLowerCase().replace(" ", "-")}`} id={`menu-link-${index}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Form Section */}
      <section>
        <h2>Contact Form</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <br />
          <button id="submit-button" type="submit">
            Submit
          </button>
        </form>
        {submitted && <p id="confirmation-message">{confirmationMessage}</p>}
      </section>

      {/* Data Table Section */}
      <section>
        <h2>Sample Data Table</h2>
        <table id="data-table" border="1">
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
              <td>Product A</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product B</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product C</td>
              <td>$30</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;
