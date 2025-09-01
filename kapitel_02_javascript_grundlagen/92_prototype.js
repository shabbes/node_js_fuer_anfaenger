const animal = {
  eats: true,
};
const rabbit = Object.create(animal);

console.log(rabbit.eats); // true