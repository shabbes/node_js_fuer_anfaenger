import fs from 'fs';

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);

    return;
  }

  console.log('Dateiinhalt:', data);
});