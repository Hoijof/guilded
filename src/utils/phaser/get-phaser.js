import Phaser from "phaser";

export const defaultConfig = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
  scene: {
    preload,
    create,
  },
};

function preload() {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}

function create() {
  this.add.image(400, 300, "sky");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: "ADD",
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

let game;

export function getPhaser(canvasRef, config) {
  if (!game) {
    newPhaser(canvasRef, config);
  }

  return game;
}

export function newPhaser(canvasRef, config = defaultConfig) {
  config.canvas = canvasRef;

  game = new Phaser.Game(config);
}
