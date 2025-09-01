const { parentPort, workerData } = require('worker_threads');

// Simulierte CPU-intensive Aufgabe
const result = workerData.split('').reverse().join('');

parentPort.postMessage(result);