Promise.race([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8'),
  fs.readFile('file3.txt', 'utf8'),
])
  .then((data) => {
    console.log('Erste Datei gelesen:', data);
  })
  .catch((err) => {
    console.error('Fehler beim Lesen der Dateien:', err);
  });