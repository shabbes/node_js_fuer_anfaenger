const fetch = require('node-fetch');

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
}

fetchData('https://api.beispiel.de/data');