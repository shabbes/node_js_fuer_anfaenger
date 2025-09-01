class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} macht ein Geräusch.`);
  }
}

const animal1 = new Animal('Hund');

animal1.speak(); // Hund macht ein Geräusch.