import React, { useState } from 'react'; // Import React and the useState hook for managing component state.
import axios from 'axios'; // Import Axios for making HTTP requests.
import { useDispatch } from 'react-redux'; 
// Import `useDispatch` to dispatch actions to the Redux store.
import { setUser } from '../store/slices/userSlice'; 
// Import the `setUser` action to update the Redux store's user state.

const Signup = () => {
    const dispatch = useDispatch(); 
    // Initialize the Redux dispatch function to dispatch actions.

    // State to store the form data (username, email, password).
    const [formData, setFormData] = useState({
        username: '', // Default value for username input.
        email: '', // Default value for email input.
        password: '' // Default value for password input.
    });

    /**
     * Function to handle changes in the form inputs.
     * It dynamically updates the state based on the input's `name` and `value`.
     * 
     * @param {Object} e - The event object from the input field.
     */
    const handleChange = (e) => {
        const { name, value } = e.target; // Extract the input's name and value.
        setFormData({
            ...formData, // Copy the existing form data.
            [name]: value // Update the specific field dynamically using the `name` attribute.
        });
    };

    /**
     * Function to handle form submission.
     * Sends a POST request to the server with the form data for signing up the user.
     * 
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = async (e) => {
        try {
            e.preventDefault(); // Prevent the default form submission behavior (page refresh).

            // Send a POST request to the sign-up endpoint with the form data.
            const { data } = await axios.post('http://localhost:3000/sign-up', formData);
            
            console.log(data.you); // Log the server's response for debugging.

            dispatch(setUser(data.you)); 
            // Update the Redux store with the user data using the `setUser` action.

            console.log('dispatched!'); // Log a message to confirm the action was dispatched.
        } catch (error) {
            console.error(error); // Log any errors for debugging.
        }
    };

    // The component's UI.
    return (
        <div>
            <h2>Signup</h2> {/* Heading for the Signup form. */}
            <form onSubmit={handleSubmit}> {/* Form submission is handled by `handleSubmit`. */}
                <div>
                    <label htmlFor="username">Username:</label> {/* Label for the username input. */}
                    <input
                        type="text" // The input type is "text".
                        id="username" // Unique identifier for accessibility.
                        name="username" // Matches the state property to dynamically update it.
                        value={formData.username} // Controlled component; value comes from state.
                        onChange={handleChange} // Calls `handleChange` to update state on input change.
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label> {/* Label for the email input. */}
                    <input
                        type="email" // The input type is "email" for validation.
                        id="email" // Unique identifier for accessibility.
                        name="email" // Matches the state property to dynamically update it.
                        value={formData.email} // Controlled component; value comes from state.
                        onChange={handleChange} // Calls `handleChange` to update state on input change.
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label> {/* Label for the password input. */}
                    <input
                        type="password" // The input type is "password" to hide the text.
                        id="password" // Unique identifier for accessibility.
                        name="password" // Matches the state property to dynamically update it.
                        value={formData.password} // Controlled component; value comes from state.
                        onChange={handleChange} // Calls `handleChange` to update state on input change.
                    />
                </div>
                <button type="submit">Signup</button> {/* Button to submit the form. */}
            </form>
        </div>
    );
};

export default Signup; // Export the Signup component for use in other parts of the application.
