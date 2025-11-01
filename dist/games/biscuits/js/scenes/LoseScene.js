export class LoseScene extends Phaser.Scene {
  losebg;
  scoreText;
  constructor() {
    super({ key: "LoseScene" });
  }

  preload() {
    this.load.image("losebg", "./assets/lose-screen.png");
  }

  create() {
    this.losebg = this.add.image(400, 300, "losebg");
    this.losebg.setScale(2);

    this.add.text(310, 300, "You have Crashed!", {
      color: "#1CE815",
    });
    this.scoreText = this.add.text(
      350,
      350,
      "Score" + this.registry.get("score"),
      {
        color: "#1CE815",
      }
    );
    this.add.text(260, 400, "Click the screen to restart", {
      color: "#1CE815",
    });

    this.registry.events.on("changedata", this.updateData, this);

    this.input.on("pointerdown", () => {
      this.registry.set("score", 0);
      this.scene.start("GameScene");
    });
  }

  updateData(parent, key, data) {
    if (key === "score") {
      this.scoreText.setText("Score:     " + this.data);
      console.log(this.data);
    }
  }
}
export default LoseScene;
