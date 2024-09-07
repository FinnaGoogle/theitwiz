import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (

    <div className="navbar-frame bg-blue-600 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">ITwiz</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/store" className="nav-link hover:text-gray-300 transition duration-300">Store</Link>
          <Link to="/consult" className="nav-link hover:text-gray-300 transition duration-300">Consult</Link>
          <Link to="/profile" className="nav-link hover:text-gray-300 transition duration-300">Profile</Link>
          <Link to="/cart" className="nav-link hover:text-gray-300 transition duration-300">Cart</Link>
      </div>
      </div>
      </div>
    
  );
}

export default NavBar;
