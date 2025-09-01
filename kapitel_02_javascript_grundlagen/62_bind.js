function greet() {
  return `Hallo, ${this.name}`;
}

const person = { name: 'Max' };
const boundGreet = greet.bind(person);

console.log(boundGreet()); // 'Hallo, Max'