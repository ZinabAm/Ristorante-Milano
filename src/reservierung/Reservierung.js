import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Reservierung.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Diese Komponente ermöglicht es Nutzern, eine Tischreservierung vorzunehmen.
// Die eingegebenen Daten werden per E-Mail versendet und zusätzlich an den Server geschickt.
function Reservierung() {
  // Zustand für die Eingabedaten aus dem Formular
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datum: '',
    uhrzeit: '',
    personen: 1,
    bemerkung: ''
  });

  // Aktualisiert den Zustand bei Eingabeänderungen
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Beim Absenden des Formulars:
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      datum: formData.datum,
      uhrzeit: formData.uhrzeit,
      personen: formData.personen,
      bemerkung: formData.bemerkung,
    };

    // E-Mail über EmailJS an den Kunden senden
    emailjs.send(
      'service_q8etiq9',           // EmailJS Service ID
      'template_mf2nem7',          // EmailJS Template ID
      templateParams,
      'u3b-MVaOCXcZy9f5t'          // EmailJS Benutzer-Key (public)
    ).then(() => {
      toast.success('Reservierung erfolgreich gesendet!');  // Erfolgsmeldung per Toast
    }).catch((error) => {
      toast.error('Fehler beim Senden der E-Mail.');         // Fehlermeldung per Toast
      console.error('EmailJS Error:', error);
    });

    // Reservierungsdaten an den Server senden (z.B. für Datenbank)
    fetch('/api/reservierung', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(templateParams),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Reservierung gespeichert:', data);
      })
      .catch((err) => {
        console.error('Fehler beim Speichern in der Datenbank:', err);
      });

    // Formular zurücksetzen nach erfolgreicher Übertragung
    setFormData({
      name: '',
      email: '',
      datum: '',
      uhrzeit: '',
      personen: 1,
      bemerkung: ''
    });
  };

  return (
    <div className="reservierung-container">
      <h2>Tisch reservieren</h2>

      <form onSubmit={handleSubmit} className="reservierungsformular">
        <label>Name</label>
        <input type="text" name="name" required onChange={handleChange} />

        <label>E-Mail</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Datum</label>
        <input type="date" name="datum" required onChange={handleChange} />

        <label>Uhrzeit</label>
        <input type="time" name="uhrzeit" required onChange={handleChange} />

        <label>Personenanzahl</label>
        <input type="number" name="personen" min="1" max="20" required onChange={handleChange} />

        <label>Bemerkung (optional)</label>
        <textarea name="bemerkung" onChange={handleChange}></textarea>

        <button type="submit">Reservieren</button>
      </form>

      {/* Container für Toast-Nachrichten (Erfolg/Fehler) */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Reservierung;
