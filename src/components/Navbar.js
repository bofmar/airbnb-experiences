import React from 'react';
import logo from '../images/airbnb-logo.png';

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt='Airbnb logo' />
      </nav>
    </header>
  );
}
