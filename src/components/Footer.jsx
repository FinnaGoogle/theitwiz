import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">© 2024 ITwiz. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;