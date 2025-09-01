class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name ist zu kurz.');
    } else {
      this._name = value;
    }
  }
}

const person = new Person('Maximilian');

person.name = 'Max'; // Name ist zu kurz
console.log(person.name); // Maximilian