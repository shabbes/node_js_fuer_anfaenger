console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

setImmediate(() => {
  console.log('Immediate 1');
});

console.log('Ende');