class Engine {
  start() {
    console.log('Motor gestartet');
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  start() {
    this.engine.start();

    console.log('Auto gestartet');
  }
}

const car = new Car();

car.start();
// Motor gestartet
// Auto gestartet