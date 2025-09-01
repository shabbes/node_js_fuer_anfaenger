import { promises as fs } from 'fs';

async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');

    console.log('Dateiinhalt:', data);
  } catch (err) {
    console.error('Fehler beim Lesen der Datei:', err);
  }
}

readFileAsync();