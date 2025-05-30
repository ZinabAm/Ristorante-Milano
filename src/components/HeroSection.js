import React from 'react';
import '../styles/Hero.css'; 

//Funktion zur Darstellung von einem Begrüßungssatz
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Willkommen im Ristorante Milano!</h1>
        
        <p>Genießen Sie authentische italienische Küche mit Herz und Leidenschaft</p>
      </div>
    </section>
  );
}

export default HeroSection;
