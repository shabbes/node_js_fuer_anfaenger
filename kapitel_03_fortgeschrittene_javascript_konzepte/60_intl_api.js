const number = 123456.789;
const formatted = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format(number);

console.log(formatted); // Ausgabe: 123.456,79 €