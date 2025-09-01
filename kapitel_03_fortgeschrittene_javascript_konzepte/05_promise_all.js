Promise.all([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8'),
  fs.readFile('file3.txt', 'utf8'),
])
  .then(([data1, data2, data3]) => {
    console.log('Alle Dateien gelesen:', data1, data2, data3);
  })
  .catch((err) => {
    console.error('Fehler beim Lesen der Dateien:', err);
  });