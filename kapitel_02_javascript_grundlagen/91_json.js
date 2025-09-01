const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Max","age":30,"isAdmin":true}'

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser); // { name: 'Max', age: 30, isAdmin: true }