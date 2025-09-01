server.on('error', (err) => {
  console.error('Server Fehler:', err);
});

server.on('clientError', (err, socket) => {
  console.error('Client Fehler:', err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});