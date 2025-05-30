import React, { useState, useEffect } from 'react';
import '../styles/Speisekarte.css';

// Diese Funktion zeigt die gesamte Speisekarte an, gegliedert nach Kategorien
function Speisekarte() {
  // Zustand für die ausgewählte Kategorie
  const [aktiveKategorie, setAktiveKategorie] = useState('alle');

  // Zustand für alle geladenen Speisen aus der Datenbank
  const [speisen, setSpeisen] = useState([]);

  // Beim ersten Laden der Komponente: Speisekarte von der API laden
  useEffect(() => {
    fetch('http://localhost:5000/speisekarte')
      .then((res) => res.json())
      .then((data) => setSpeisen(data)) // Speisen in den Zustand setzen
      .catch((err) => console.error('Fehler beim Laden der Speisekarte:', err));
  }, []);

  // Gruppiert die Speisen nach ihrer Kategorie (z.B. pizza, pasta, ...)
  const kategorienGruppiert = speisen.reduce((acc, gericht) => {
    if (!acc[gericht.kategorie]) acc[gericht.kategorie] = [];
    acc[gericht.kategorie].push(gericht);
    return acc;
  }, {});

  // Hilfsfunktion zum Rendern einer bestimmten Kategorie
  const renderKategorie = (titel, items) => (
    <div className="kategorie">
      <h2>{titel}</h2>
      <ul className="gerichteliste">
        {items.map((gericht, index) => (
          <li key={gericht.id}>
            <div className="gericht-kopf">
              <span className="gericht-name">{index + 1}. {gericht.name}</span>
              <span className="gericht-preis">{gericht.preis} €</span>
            </div>
            <p className="gericht-beschreibung">{gericht.beschreibung}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="speisekarte-container">
      <h1 className="titel">Speisekarte</h1>

      {/* Auswahlleiste zum Filtern der Kategorien */}
      <div className="speisekarte-leiste">
        {['alle', 'vorspeisen', 'pizza', 'pasta', 'desserts', 'getränke'].map((kat) => (
          <button
            key={kat}
            onClick={() => setAktiveKategorie(kat)} // Ändert aktive Kategorie
            style={{ backgroundColor: aktiveKategorie === kat ? '#a31515' : undefined }}
          >
            {kat.charAt(0).toUpperCase() + kat.slice(1)}
          </button>
        ))}
      </div>

      {/* Anzeigen der ausgewählten Kategorien */}
      {(aktiveKategorie === 'alle' || aktiveKategorie === 'vorspeisen') &&
        renderKategorie('Antipasti / Vorspeisen', kategorienGruppiert.vorspeisen || [])}
      {(aktiveKategorie === 'alle' || aktiveKategorie === 'pizza') &&
        renderKategorie('Pizza (Ø 28cm)', kategorienGruppiert.pizza || [])}
      {(aktiveKategorie === 'alle' || aktiveKategorie === 'pasta') &&
        renderKategorie('La Pasta / Nudelgerichte', kategorienGruppiert.pasta || [])}
      {(aktiveKategorie === 'alle' || aktiveKategorie === 'desserts') &&
        renderKategorie('Desserts', kategorienGruppiert.desserts || [])}
      {(aktiveKategorie === 'alle' || aktiveKategorie === 'getränke') &&
        renderKategorie('Getränke', kategorienGruppiert.getränke || [])}
    </div>
  );
}

export default Speisekarte;
