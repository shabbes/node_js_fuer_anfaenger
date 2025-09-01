import { promises as fs } from 'fs';

async function moveFile() {
  try {
    await fs.rename('oldPath.txt', 'newPath.txt');

    console.log('Datei erfolgreich verschoben.');
  } catch (err) {
    console.error('Fehler beim Verschieben der Datei:', err);
  }
}

moveFile();