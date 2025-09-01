const fruits = ['Apfel', 'Banane', 'Kirsche'];
const shallowCopy = [...fruits];

shallowCopy[0] = 'Pfirsich';
console.log(fruits[0]); // 'Apfel' (unverändert)
console.log(shallowCopy[0]); // 'Pfirsich'