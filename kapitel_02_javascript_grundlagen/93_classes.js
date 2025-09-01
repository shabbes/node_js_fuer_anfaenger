class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} macht ein Geräusch.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} bellt.`);
  }
}

let dog = new Dog('Rex');
dog.speak(); // 'Rex bellt.'