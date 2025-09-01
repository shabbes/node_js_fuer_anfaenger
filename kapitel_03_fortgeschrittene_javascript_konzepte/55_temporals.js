const today = Temporal.PlainDate.from('2023-10-05');

console.log(today.toString()); // Ausgabe: 2023-10-05

const birthday = Temporal.PlainDate.from('1990-01-01');
const age = today.since(birthday).years;

console.log(`Alter: ${age}`); // Ausgabe: Alter: 33