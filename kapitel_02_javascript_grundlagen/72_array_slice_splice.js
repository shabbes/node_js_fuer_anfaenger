const fruits = ['Apfel', 'Banane', 'Kirsche'];
const citrus = fruits.slice(1, 3);

console.log(citrus); // ['Banane', 'Kirsche']

fruits.splice(1, 1, 'Zitrone');

console.log(fruits); // ['Apfel', 'Zitrone', 'Kirsche']