import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Spotify Clone</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#playlist">Playlist</a></li>
          <li><a href="#search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
