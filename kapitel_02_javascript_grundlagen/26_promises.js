const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Erfolg!');
  }, 1000);
});

promise
  .then((message) => {
    console.log(message); // "Erfolg!"
  })
  .catch((error) => {
    console.error(error);
  });