const animal = {
  eats: true,
};

const rabbit = Object.create(animal);

rabbit.jumps = true;

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true