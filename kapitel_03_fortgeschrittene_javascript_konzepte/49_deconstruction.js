function displayUser({ name, age }) {
  console.log(`Name: ${name}, Alter: ${age}`);
}

const user = { name: 'Max', age: 30 };
displayUser(user); // Ausgabe: Name: Max, Alter: 30