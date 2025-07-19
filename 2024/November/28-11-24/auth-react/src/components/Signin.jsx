import React, { useState } from "react"; // Importing React and the useState hook to manage component state.
import axios from "axios"; // Importing Axios for making HTTP requests to the server.

/**
 * The `Signin` component represents a simple sign-in form where users can
 * enter their email and password to authenticate.
 */
const Signin = () => {
  // Define state variables to store the user's email and password.
  // `useState` initializes the state with an empty string.
  const [email, setEmail] = useState(""); // State for storing the email input.
  const [password, setPassword] = useState(""); // State for storing the password input.

  /**
   * The `handleSubmit` function is triggered when the form is submitted.
   * It sends the email and password to the server for authentication.
   * 
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (i.e., page refresh).

    try {
      // Sending a POST request to the server with the email and password.
      // The `withCredentials` option ensures cookies are included for authentication.
      const response = await axios.post(
        "http://localhost:3000/sign-in", // Replace with your backend endpoint.
        { email, password }, // The request body containing the email and password.
        { withCredentials: true } // Ensures cookies (if any) are sent with the request.
      );

      // `response.data` will contain the server's response (e.g., user data, token, etc.).
      console.log("Response:", response.data); // For debugging purposes, log the response.
      return response.data; // Returning the data for potential use (though unused here).
    } catch (error) {
      // If there's an error (e.g., network issue or invalid credentials), log it.
      console.error("Error during sign-in:", error);
      // Optionally, you could add error handling logic here, such as showing a message to the user.
    }
  };

  // The component's UI is defined here.
  return (
    <div>
      <h2>Sign In</h2> {/* A simple heading for the form. */}
      <form onSubmit={handleSubmit}> {/* Form submission is handled by the `handleSubmit` function. */}
        <div>
          <label>Email:</label> {/* Label for the email input. */}
          <input
            type="email" // The input type is "email" to ensure proper email formatting.
            value={email} // The input's value is bound to the `email` state.
            onChange={(e) => setEmail(e.target.value)} // Update the `email` state on input change.
            required // Ensures this field is required before submission.
          />
        </div>
        <div>
          <label>Password:</label> {/* Label for the password input. */}
          <input
            type="password" // The input type is "password" to mask the user's input.
            value={password} // The input's value is bound to the `password` state.
            onChange={(e) => setPassword(e.target.value)} // Update the `password` state on input change.
            required // Ensures this field is required before submission.
          />
        </div>
        <button type="submit">Sign In</button> {/* The submit button triggers form submission. */}
      </form>
    </div>
  );
};

export default Signin; // Exporting the component to use it in other parts of the application.
