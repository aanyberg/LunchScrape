import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-bg px-3" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a href="/" className="navbar-item">
            <img src={require('../assets/img/logo.png')} alt="Lunch Lidköping" />
        </a>
    </div>
    </nav>
  );
};

export default Navbar;
