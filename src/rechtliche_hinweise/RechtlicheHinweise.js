import React from 'react';
import '../styles/RechtlicheHinweise.css';

// Diese Funktion definiert die Rechtliche Hinweise-Komponente, die Informationen zu den allgemeinen Nutzungsbedingungen, Urheberrecht etc. bereitstellt
function RechtlicheHinweise() {
  return (
    <div className="rechtliche-hinweise-content">
      <h1>Rechtliche Hinweise</h1>

      <p>
        Alle Inhalte dieser Website, insbesondere Texte, Bilder, Grafiken und Layouts, sind urheberrechtlich geschützt.
        Die Verwendung oder Vervielfältigung dieser Inhalte ohne ausdrückliche schriftliche Genehmigung ist untersagt.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
        TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
        der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
        jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>

      <p>
        © {new Date().getFullYear()} Ristorante Milano – Alle Rechte vorbehalten.
      </p>
    </div>
  );
}

export default RechtlicheHinweise;