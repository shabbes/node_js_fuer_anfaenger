const fruitColors = {
  Apfel: 'rot oder grün',
  Banane: 'gelb',
  Kirsche: 'rot',
};
const selectedFruit = 'Banane';

console.log(`Bananen sind ${fruitColors[selectedFruit] || 'unbekannt'}.`);