import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Die Navbar-Komponente zeigt die Hauptnavigation der Webseite an
function Navbar() {
  return (
    <nav data-testid="navbar">
      
      {/* Logo links – klickbar, führt zur Startseite */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/restaurant_logo.jpg" alt="Ristorante Milano Logo" />
        </Link>
      </div>

      {/* Navigationslinks zu den Hauptseiten der Website */}
      <ul>
        <li><Link to="/speisekarte">Speisekarte</Link></li>
        <li><Link to="/reservierung">Reservierung</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/ueber-uns">Über Uns</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
