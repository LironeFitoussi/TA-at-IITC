import { createSlice } from "@reduxjs/toolkit"; 
// Importing `createSlice` from Redux Toolkit to simplify creating a Redux slice.

/**
 * A Redux slice is a collection of Redux reducer logic and actions for a specific feature.
 * This slice manages the state related to the user (e.g., name and email).
 */
const userSlice = createSlice({
    // The name of this slice of the state. It's used to identify this slice in Redux dev tools and the Redux store.
    name: "user", 

    // The initial state of the `user` slice.
    initialState: {
        name: "",  // Default value for the `name` field (empty string).
        email: "test",  // Default value for the `email` field.
    },

    // The `reducers` object defines functions (reducer logic) for updating the slice's state.
    reducers: {
        /**
         * The `setUser` reducer updates the `name` and `email` fields in the user slice state.
         * 
         * @param {Object} state - The current state of the `user` slice.
         * @param {Object} action - The dispatched action containing the new data to update.
         * @property {Object} action.payload - The data sent with the action, expected to have `name` and `email`.
         */
        setUser: (state, action) => {
            // Update the `name` field in the state using the data from `action.payload.name`.
            state.name = action.payload.name;

            // Update the `email` field in the state using the data from `action.payload.email`.
            state.email = action.payload.email;
        },
    },
});

// Export the `setUser` action creator, so it can be dispatched to update the state.
export const { setUser } = userSlice.actions;

// Export the reducer function to be added to the Redux store.
export default userSlice.reducer;
