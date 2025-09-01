const user = {
  name: 'Max',
  age: 30,
  isAdmin: true,
};
const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.name = 'Moritz';

console.log(user.name); // 'Max' (unverändert)

// Beispiel mit structuredClone
const anotherDeepCopy = structuredClone(user);
anotherDeepCopy.name = 'Moritz';

console.log(user.name); // 'Max' (unverändert)