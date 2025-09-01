import { Server } from 'socket.io';

const io = new Server(3000);

const chatNamespace = io.of('/chat');

chatNamespace.on('connection', (socket) => {
  console.log('Ein Benutzer hat sich verbunden:', socket.id);

  // Beitritt zu einem Raum
  socket.on('joinRoom', (room) => {
    socket.join(room);
    socket.to(room).emit('message', `Benutzer ${socket.id} hat den Raum betreten.`);
  });

  // One-to-One Kommunikation
  socket.on('privateMessage', ({ recipientId, message }) => {
    socket.to(recipientId).emit('privateMessage', {
      from: socket.id,
      message,
    });
  });

  // One-to-Many Kommunikation
  socket.on('sendMessageToRoom', ({ room, message }) => {
    socket.to(room).emit('message', {
      from: socket.id,
      message,
    });
  });

  // Broadcast an alle verbundenen Clients
  socket.on('broadcastMessage', (message) => {
    socket.broadcast.emit('message', {
      from: socket.id,
      message,
    });
  });

  socket.on('disconnect', () => {
    console.log('Ein Benutzer hat die Verbindung getrennt:', socket.id);
  });
});