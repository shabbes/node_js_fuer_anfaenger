class Mammal extends Animal {
  constructor(name, hasFur) {
    super(name);

    this.hasFur = hasFur;
  }
}

class Cat extends Mammal {
  constructor(name, breed) {
    super(name, true);

    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} schnurrt.`);
  }
}

const cat2 = new Cat('Luna', 'Siamkatze');

cat2.speak(); // Luna schnurrt.
console.log(cat2.hasFur); // true