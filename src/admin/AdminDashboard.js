import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SpeisekarteVerwaltung.css';
import '../styles/AdminDashboard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Funktion zur Darstellung des Admindashboards: Verwaltung von Speisekarte und Reservierungen
function AdminDashboard() {
  // Zustand für Speisekarte, Reservierungen & Formular
  const [gerichte, setGerichte] = useState([]);
  const [reservierungen, setReservierungen] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    beschreibung: '',
    preis: '',
    kategorie: 'vorspeisen'
  });
  const [bearbeitenId, setBearbeitenId] = useState(null);

  // Lade Daten beim Start
  useEffect(() => {
    ladeGerichte();
    ladeReservierungen();
  }, []);

  // GET: Speisekarte abrufen
  const ladeGerichte = async () => {
    try {
      const res = await axios.get('http://localhost:5000/speisekarte');
      setGerichte(res.data);
    } catch (err) {
      console.error('Fehler beim Laden der Gerichte:', err);
    }
  };

  // GET: Reservierungen abrufen
  const ladeReservierungen = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reservierungen');
      setReservierungen(res.data);
    } catch (err) {
      console.error('Fehler beim Laden der Reservierungen:', err);
    }
  };

  // Eingaben aktualisieren
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // POST/PUT: Gericht hinzufügen oder bearbeiten
  const handleSubmit = async () => {
    if (!formData.name || !formData.preis) return;

    try {
      if (bearbeitenId) {
        await axios.put(`http://localhost:5000/speisekarte/${bearbeitenId}`, formData);
      } else {
        await axios.post('http://localhost:5000/speisekarte', formData);
      }
      setFormData({ name: '', beschreibung: '', preis: '', kategorie: 'vorspeisen' });
      setBearbeitenId(null);
      ladeGerichte();
    } catch (err) {
      console.error('Fehler beim Speichern:', err);
    }
  };

  // Bearbeiten-Modus aktivieren
  const handleEdit = (gericht) => {
    setFormData(gericht);
    setBearbeitenId(gericht.id);
  };

  // DELETE: Gericht löschen
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/speisekarte/${id}`);
      ladeGerichte();
    } catch (err) {
      console.error('Fehler beim Löschen:', err);
    }
  };

  // DELETE: Reservierung löschen mit Toast-Bestätigung
  const handleReservierungLoeschen = async (id) => {
    toast.info(
      <div>
        Reservierung wirklich löschen? <br />
        <button onClick={async () => {
          try {
            await axios.delete(`http://localhost:5000/api/reservierungen/${id}`);
            ladeReservierungen();
            toast.dismiss();
            toast.success('Reservierung gelöscht');
          } catch (err) {
            toast.error('Fehler beim Löschen');
            console.error('Fehler beim Löschen der Reservierung:', err);
          }
        }}>Ja</button>{' '}
        <button onClick={() => toast.dismiss()}>Abbrechen</button>
      </div>,
      { autoClose: false }
    );
  };

  return (
    <div className="speisekarte-verwalten">
      <h2>Speisekarte verwalten</h2>

      {/* Formular für neue oder bearbeitete Gerichte */}
      <div className="gericht-formular">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="beschreibung" placeholder="Beschreibung" value={formData.beschreibung} onChange={handleChange} />
        <input type="text" name="preis" placeholder="Preis" value={formData.preis} onChange={handleChange} />
        <select name="kategorie" value={formData.kategorie} onChange={handleChange}>
          <option value="vorspeisen">Vorspeisen</option>
          <option value="pizza">Pizza</option>
          <option value="pasta">Pasta</option>
          <option value="desserts">Desserts</option>
          <option value="getränke">Getränke</option>
        </select>
        <button onClick={handleSubmit}>{bearbeitenId ? 'Aktualisieren' : 'Hinzufügen'}</button>
      </div>

      {/* Gerichte anzeigen */}
      <h3>Bestehende Gerichte</h3>
      <div className="gericht-liste">
        {gerichte.map((g) => (
          <div key={g.id} className="gericht-eintrag">
            <strong>{g.name}</strong> – {g.preis} <br />
            <em>{g.beschreibung}</em><br />
            Kategorie: {g.kategorie}<br />
            <button onClick={() => handleEdit(g)}>Bearbeiten</button>{' '}
            <button onClick={() => handleDelete(g.id)}>Löschen</button>
          </div>
        ))}
      </div>

      <hr />

      {/* Reservierungen anzeigen */}
      <h2>Reservierungen</h2>
      {reservierungen.length === 0 ? (
        <p>Keine Reservierungen vorhanden.</p>
      ) : (
        <ul className="admin-dashboard-reservierungen">
          {reservierungen.map((res) => (
            <li key={res.id}>
              <strong>{res.name}</strong> – {res.personen} Personen am {res.datum} um {res.uhrzeit}<br />
              {res.email}
              {res.bemerkung && <><br /><em>{res.bemerkung}</em></>}
              <br />
              <button onClick={() => handleReservierungLoeschen(res.id)}>Löschen</button>
            </li>
          ))}
        </ul>
      )}

      {/* Toast-Benachrichtigungen */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default AdminDashboard;
