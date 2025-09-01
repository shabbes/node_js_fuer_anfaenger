import { promises as fs } from 'fs';

async function writeFileAsync() {
  const content = 'Hallo, Welt!';

  try {
    await fs.writeFile('example.txt', content, 'utf8');

    console.log('Datei erfolgreich geschrieben.');
  } catch (err) {
    console.error('Fehler beim Schreiben der Datei:', err);
  }
}

writeFileAsync();