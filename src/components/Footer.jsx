import React from 'react';
import './style/Footer.css';  // Link to your CSS file

function Footer() {
  return (
    <footer>
      <p>© 2024 ITwiz. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
    </footer>
  );
}

export default Footer;