class Counter {
 #count = 0;

  increment() {
    this#count++;
  }

  getCount() {
    return this#count;
  }
}

const counter = new Counter();

counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter#count); // SyntaxError: Private field #count' must be declared in an enclosing class