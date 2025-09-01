class PubSub extends EventEmitter {
  publish(event, data) {
    this.emit(event, data);
  }

  subscribe(event, listener) {
    this.on(event, listener);
  }
}

const pubSub = new PubSub();

pubSub.subscribe('message', (data) => {
  console.log('Nachricht empfangen:', data);
});

pubSub.publish('message', 'Hallo, Welt!');