export class TitleScene extends Phaser.Scene {
  bg;

  constructor() {
    super({ key: "TitleScene" });
  }

  preload() {
    this.load.image("bg", "./assets/title-screen.png");
  }

  create() {
    this.bg = this.add.image(400, 300, "bg");
    this.bg.setScale(2);

    this.add.text(300, 300, "Click anywhere to begin", {
      color: "#1CE815",
    });

    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
export default TitleScene;
