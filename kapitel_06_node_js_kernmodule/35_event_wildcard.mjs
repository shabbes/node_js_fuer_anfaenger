class WildcardEmitter extends EventEmitter {
  emit(event, ...args) {
    super.emit(event, ...args);
    super.emit('*', event, ...args);
  }
}

const wildcardEmitter = new WildcardEmitter();

wildcardEmitter.on('*', (event, ...args) => {
  console.log(`Wildcard-Ereignis: ${event}`, ...args);
});

wildcardEmitter.emit('testEvent', 'Daten');