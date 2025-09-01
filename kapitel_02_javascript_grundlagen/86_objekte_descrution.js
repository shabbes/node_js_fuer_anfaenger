const fruits = ['Apfel', 'Banane', 'Kirsche'];
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit); // 'Apfel'

const user = {
  name: 'Max',
  age: 30,
  isAdmin: true,
};
const { name, age } = user;
console.log(name); // 'Max'