class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(`Dieses Auto ist ein ${this.brand}`);
  }
}

const myCar = new Car('Audi');

myCar.showBrand(); // Dieses Auto ist ein Audi