Object.freeze(user);
user.age = 31; // Ignoriert, da das Objekt eingefroren ist

const car = { brand: 'Audi' };

Object.seal(car);
car.brand = 'Mercedes'; // Erlaubt
delete car.brand; // Ignoriert, da das Objekt versiegelt ist