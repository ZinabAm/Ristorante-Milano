//import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import NewsBar from '../components/NewsBar';
import Standort from '../components/Standort';
import Oeffnungszeiten from '../components/Oeffnungszeiten';
import Footer from '../components/Footer';
import Datenschutz from '../datenschutz/Datenschutz';
import RechtlicheHinweise from '../rechtliche_hinweise/RechtlicheHinweise';
import UeberUns from '../ueber_uns/UeberUns';
import Kontakt from '../kontakt/Kontakt';
import Reservierung from '../reservierung/Reservierung';
import Speisekarte from '../speisekarte/Speisekarte';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../admin/AdminDashboard';
import '../styles/App.css';


// Die ScrollToTop-Komponente sorgt dafür, dass die Seite immer nach oben scrollt wenn eine neue Route aufgerufen wird
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Admin() {
  const [eingeloggt, setEingeloggt] = useState(false);

  return (
    <div>
      {eingeloggt ? <AdminDashboard /> : <AdminLogin onLogin={() => setEingeloggt(true)} />}
    </div>
  );
}

// Diese Funktion ist der Hauptcontainer für die gesamte Website und definiert die Routen und die darin enthaltenen Komponenten.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <NewsBar />
              <HeroSection />
              <ContentSection /> 
              <Oeffnungszeiten />
              <br></br><br></br>
              <Standort />
            </>
          } />
          {/* Hier sind die ganzen Routen zum Navigieren der einzelnen Seiten */}
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/reservierung" element={<Reservierung />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/rechtliche-hinweise" element={<RechtlicheHinweise />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

