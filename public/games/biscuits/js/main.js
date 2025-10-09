import { GameScene } from "./scenes/GameScene.js";
import { TitleScene } from "./scenes/TitleScene.js";
import { LoseScene } from "./scenes/LoseScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [TitleScene, GameScene, LoseScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);
