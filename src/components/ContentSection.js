import React, { useState } from 'react';
import '../styles/ContentSection.css';
import Lightbox from 'yet-another-react-lightbox'; 
import 'yet-another-react-lightbox/styles.css';

//Funktion zur Darstellung der Galerie-Bilder
function ContentSection() {
  // Liste der Galerie-Bilder
  const bilder = [
    '/images/restaurant1.jpg',
    '/images/restaurant2.jpg',
    '/images/restaurant3.jpg',
    '/images/restaurant4.jpg',
  ];

  // Zustand: Lightbox geöffnet oder nicht
  const [isOpen, setIsOpen] = useState(false);

  // Zustand: aktuelles Bild in der Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);

  // Formatierung für die Lightbox (erwartet slides mit `src`)
  const slides = bilder.map((bild) => ({ src: bild }));

  return (
    <section className="content-section">
      <h2 className="content-title">GALERIE</h2>

      {/* Galerie-Bilder als Grid */}
      <div className="gallery-grid">
        {bilder.map((bild, index) => (
          <img
            key={index}
            src={bild}
            alt={`Restaurant Bild ${index + 1}`}
            loading="lazy"
            onClick={() => {
              setPhotoIndex(index); // setzt Bild für Lightbox
              setIsOpen(true);      // öffnet Lightbox
            }}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Lightbox wird angezeigt, wenn isOpen true */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)} // Schließt Lightbox
        slides={slides}               // Bilddaten
        index={photoIndex}            // Aktuelles Bild
        on={{ view: ({ index }) => setPhotoIndex(index) }} // Aktualisiert Bild beim Blättern
      />
    </section>
  );
}

export default ContentSection;
