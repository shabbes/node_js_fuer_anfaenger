import { promises as fs } from 'fs';

async function createDirectory() {
  try {
    await fs.mkdir('new-directory', { recursive: true });

    console.log('Verzeichnis erfolgreich erstellt.');
  } catch (err) {
    console.error('Fehler beim Erstellen des Verzeichnisses:', err);
  }
}

createDirectory();