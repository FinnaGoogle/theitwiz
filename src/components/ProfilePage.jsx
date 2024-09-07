import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, logoutUser } from '../redux/userSlice'; // Redux actions for login, register, and logout

function ProfilePage() {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store
  const userInfo = useSelector((state) => state.user.userInfo); // Select user info from Redux store
  const loggedIn = useSelector((state) => state.user.loggedIn); // Check if the user is logged in

  // State to track registration/login mode, form inputs, and error handling
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const [name, setName] = useState(''); // User's name for registration
  const [email, setEmail] = useState(''); // Email for login or registration
  const [password, setPassword] = useState(''); // Password for login or registration
  const [error, setError] = useState(null); // Error handling

  // Handle user login logic
  const handleLogin = async () => {
    setError(null); // Reset error before trying login
    try {
      // Example logic (replace with real API/validation logic)
      const dummyUserInfo = { name: "John Doe", email: "john.doe@example.com" };
      dispatch(loginUser(dummyUserInfo)); // Dispatch login action with dummy data
    } catch (err) {
      setError(err.message); // Set error if login fails
    }
  };

  // Handle user registration logic
  const handleRegister = async () => {
    setError(null); // Reset error before trying registration
    try {
      // Example logic (replace with real API/validation logic)
      const dummyUserInfo = { name, email }; // Create a user object with entered data
      dispatch(registerUser(dummyUserInfo)); // Dispatch registration action
    } catch (err) {
      setError(err.message); // Set error if registration fails
    }
  };

  // Handle user logout logic
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch logout action
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* If the user is logged in, display user info and logout option */}
      {loggedIn ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Welcome Back, {userInfo.name}</h2>
          <p className="mb-6 text-lg">Email: {userInfo.email}</p>
          <button
            onClick={handleLogout} // Handle user logout
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* Display either login or registration form based on isRegistering state */}
          <h2 className="text-3xl font-bold mb-6">
            {isRegistering ? 'Create Account' : 'Login'}
          </h2>

          {/* Display error message if there's any */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Registration form */}
          {isRegistering && (
            <div className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                className="mb-4 p-2 border border-gray-300 rounded w-64"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                className="mb-4 p-2 border border-gray-300 rounded w-64"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                className="mb-4 p-2 border border-gray-300 rounded w-64"
              />
              <button
                onClick={handleRegister} // Handle user registration
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Register
              </button>
              {/* Switch to login form */}
              <p className="mt-4">
                Already have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setIsRegistering(false)} // Switch to login form
                >
                  Log in here
                </span>.
              </p>
            </div>
          )}

          {/* Login form */}
          {!isRegistering && (
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                className="mb-4 p-2 border border-gray-300 rounded w-64"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                className="mb-4 p-2 border border-gray-300 rounded w-64"
              />
              <button
                onClick={handleLogin} // Handle user login
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
              {/* Switch to registration form */}
              <p className="mt-4">
                Don't have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setIsRegistering(true)} // Switch to registration form
                >
                  Register here
                </span>.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
