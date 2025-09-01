// Beispiel: Ack-Callback
socket.emit('event', data, (response) => {
  console.log('Server hat die Nachricht bestätigt:', response);
});