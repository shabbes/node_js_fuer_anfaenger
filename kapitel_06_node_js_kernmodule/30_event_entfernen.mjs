const callback = () => {
  console.log('Dieser Listener wird entfernt.');
};

myEmitter.on('event', callback);
myEmitter.off('event', callback);