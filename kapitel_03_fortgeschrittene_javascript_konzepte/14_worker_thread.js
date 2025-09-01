const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker wurde mit diesem Fehlercode beendet: ${code}`));
    });
  });
}

async function run() {
  try {
    const result = await runService('some data');

    console.log('Ergebnis:', result);
  } catch (err) {
    console.error('Fehler:', err);
  }
}

run();