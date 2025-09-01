async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    const data3 = await fs.readFile('file3.txt', 'utf8');

    console.log('Alle Dateien gelesen:', data1, data2, data3);
  } catch (err) {
    console.error('Fehler beim Lesen der Dateien:', err);
  }
}

readFiles();