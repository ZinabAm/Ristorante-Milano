const mysql = require('mysql2');

// Verbindung zur MySQL-Datenbank herstellen
const connection = mysql.createConnection({
  host: 'localhost',       
  user: 'root',            
  password: 'admin',            
  database: 'restaurant_db' 
});

// Verbindung testen
connection.connect((err) => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank:', err);
  } else {
    console.log('Mit der MySQL-Datenbank verbunden!');
  }
});

module.exports = connection;
