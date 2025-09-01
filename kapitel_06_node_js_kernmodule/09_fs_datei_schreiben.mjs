import fs from 'fs';

const content = 'Hallo, Welt!';

fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Fehler beim Schreiben der Datei:', err);

    return;
  }

  console.log('Datei erfolgreich geschrieben.');
});