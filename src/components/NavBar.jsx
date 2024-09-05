import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Link to your CSS file

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Web Store</Link>
      <div className="nav-links">
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/consult" className="nav-link">Consult</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
    </nav>
  );
}

export default NavBar;
