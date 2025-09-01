class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit('log', { message });
  }
}

const logger = new Logger();

logger.on('log', (event) => {
  console.log('Log-Ereignis empfangen:', event.message);
});

logger.log('Dies ist eine Log-Nachricht.');