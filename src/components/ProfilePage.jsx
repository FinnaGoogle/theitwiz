import React from 'react';
import './ProfilePage.css';  // Link to your CSS file

function ProfilePage({ loggedIn, setLoggedIn }) {
  return (
    <div className="profile-page">
      {loggedIn ? (
        <>
          <h2>Welcome Back, User</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
