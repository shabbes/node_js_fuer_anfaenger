const fruits = ['Apfel', 'Banane', 'Kirsche'];
const foundFruit = fruits.find((fruit) => fruit.startsWith('K'));

console.log(foundFruit); // 'Kirsche'

const filteredFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(filteredFruits); // ['Kirsche']