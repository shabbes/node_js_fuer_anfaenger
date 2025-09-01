const fruits = ['Apfel', 'Banane', 'Kirsche'];

const allLong = fruits.every((fruit) => fruit.length > 5);
console.log(allLong); // false

const someLong = fruits.some((fruit) => fruit.length > 5);
console.log(someLong); // true