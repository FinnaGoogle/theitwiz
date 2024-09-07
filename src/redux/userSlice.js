import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice to create a Redux slice

// Initial state for user authentication and user information
const initialState = {
  loggedIn: false, // Tracks if the user is logged in
  userInfo: null,  // Stores user information (e.g., name, email)
};

// Creating a Redux slice for user authentication functionality
const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer to handle user registration
    registerUser: (state, action) => {
      state.userInfo = action.payload; // Store the user information (e.g., name, email)
      state.loggedIn = true; // Set loggedIn to true after registration
    },
    // Reducer to handle user login
    loginUser: (state, action) => {
      state.loggedIn = true; // Set loggedIn to true when user logs in
      state.userInfo = action.payload; // Store the logged-in user's information
    },
    // Reducer to handle user logout
    logoutUser: (state) => {
      state.loggedIn = false; // Set loggedIn to false when user logs out
      state.userInfo = null;  // Clear the stored user information
    },
  },
});

// Exporting the actions to be used in components
export const { registerUser, loginUser, logoutUser } = userSlice.actions;
// Exporting the reducer to be added to the Redux store
export default userSlice.reducer;
