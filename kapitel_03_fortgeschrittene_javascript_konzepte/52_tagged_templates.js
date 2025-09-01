function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return `${result}${string}<strong>${values[i] || ''}</strong>`;
  }, '');
}

const name = 'Max';
const age = 30;
const message = highlight`Name: ${name}, Alter: ${age}`;
console.log(message); // Ausgabe: Name: <strong>Max</strong>, Alter: <strong>30</strong>