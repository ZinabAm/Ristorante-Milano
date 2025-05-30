import React, { useState } from 'react';
import '../styles/AdminLogin.css';

// Funktion zur Anmeldung des Admins
function AdminLogin({ onLogin }) {
  // Zustand für das eingegebene Passwort
  const [passwort, setPasswort] = useState('');

  // Prüfe das Passwort und rufe onLogin() auf, wenn korrekt
  const handleLogin = () => {
    if (passwort === 'admin123') {
      onLogin();
    } else {
      alert('Falsches Passwort!');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Passwort"
        value={passwort}
        onChange={(e) => setPasswort(e.target.value)}
      />
      <button onClick={handleLogin}>Anmelden</button>
    </div>
  );
}

export default AdminLogin;
