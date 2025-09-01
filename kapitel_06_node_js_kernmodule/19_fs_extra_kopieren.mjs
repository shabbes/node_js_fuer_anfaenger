import fs from 'fs-extra';

async function copyFile() {
  try {
    await fs.copy('source.txt', 'destination.txt');

    console.log('Datei erfolgreich kopiert.');
  } catch (err) {
    console.error('Fehler beim Kopieren der Datei:', err);
  }
}

copyFile();