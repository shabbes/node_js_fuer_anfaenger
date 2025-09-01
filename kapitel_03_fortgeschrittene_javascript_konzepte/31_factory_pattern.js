class Car {
  drive() {
    console.log('Fahre ein Auto');
  }
}

class Truck {
  drive() {
    console.log('Fahre einen LKW');
  }
}

class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Ungültiger Fahrzeugtyp');
    }
  }
}

const car = VehicleFactory.createVehicle('car');

car.drive(); // Fahre ein Auto

const truck = VehicleFactory.createVehicle('truck');

truck.drive(); // Fahre einen LKW