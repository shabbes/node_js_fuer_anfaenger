const zonedDateTime = Temporal.ZonedDateTime.from('2023-10-05T10:00:00[Europe/Berlin]');

console.log(zonedDateTime.toString()); // Ausgabe: 2023-10-05T10:00:00+02:00[Europe/Berlin]

const newYorkTime = zonedDateTime.withTimeZone('America/New_York');

console.log(newYorkTime.toString()); // Ausgabe: 2023-10-05T04:00:00-04:00[America/New_York]