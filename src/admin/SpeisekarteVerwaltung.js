import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SpeisekarteVerwaltung.css';

//Funktion
function SpeisekarteVerwaltung() {
  // Zustand für alle Gerichte
  const [gerichte, setGerichte] = useState([]);

  // Zustand für das Formular (neues oder bearbeitetes Gericht)
  const [neuesGericht, setNeuesGericht] = useState({
    name: '',
    beschreibung: '',
    preis: '',
    kategorie: 'vorspeisen',
  });

  const API_URL = import.meta.env.VITE_API_URL;

  // Wenn ein Gericht bearbeitet wird, enthält dieser Zustand die ID
  const [bearbeitenId, setBearbeitenId] = useState(null);

  const kategorien = ['vorspeisen', 'pizza', 'pasta', 'desserts', 'getränke'];

  // Lädt alle Gerichte beim ersten Laden der Seite
  useEffect(() => {
    //axios.get('http://localhost:5000/speisekarte')
    axios.get(`${API_URL}/speisekarte`)
      .then(res => setGerichte(res.data))
      .catch(err => console.error(err));
  }, []);

  // Reagiert auf Änderungen in den Eingabefeldern
  const handleChange = (e) => {
    setNeuesGericht({ ...neuesGericht, [e.target.name]: e.target.value });
  };

  // Fügt ein neues Gericht hinzu oder speichert eine Bearbeitung
  const handleSubmit = () => {
    if (!neuesGericht.name || !neuesGericht.preis) {
      return alert('Bitte alle Pflichtfelder ausfüllen');
    }

    if (bearbeitenId !== null) {
      // Gericht aktualisieren (PUT)
      //axios.put(`http://localhost:5000/speisekarte/${bearbeitenId}`, neuesGericht)
      axios.put(`${API_URL}/speisekarte/${bearbeitenId}`, neuesGericht)
        .then(() => {
          // Lokale Liste aktualisieren
          setGerichte(prev => prev.map(g => g.id === bearbeitenId ? { ...neuesGericht, id: bearbeitenId } : g));
          resetForm();
        });
    } else {
      // Neues Gericht hinzufügen (POST)
      //axios.post('http://localhost:5000/speisekarte', neuesGericht)
      axios.post(`${API_URL}/speisekarte`, neuesGericht)
        .then(res => {
          setGerichte(prev => [...prev, { ...neuesGericht, id: res.data.id }]);
          resetForm();
        });
    }
  };

  // Füllt das Formular mit den Daten eines Gerichts zum Bearbeiten
  const handleBearbeiten = (gericht) => {
    setNeuesGericht({ ...gericht });
    setBearbeitenId(gericht.id);
  };

  // Löscht ein Gericht (DELETE)
  const handleLoeschen = (id) => {
    //axios.delete(`http://localhost:5000/speisekarte/${id}`)
    axios.delete(`${API_URL}/speisekarte/${id}`)
      .then(() => {
        setGerichte(prev => prev.filter(g => g.id !== id));
        if (id === bearbeitenId) resetForm();
      });
  };

  // Setzt das Formular zurück auf leer
  const resetForm = () => {
    setNeuesGericht({ name: '', beschreibung: '', preis: '', kategorie: 'vorspeisen' });
    setBearbeitenId(null);
  };

  return (
    <div className="speisekarte-verwalten">
      <h2>Speisekarte verwalten</h2>
      <h3>{bearbeitenId !== null ? 'Gericht bearbeiten' : 'Gericht hinzufügen'}</h3>

      {/* Formularbereich */}
      <div className="gericht-formular">
        <input type="text" name="name" placeholder="Gerichtname" value={neuesGericht.name} onChange={handleChange} />
        <input type="text" name="beschreibung" placeholder="Beschreibung" value={neuesGericht.beschreibung} onChange={handleChange} />
        <input type="text" name="preis" placeholder="Preis" value={neuesGericht.preis} onChange={handleChange} />
        <select name="kategorie" value={neuesGericht.kategorie} onChange={handleChange}>
          {kategorien.map(k => <option key={k} value={k}>{k}</option>)}
        </select>
        <button onClick={handleSubmit}>{bearbeitenId !== null ? 'Speichern' : 'Hinzufügen'}</button>
        {bearbeitenId !== null && <button className="abbrechen-button" onClick={resetForm}>Abbrechen</button>}
      </div>

      {/* Liste der vorhandenen Gerichte */}
      <h3>Bestehende Gerichte</h3>
      <div className="gericht-liste">
        {gerichte.map(g => (
          <div key={g.id} className="gericht-eintrag">
            <strong>{g.name}</strong> – {g.preis} <br />
            <em>{g.beschreibung}</em> <br />
            Kategorie: <span>{g.kategorie}</span> <br />
            <button onClick={() => handleBearbeiten(g)}>Bearbeiten</button>
            <button onClick={() => handleLoeschen(g.id)}>Löschen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeisekarteVerwaltung;
