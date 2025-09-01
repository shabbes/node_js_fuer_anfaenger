const numbers = [4, 2, 5, 1, 3];

numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]

// Für numerische Sortierung
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]