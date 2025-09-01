import { promises as fs } from 'fs';

async function changePermissions() {
  try {
    await fs.chmod('example.txt', 0o644);
    console.log('Dateiberechtigungen erfolgreich geändert.');
  } catch (err) {
    console.error('Fehler beim Ändern der Dateiberechtigungen:', err);
  }
}

changePermissions();