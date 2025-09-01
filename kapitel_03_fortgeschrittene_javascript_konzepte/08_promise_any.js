Promise.any([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8'),
  fs.readFile('file3.txt', 'utf8'),
])
  .then((data) => {
    console.log('Erste erfolgreich gelesene Datei:', data);
  })
  .catch((err) => {
    console.error('Keine Datei konnte gelesen werden:', err);
  });