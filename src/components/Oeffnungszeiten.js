import React from 'react';
import '../styles/Oeffnungszeiten.css';

// Darstellung der Öffnungszeiten
function Oeffnungszeiten() {
  return (
    <div className="oeffnungszeiten-container">
      <div className="oeffnungszeiten">
        <h2>Öffnungszeiten</h2>
        <ul>
          <li><strong>Montag:</strong> Ruhetag</li>
          <li><strong>Dienstag – Sonntag:</strong> 12:00 – 14:30 & 17:30 – 22:00</li>
        </ul>
      </div>
    </div>
  );
}

export default Oeffnungszeiten;

