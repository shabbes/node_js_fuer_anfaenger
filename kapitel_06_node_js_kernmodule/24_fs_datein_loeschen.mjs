import { promises as fs } from 'fs';

async function deleteFile() {
  try {
    await fs.unlink('unwanted.txt');

    console.log('Datei erfolgreich gelöscht.');
  } catch (err) {
    console.error('Fehler beim Löschen der Datei:', err);
  }
}

deleteFile();