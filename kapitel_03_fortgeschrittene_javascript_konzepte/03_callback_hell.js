fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) {
    console.error('Fehler beim Lesen von file1:', err);

    return;
  }

  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) {
      console.error('Fehler beim Lesen von file2:', err);

      return;
    }

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) {
        console.error('Fehler beim Lesen von file3:', err);

        return;
      }

      console.log('Alle Dateien gelesen:', data1, data2, data3);
    });
  });
});