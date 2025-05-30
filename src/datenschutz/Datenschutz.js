import React from 'react';
import '../styles/Datenschutz.css';

// Die Funktion dient der Anzeige der Datenschutzrichtlinie auf der Restaurantseite
function Datenschutz() {
  return (
    <div className="datenschutz-content">
      <h1>Datenschutzerklärung</h1>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich
        auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
      </p>

      <h2>Kontakt mit uns</h2>
      <p>
        Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks
        Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir
        nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2>Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem
        Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu
        gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren
        Browser beim nächsten Besuch wiederzuerkennen.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
        Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
        oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der
        Aufsichtsbehörde beschweren.
      </p>

      <p>
        Sie erreichen uns unter folgenden Kontaktdaten:<br />
        Ristorante Milano<br />
        Frauenstuhlweg 31, 58644 Iserlohn<br />
        E-Mail: info@ristorante-milano.de<br />
        Telefon: 02371 / 123456
      </p>
    </div>
  );
}

export default Datenschutz;
