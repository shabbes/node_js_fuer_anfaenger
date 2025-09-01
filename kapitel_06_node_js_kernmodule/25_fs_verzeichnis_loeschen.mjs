import { promises as fs } from 'fs';

async function deleteDirectory() {
  try {
    await fs.rm('unwanted-directory', { recursive: true, force: true });

    console.log('Verzeichnis erfolgreich gelöscht.');
  } catch (err) {
    console.error('Fehler beim Löschen des Verzeichnisses:', err);
  }
}

deleteDirectory();