const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);

console.log(flatArray); // [1, 2, 3, 4]