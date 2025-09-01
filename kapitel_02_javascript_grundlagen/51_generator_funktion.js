function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

for (const number of generator) {
  console.log(number);
}