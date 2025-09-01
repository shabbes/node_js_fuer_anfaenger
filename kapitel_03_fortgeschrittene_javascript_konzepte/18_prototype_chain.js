const vehicle = {
  describe() {
    return `Dies ist ein ${this.type} mit ${this.wheels} Rädern.`;
  },
};

const car = Object.create(vehicle);

car.type = 'Auto';
car.wheels = 4;

const bike = Object.create(vehicle);

bike.type = 'Fahrad';
bike.wheels = 2;

console.log(car.describe()); // Dies ist ein Auto mit 4 Rädern.
console.log(bike.describe()); // Dies ist ein Fahrad mit 2 Rädern.