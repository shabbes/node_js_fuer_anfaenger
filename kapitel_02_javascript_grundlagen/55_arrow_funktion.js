const person = {
  name: 'Anna',
  hobbies: ['Lesen', 'Schwimmen', 'Programmieren'],

  showHobbiesNormal: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(`${this.name} mag ${hobby}`);
      // this ist hier undefined oder verweist im strengen Modus nicht auf person
    });
  },

  showHobbiesArrow: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} mag ${hobby}`);
      // this verweist korrekt auf person
    });
  },
};

person.showHobbiesNormal();
// Fehler oder "undefined mag Lesen" ...

person.showHobbiesArrow();
// Anna mag Lesen
// Anna mag Schwimmen
// Anna mag Programmieren