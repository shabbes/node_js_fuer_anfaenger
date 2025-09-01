const fruits = ['Apfel', 'Banane', 'Kirsche'];
const moreFruits = ['Mango', ...fruits];

console.log(moreFruits); // ['Mango', 'Apfel', 'Zitrone', 'Kirsche']

const user = {
  name: 'Max',
  age: 30,
  isAdmin: true,
};
const { isAdmin, ...rest } = user;
console.log(rest); // { name: 'Max', age: 30 }