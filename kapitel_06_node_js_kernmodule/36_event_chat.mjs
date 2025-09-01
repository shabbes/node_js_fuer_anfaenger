class ChatRoom extends EventEmitter {
  sendMessage(user, message) {
    this.emit('message', { user, message });
  }
}

const chatRoom = new ChatRoom();

chatRoom.on('message', ({ user, message }) => {
  console.log(`${user}: ${message}`);
});

chatRoom.sendMessage('Alice', 'Hallo zusammen!');
chatRoom.sendMessage('Bob', 'Hallo Alice!');