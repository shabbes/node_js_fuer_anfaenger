const logs = [
  { level: 'info', message: 'Benutzer ist eingeloggt', timestamp: 1625234523 },
  { level: 'error', message: 'Datenbank Fehler', timestamp: 1625234530 },
  { level: 'info', message: 'Benutzer ist ausgeloggt', timestamp: 1625234550 },
];

// Filtern Sie nur die Fehlerprotokolle
const errorLogs = logs.filter((log) => log.level === 'error');

// Extrahieren Sie die Nachrichten der Fehlerprotokolle
const errorMessages = errorLogs.map((log) => log.message);

// Zählen Sie die Anzahl der Fehlerprotokolle
const errorCount = errorLogs.reduce((count) => count + 1, 0);

console.log(errorMessages); // ['Datenbank Fehler']
console.log(errorCount); // 1