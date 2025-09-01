import { promises as fs } from 'fs';

async function readFileSafe() {
  try {
    const data = await fs.readFile('nonexistent.txt', 'utf8');

    console.log('Dateiinhalt:', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Datei nicht gefunden.');
    } else {
      console.error('Fehler beim Lesen der Datei:', err);
    }
  }
}

readFileSafe();