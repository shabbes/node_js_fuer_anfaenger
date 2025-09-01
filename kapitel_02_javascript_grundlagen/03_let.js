function example() {
  if (true) {
    // Ein neuer Block beginnt.
    let y = 20;

    console.log(y); // 20
  }

  console.log(y); // ReferenceError: y is not defined
}