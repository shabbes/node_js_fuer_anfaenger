myEmitter.on('error', (err) => {
  console.error('Ein Fehler ist aufgetreten:', err);
});

myEmitter.emit('error', new Error('Etwas ist schiefgelaufen'));