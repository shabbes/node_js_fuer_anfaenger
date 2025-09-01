function example() {
  var x; // Deklaration wird nach oben verschoben

  console.log(x); // undefined

  x = 10; // Zuweisung bleibt an ihrer ursprünglichen Stelle

  console.log(x); // 10
}