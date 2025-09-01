import fs from 'fs';

const readStream = fs.createReadStream('largefile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Neuer Datenblock:', chunk);
});

readStream.on('end', () => {
  console.log('Datei vollständig gelesen.');
});

readStream.on('error', (err) => {
  console.error('Fehler beim Lesen der Datei:', err);
});