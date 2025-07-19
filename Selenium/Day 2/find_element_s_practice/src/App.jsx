import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="main-title">Selenium Practice Page</h1>
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main className="content">
        {/* Home Section */}
        <section id="home" className="section home">
          <h2>Home Section</h2>
          <div className="button-container">
            <button className="btn primary-btn" id="home-btn-1">Click Me</button>
            <button className="btn primary-btn" id="home-btn-2">Another Button</button>
            <button className="btn secondary-btn" id="home-btn-3">Secondary Action</button>
          </div>
          <img src="https://via.placeholder.com/150" alt="Placeholder" className="home-img" />
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <h2>About Us</h2>
          <p className="about-description">We provide the best Selenium testing resources for automation enthusiasts.</p>
          <div className="input-group">
            <input type="text" id="username" className="input-text" placeholder="Your Username" />
            <input type="password" id="password" className="input-password" placeholder="Your Password" />
            <input type="email" id="email" className="input-email" placeholder="Your Email" />
            <select className="input-select" id="user-role">
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
              <option value="manager">Manager</option>
            </select>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section services">
          <h2>Our Services</h2>
          <ul className="services-list">
            <li className="service-item" id="service-1">Web Development</li>
            <li className="service-item" id="service-2">Automation Testing</li>
            <li className="service-item" id="service-3">DevOps Consulting</li>
          </ul>
          <div className="nested-lists">
            <h3>Additional Services</h3>
            <ul className="services-nested-list">
              <li>Custom Solutions
                <ul>
                  <li>CRM Integration</li>
                  <li>Analytics</li>
                </ul>
              </li>
              <li>Support Packages
                <ul>
                  <li>Basic</li>
                  <li>Premium</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Contact Us</h2>
          <form id="contact-form">
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" className="form-input" />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" className="form-input" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" className="form-textarea"></textarea>

            <button type="submit" className="btn submit-btn">Submit</button>
          </form>
        </section>

        {/* Tables Section */}
        <section id="tables" className="section tables">
          <h2>Data Tables</h2>
          <table className="data-table" id="main-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alice</td>
                <td>Developer</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bob</td>
                <td>Tester</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie</td>
                <td>Manager</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
          <table className="data-table secondary-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Widget A</td>
                <td>$10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Widget B</td>
                <td>$15</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Selenium Practice. All rights reserved.</p>
        <button id="footer-btn" className="footer-btn">Footer Button</button>
      </footer>
    </div>
  );
}

export default App;
