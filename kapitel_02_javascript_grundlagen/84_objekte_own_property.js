const descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);
// { value: 'Max', writable: true, enumerable: true, configurable: true }