// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';

console.log(add(2, 3)); // 5