// Beispiel: Erstellen eines Namespace und eines Rooms

import { Server } from 'socket.io';

const io = new Server(3000);

const chatNamespace = io.of('/chat');

chatNamespace.on('connection', (socket) => {
  socket.join('room1');
  socket.to('room1').emit('message', 'Willkommen im Raum 1!');
});