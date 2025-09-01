// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// app.js
const math = require('./math');

console.log(math.add(2, 3)); // 5