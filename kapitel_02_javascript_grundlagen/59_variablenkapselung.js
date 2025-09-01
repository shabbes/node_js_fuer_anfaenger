function createUser(name) {
  let isLoggedIn = false;

  return {
    login: () => {
      isLoggedIn = true;

      console.log(`${name} ist eingeloggt.`);
    },
    logout: () => {
      isLoggedIn = false;

      console.log(`${name} ist ausgeloggt.`);
    },
    status: () => {
      return isLoggedIn ? `${name} ist online.` : `${name} ist offline.`;
    },
  };
}

const user = createUser('Max');

user.login(); // Max ist eingeloggt.
console.log(user.status()); // Max ist online.
user.logout(); // Max ist ausgeloggt.
console.log(user.status()); // Max ist offline.