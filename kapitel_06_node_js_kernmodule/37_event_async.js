class AsyncEmitter extends EventEmitter {
  async emitAsync(event, ...args) {
    const listeners = this.listeners(event);

    for (const listener of listeners) {
      await listener(...args);
    }
  }
}

const asyncEmitter = new AsyncEmitter();

asyncEmitter.on('asyncEvent', async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Asynchrones Ereignis verarbeitet:', data);
});

(async () => {
  console.log('Ereignis wird ausgelöst...');

  await asyncEmitter.emitAsync('asyncEvent', 'Daten');

  console.log('Ereignisverarbeitung abgeschlossen.');
})();