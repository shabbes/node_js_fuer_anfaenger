const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000); // Abbrechen nach 5 Sekunden

try {
  const response = await fetch('https://beispiel.de', { signal });
  const data = await response.json();

  console.log('Daten empfangen:', data);
} catch (err) {
  if (err.name === 'AbortError') {
    console.error('Anfrage abgebrochen');
  } else {
    console.error('Fehler bei der Anfrage:', err);
  }
}