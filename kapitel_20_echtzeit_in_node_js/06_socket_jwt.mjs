// Beispiel: Authentifizierung mit JWT
io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  jwt.verify(token, 'geheimeschluessel', (err, user) => {
    if (err) {
      return next(new Error('Authentifizierung fehlgeschlagen'));
    }

    socket.user = user;

    next();
  });
});