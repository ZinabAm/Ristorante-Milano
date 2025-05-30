import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom'; // Ermöglicht Navigation zu anderen Seiten

//Funktion zur Darstellung des Footers
function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-container">
        {/* Linke Seite des Footers – Copyright-Hinweis */}
        <div className="footer-left">
          <span>Copyright © 1992–2025. Ristorante Milano Iserlohn.</span>
        </div>

        {/* Rechte Seite des Footers – Navigation */}
        <div className="footer-right">
          {/* Link zu Datenschutz-Seite */}
          <Link to="/datenschutz">Datenschutz</Link>
          
          {/* Link zu rechtlichen Hinweisen */}
          <Link to="/rechtliche-hinweise">Rechtliche Hinweise</Link>

          {/* Link zur Admin-Login-Seite, optisch hervorgehoben */}
          <Link 
            to="/admin" 
            style={{ marginLeft: '10px', fontWeight: 'bold', color: '#c0392b' }}
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
