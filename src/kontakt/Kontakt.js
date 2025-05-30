import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Kontakt.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Die Kontakt-Komponente stellt ein Kontaktformular bereit, über das Nutzer Nachrichten senden können.
// Die Nachricht wird per E-Mail über EmailJS versendet.
function Kontakt() {
  // Zustand für die eingegebenen Formulardaten
  const [kontaktInfo, setKontaktInfo] = useState({
    name: '',
    email: '',
    nachricht: '',
  });

  // Zustand für mögliche Fehlermeldungen bei der Validierung
  const [fehlermeldung, setFehlermeldung] = useState('');

  // Aktualisiert den Zustand bei jeder Eingabeänderung im Formular
  const handleKontaktChange = (e) => {
    setKontaktInfo({ ...kontaktInfo, [e.target.name]: e.target.value });
  };

  // Validiert, ob alle Felder ausgefüllt sind und ob die E-Mail gültig ist
  const validateInputs = () => {
    if (!kontaktInfo.name || !kontaktInfo.email || !kontaktInfo.nachricht) {
      setFehlermeldung('Bitte füllen Sie alle Felder aus.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(kontaktInfo.email)) {
      setFehlermeldung('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return false;
    }
    return true;
  };

  // Beim Absenden des Formulars: Validieren → E-Mail senden → Feedback anzeigen
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const templateParams = {
      name: kontaktInfo.name,
      email: kontaktInfo.email,
      nachricht: kontaktInfo.nachricht
    };

    // E-Mail-Versand über EmailJS
    emailjs.send(
      'service_q8etiq9',             // Dienst-ID von EmailJS
      'template_qs51sdu',            // Template-ID von EmailJS
      templateParams,
      'u3b-MVaOCXcZy9f5t'            // Benutzer-Token (public key)
    ).then((response) => {
      toast.success('Nachricht erfolgreich gesendet!');           // Erfolgs-Toast
      setKontaktInfo({ name: '', email: '', nachricht: '' });     // Formular leeren
      setFehlermeldung('');
    }).catch((error) => {
      toast.error('Fehler beim Senden der Nachricht.');           // Fehler-Toast
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div className="kontakt-container">
      <h2>Kontaktieren Sie uns</h2>

      <p className="beschreibung-text">
        Haben Sie Fragen? Unser Team steht Ihnen gerne zur Verfügung.<br /><br />
        Füllen Sie einfach das Kontaktformular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.
      </p>

      <form className="kontaktformular" onSubmit={handleSubmit}>
        {/* Fehlermeldung bei Validierungsfehlern */}
        {fehlermeldung && <p className="fehlermeldung">{fehlermeldung}</p>}

        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={kontaktInfo.name}
            onChange={handleKontaktChange}
          />
        </label>

        <label>
          <span>E-Mail:</span>
          <input
            type="email"
            name="email"
            value={kontaktInfo.email}
            onChange={handleKontaktChange}
          />
        </label>

        <label>
          <span>Nachricht:</span>
          <textarea
            name="nachricht"
            value={kontaktInfo.nachricht}
            onChange={handleKontaktChange}
          />
        </label>

        <button type="submit">Senden</button>
      </form>

      {/* Toast-Container für Erfolg-/Fehlermeldungen */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Kontakt;
