import { promises as fs } from 'fs';

async function readDirectory() {
  try {
    const files = await fs.readdir('some-directory');

    console.log('Verzeichnisinhalt:', files);
  } catch (err) {
    console.error('Fehler beim Lesen des Verzeichnisses:', err);
  }
}

readDirectory();