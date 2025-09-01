// src/commands/hello.js
import { Command, Flags } from '@oclif/core';

class HelloCommand extends Command {
  async run() {
    const { args, flags } = await this.parse(HelloCommand);
    const name = args.name || 'world';
    const greeting = `Hello, ${name}!`;
    this.log(flags.uppercase ? greeting.toUpperCase() : greeting);
  }
}

HelloCommand.args = [
  {
    name: 'name',
    required: false,
    description: 'Name, der ausgegeben werden soll',
  },
];

HelloCommand.flags = {
  uppercase: Flags.boolean({
    char: 'u',
    description: 'In Großbuchstaben ausgeben',
  }),
};

export default HelloCommand;