const user = {
  name: 'Max',
  age: 25,
};

const id = Symbol('id');

user[id] = 123;

console.log(user[id]); // 123