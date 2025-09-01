Promise.allSettled([
  fs.readFile('file1.txt', 'utf8'),
  fs.readFile('file2.txt', 'utf8'),
  fs.readFile('file3.txt', 'utf8'),
]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Datei ${index + 1} gelesen:`, result.value);
    } else {
      console.error(`Fehler beim Lesen von Datei ${index + 1}:`, result.reason);
    }
  });
});