const args = process.argv.slice(2);
const name = args[0];

if (!name) {
  console.error('Bitte einen Namen angeben!');

  process.exit(1);
}

console.log(`Hello ${name}!`);

process.exit(0);