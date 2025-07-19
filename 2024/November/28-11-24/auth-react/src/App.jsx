import './App.css'; // Import the application's CSS styles.
import { useSelector } from 'react-redux'; 
// Import the `useSelector` hook to access Redux state.

import Cookies from "js-cookie"; 
// Import `js-cookie` to manage cookies in the browser.

import axios from 'axios'; 
// Import Axios for making HTTP requests.

// Importing components for sign-in and sign-up forms.
import Signin from './components/Signin';
import Signup from './components/Signup';

import { useEffect } from 'react'; 
// Import `useEffect` hook to perform side effects in functional components.

function App() {
  /**
   * useEffect is a React hook that runs side effects after the component renders.
   * Here, we can use it to check if the JWT cookie exists or perform any setup logic.
   */
  useEffect(() => {
    // Uncomment the line below to log the JWT cookie for debugging.
    // console.log(Cookies.get("jwt"));
  }, []); // The empty dependency array ensures this effect runs only once, after the component mounts.

  /**
   * Function to fetch user data from the server.
   * It includes the JWT token in the `Authorization` header for authentication.
   */
  async function handleFetch() {
    try {
      const jwt = Cookies.get("jwt"); // Retrieve the JWT token from cookies.
      
      const { data } = await axios.get('http://localhost:3000/users/get-self', {
        headers: {
          Authorization: `Bearer ${jwt}`, // Include the JWT token in the `Authorization` header.
        },
      });

      console.log(data); // Log the server's response (e.g., decoded user info) for debugging.
    } catch (error) {
      console.error("Error fetching user data:", error); // Log any errors to the console.
    }
  }

  // Access the Redux state for the `user` slice using the `useSelector` hook.
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Redux, Auth, and JWT</h1> {/* Main heading of the application. */}

      <div>
        {/* Render the Signin and Signup components for user authentication. */}
        <Signin />
        <Signup />
      </div>

      {/* Button to trigger the `handleFetch` function to fetch user data from the server. */}
      <button onClick={handleFetch}>Fetch User</button>

      {/* Display the user's email from the Redux state. */}
      <h1>{user.email}</h1>
    </div>
  );
}

export default App; // Export the App component as the default export.
