async function* asyncGenerator() {
  for (let i = 0; i < 3; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();