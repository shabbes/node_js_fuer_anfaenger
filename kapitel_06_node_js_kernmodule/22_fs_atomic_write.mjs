import { promises as fs } from 'fs';
import path from 'path';

async function atomicWrite(filePath, data) {
  const tempPath = path.join(path.dirname(filePath), `.${path.basename(filePath)}.tmp`);

  await fs.writeFile(tempPath, data, 'utf8');
  await fs.rename(tempPath, filePath);

  console.log('Datei atomar geschrieben.');
}

atomicWrite('important.txt', 'Kritische Daten');