import React from 'react';
import { Link } from 'react-router-dom';
import './style/NavBar.css';  // Link to your CSS file

function NavBar() {
  return (
    <div className='navbar-frame'>
    <nav className="nav-links">
      <Link to="/" className="navbar-brand">ITwiz</Link>
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/consult" className="nav-link">Consult</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
  </div>
  );
}

export default NavBar;
