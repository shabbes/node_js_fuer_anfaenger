const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf8')
  .then((data1) => {
    return fs.readFile('file2.txt', 'utf8');
  })
  .then((data2) => {
    return fs.readFile('file3.txt', 'utf8');
  })
  .then((data3) => {
    console.log('Alle Dateien gelesen:', data1, data2, data3);
  })
  .catch((err) => {
    console.error('Fehler beim Lesen der Dateien:', err);
  });