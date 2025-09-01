// In einer separaten Datei namens greet.js
function greet(name) {
  return `Hello ${name}!`;
}

module.exports = greet;

// In hello.js
const greet = require('./greet');
const args = process.argv.slice(2);
const name = args[0] ?? 'Node';

console.log(greet(name));