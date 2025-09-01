import fs from 'fs';

const readStream = fs.createReadStream('largefile.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Datei erfolgreich kopiert.');
});