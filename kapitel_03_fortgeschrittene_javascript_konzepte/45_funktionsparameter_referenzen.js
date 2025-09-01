function modifyPrimitive(value) {
  value = 100;
}

const num = 50;

modifyPrimitive(num);
console.log(num); // Ausgabe: 50

function modifyObject(obj) {
  obj.name = 'Moritz';
}

const person = { name: 'Max' };

modifyObject(person);
console.log(person.name); // Ausgabe: Moritz