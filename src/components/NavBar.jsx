import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (

    <div className="navbar-frame bg-gray-500 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4 bg-grey-600">
        <Link to="/" className="text-2xl font-bold">ITwiz</Link>
        <div className="hidden md:flex space-x-6">
          {userInfo ? <span>Welcome,{userInfo.username}</span> : <span>Guest</span>}
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
