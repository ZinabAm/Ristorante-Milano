import React from 'react';
import '../styles/Standort.css';

// Komponente zur Anzeige des Standorts und der Kontaktdaten
function Standort() {
  return (
    <section className="standort">
      
      {/* Adresse und Kontaktinformationen */}
      <div className="adresse">
        <h2>Ristorante Milano</h2>
        <p>
          Frauenstuhlweg 31<br />
          58644 Iserlohn
        </p>

        {/* Telefonnummer mit direkter Anruf-Funktion */}
        <div className="kontakt-detail">
          <span className="label">📞 Tel.:</span>
          <a href="tel:02371123456"> 02371 / 123456</a>
        </div>

        {/* E-Mail-Link mit direkter Öffnung im Mail-Client */}
        <div className="kontakt-detail">
          <span className="label">📧 Email:</span>
          <a href="mailto:ristorantemilano@gmail.com"> ristorantemilano@gmail.com</a>
        </div>
      </div>

      {/* Eingebettete Google Maps Karte mit Standort */}
      <div className="karte">
        <iframe
          title="Google Maps - Ristorante Milano"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.845338865509!2d7.686728076631017!3d51.384096319758506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b96f0b13b0e6a1%3A0x20e8c0eaa57db62a!2sFrauenstuhlweg%2031%2C%2058644%20Iserlohn!5e0!3m2!1sde!2sde!4v1713548000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Standort;
