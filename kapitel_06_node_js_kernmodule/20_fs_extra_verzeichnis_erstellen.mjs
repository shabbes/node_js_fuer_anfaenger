import fs from 'fs-extra';

async function ensureDirectory() {
  try {
    await fs.ensureDir('new-directory');

    console.log('Verzeichnis erfolgreich sichergestellt.');
  } catch (err) {
    console.error('Fehler beim Sicherstellen des Verzeichnisses:', err);
  }
}

ensureDirectory();