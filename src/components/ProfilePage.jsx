import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../redux/userSlice'; // Assuming the userSlice is set up
import './style/ProfilePage.css';  // Link to your CSS file

function ProfilePage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleLogin = () => {
    const dummyUserInfo = { name: "John Doe", email: "john.doe@example.com" }; // Replace with real login logic
    dispatch(loginUser(dummyUserInfo));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="profile-page">
      {loggedIn ? (
        <>
          <h2>Welcome Back, {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
