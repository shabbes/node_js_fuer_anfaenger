console.log(greet('Welt')); // Funktioniert, da greet hoisted ist

function greet(name) {
  return `Hallo, ${name}!`;
}