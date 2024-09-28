import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">PhoenixGenesis</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
