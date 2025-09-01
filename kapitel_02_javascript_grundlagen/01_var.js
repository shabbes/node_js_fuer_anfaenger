function example() {
  console.log(x); // undefined, wegen Hoisting

  var x = 10;

  console.log(x); // 10
}