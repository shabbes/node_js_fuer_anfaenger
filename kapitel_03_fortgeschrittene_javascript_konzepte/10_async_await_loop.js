async function processFiles(files) {
  const promises = files.map((file) => fs.readFile(file, 'utf8'));

  try {
    const results = await Promise.all(promises);

    results.forEach((data, index) => {
      console.log(`Inhalt von Datei ${index + 1}:`, data);
    });
  } catch (err) {
    console.error('Fehler beim Verarbeiten der Dateien:', err);
  }
}

processFiles(['file1.txt', 'file2.txt', 'file3.txt']);