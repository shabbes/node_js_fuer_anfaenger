import fs from 'fs';

fs.watch('watched-directory', (eventType, filename) => {
  console.log(`Änderung erkannt: ${eventType} an ${filename}`);
});