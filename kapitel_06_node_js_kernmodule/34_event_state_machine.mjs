class StateMachine extends EventEmitter {
  constructor() {
    super();

    this.state = 'initial';
  }

  transition(newState) {
    this.state = newState;
    this.emit('stateChange', this.state);
  }
}

const stateMachine = new StateMachine();

stateMachine.on('stateChange', (state) => {
  console.log('Zustand geändert zu:', state);
});

stateMachine.transition('running');