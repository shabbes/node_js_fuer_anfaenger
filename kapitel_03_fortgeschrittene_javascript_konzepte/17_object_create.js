const dog = Object.create(animal, {
  barks: {
    value: true,
  },
});

console.log(dog.eats); // true
console.log(dog.barks); // true