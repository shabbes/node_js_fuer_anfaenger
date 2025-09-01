class MusicPlayer {
  play() {
    console.log('Musik wird abgespielt');
  }
}

class CarWithMusic {
  constructor() {
    this.engine = new Engine();
    this.musicPlayer = new MusicPlayer();
  }

  start() {
    this.engine.start();
    this.musicPlayer.play();

    console.log('Auto gestartet, Musik wird gespielt');
  }
}

const carWithMusic = new CarWithMusic();
carWithMusic.start();
// Motor gestartet
// Musik wird abgespielt
// Auto gestartet, Musik wird gespielt