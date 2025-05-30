import React from 'react';
import '../styles/UeberUns.css';

// Diese Komponente zeigt Informationen über das Restaurant an
const UeberUns = () => {
  return (
    <div className="ueberuns-container">
      {/* Überschrift */}
      <h1 className="text-3xl font-bold mb-6 text-center">Über uns – Ristorante Milano</h1>

      {/* Abschnitt über das Restaurantkonzept */}
      <section className="mb-8">
        <p className="text-lg">
          Im <strong>Ristorante Milano</strong> erwartet dich echte italienische Küche – frisch,
          traditionell und mit viel Liebe zubereitet. Unser Ziel ist es, ein Stück Italien nach
          <em> Iserlohn </em> zu bringen: mit klassischen Gerichten, einer warmen Atmosphäre und
          dem typischen Gefühl von <em>„La Dolce Vita“</em>.
        </p>
      </section>

      {/* Abschnitt über die Geschichte des Restaurants */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Unsere Geschichte</h2>
        <p className="text-lg">
          Das Ristorante Milano wurde von <em>Familie Rossi</em> gegründet – mit Wurzeln in
          Norditalien und der Leidenschaft, italienisches Lebensgefühl auf den Teller zu bringen.
          Unsere Rezepte basieren auf Familientraditionen und werden mit frischen Zutaten und viel
          Sorgfalt zubereitet.
        </p>
      </section>

      {/* Abschnitt mit Werten und Prinzipien des Restaurants */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Dafür stehen wir:</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>🥗 <strong>Frische Zutaten</strong> – täglich ausgewählt, mit regionalem Fokus</li>
          <li>👨‍🍳 <strong>Traditionelle Küche</strong> – original italienisch, ohne Kompromisse</li>
          <li>🍕 <strong>Hausgemachte Spezialitäten</strong> – Pasta, Pizza, Desserts</li>
          <li>🧑‍🤝‍🧑 <strong>Herzliche Gastfreundschaft</strong> – familiär, persönlich, entspannt</li>
        </ul>
      </section>

      {/* Abschlusstext mit Einladung an Gäste */}
      <section>
        <p className="text-lg">
          Ob für ein gemütliches Abendessen zu zweit, ein Treffen mit Freunden oder ein
          Familienessen – wir freuen uns darauf, dich bald bei uns begrüßen zu dürfen.
          <br />
          <strong>Buon Appetito!</strong>
        </p>
      </section>
    </div>
  );
};

export default UeberUns;
