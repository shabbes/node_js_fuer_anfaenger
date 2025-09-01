class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} bellt.`);
  }
}

const dog1 = new Dog('Rex', 'Schäferhund');

dog1.speak(); // Rex bellt.