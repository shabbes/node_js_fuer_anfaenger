const duration = Temporal.Duration.from({ days: 3, hours: 4 });
const futureDate = today.add(duration);

console.log(futureDate.toString()); // Ausgabe: 2023-10-08