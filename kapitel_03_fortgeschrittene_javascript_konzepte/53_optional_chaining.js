const user = {
  profile: {
    email: 'max@beispiel.de',
  },
};

console.log(user.profile?.email); // Ausgabe: max@beispiel.de
console.log(user.address?.street); // Ausgabe: undefined, allerdings kein Fehler