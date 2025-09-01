async function processFilesSequentially(files) {
  try {
    for (const file of files) {
      const data = await fs.readFile(file, 'utf8');

      console.log(`Inhalt von ${file}:`, data);
    }
  } catch (err) {
    console.error('Fehler beim Verarbeiten der Dateien:', err);
  }
}

processFilesSequentially(['file1.txt', 'file2.txt', 'file3.txt']);