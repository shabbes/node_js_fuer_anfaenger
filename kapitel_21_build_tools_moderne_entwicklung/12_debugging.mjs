import debug from 'debug';

const dbg = debug('my-cli-tool');

class MyCommand extends Command {
  async run() {
    dbg('Command gestartet');
    // Weitere Logik
    dbg('Command beendet');
  }
}