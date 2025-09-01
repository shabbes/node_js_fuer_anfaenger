const obj1 = { name: 'Max' };
const obj2 = obj1; // obj2 erhält eine Referenz auf obj1

obj2.name = 'Sascha'; // Änderung über obj2

console.log(obj1.name); // Ausgabe: Sascha
console.log(obj2.name); // Ausgabe: Sascha