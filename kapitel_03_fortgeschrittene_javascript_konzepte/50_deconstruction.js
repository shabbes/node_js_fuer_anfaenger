function displayUser({ name = 'Unbekannt', age = 'Unbekannt' } = {}) {
  console.log(`Name: ${name}, Alter: ${age}`);
}

displayUser(); // Ausgabe: Name: Unbekannt, Alter: Unbekannt