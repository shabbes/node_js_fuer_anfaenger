const fruits = ['Apfel', 'Banane', 'Kirsche'];
const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);

console.log(totalLength); // 16