export class GameScene extends Phaser.Scene {
  bg;

  player;
  hp = 3;
  score = 0;
  hpText;
  biscuitText;

  biscuit;

  asteroid;

  moveKeys;

  gameOver = false;

  constructor() {
    super({ key: "GameScene" });
  }

  init() {
    this.physics.world.setBounds(-3750, -2750, 8000, 6000);
  }

  preload() {
    this.load.image("space", "./assets/spacer.png");
    this.load.image("player", "./assets/ship2.png");
    this.load.image("asteroid", "./assets/asteroid.png");
    this.load.image("biscuit", "./assets/biscuit.png");
  }

  create() {
    this.bg = this.add.image(400, 300, "space");
    // this.bg.setScale(10);

    this.registry.set("score", this.score);

    this.createPlayer();

    this.createAstroids();

    this.createBiscuits();

    this.createColliders();

    this.createUi();

    this.cameras.main.startFollow(this.player);
    console.log(this.player);
    console.log(this.asteroid);
  }

  update() {
    if (this.gameOver) {
      this.scene.start("LoseScene");
      this.gameOver = false;
      this.hp = 3;
      this.score = 0;
    }
    this.keyListener();

    this.uiContainer.x = this.cameras.main.scrollX;
    this.uiContainer.y = this.cameras.main.scrollY;
  }

  createPlayer() {
    this.player = this.physics.add.image(400, 300, "player");
    this.player.setDamping(true);
    this.player.setDrag(0.7);
    this.player.body.setMaxVelocity(600);
    this.player.body.setCollideWorldBounds(true, 1, 1);

    //attach movement keys to player
    this.moveKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  createBiscuits() {
    this.biscuit = this.physics.add.group();
    for (let i = 0; i < 200; i++) {
      const x = Phaser.Math.Between(-3750, 4250);
      const y = Phaser.Math.Between(-2750, 3250);
      const biscuit = this.physics.add.image(x, y, "biscuit");
      this.biscuit.add(biscuit);
    }
  }

  createAstroids() {
    this.asteroid = this.physics.add.group();
    for (let i = 0; i < 200; i++) {
      const x = Phaser.Math.Between(-3750, 4250);
      const y = Phaser.Math.Between(-2750, 3250);
      const asteroid = this.physics.add.image(x, y, "asteroid");
      asteroid.setScale(1.5);

      asteroid.setVelocityX(Phaser.Math.Between(-50, 50));
      asteroid.setVelocityY(Phaser.Math.Between(-50, 50));

      asteroid.setAngularVelocity(Phaser.Math.Between(-100, 100));
      asteroid.body.setCollideWorldBounds(true);
      asteroid.body.setBounce(1, 1);

      this.asteroid.add(asteroid);
    }
  }

  createColliders() {
    this.physics.add.collider(
      this.player,
      this.asteroid,
      hitAsteroid,
      null,
      this
    );

    this.physics.add.collider(
      this.player,
      this.biscuit,
      getBiscuit,
      null,
      this
    );
  }

  createUi() {
    this.uiContainer = this.add.container(0, 0);
    this.hpText = this.add.text(16, 16, "Health: 3", {
      color: "#1CE815",
    });
    this.biscuitText = this.add.text(650, 16, "Biscuits: 0", {
      color: "#1CE815",
    });
    this.uiContainer.add(this.biscuitText);
    this.uiContainer.add(this.hpText);
  }

  //listen to the player's key inputs
  keyListener() {
    if (this.moveKeys.up.isDown) {
      this.physics.velocityFromRotation(
        this.player.rotation,
        400,
        this.player.body.acceleration
      );
    } else {
      this.player.setAcceleration(0);
    }

    if (this.moveKeys.left.isDown) {
      this.player.setAngularVelocity(-300);
    } else if (this.moveKeys.right.isDown) {
      this.player.setAngularVelocity(300);
    } else {
      this.player.setAngularVelocity(0);
    }
  }
}

function hitAsteroid(player, asteroid) {
  this.hp--;
  if (this.hp == 0) {
    this.gameOver = true;
  }
  this.hpText.setText("Health: " + this.hp);
  asteroid.disableBody(true, true);
  console.log("Player hit the asteroid");

  if (this.asteroid.countActive(true) === 0) {
    this.asteroid.children.iterate(function (child) {
      const x = Phaser.Math.Between(-3750, 4250);
      const y = Phaser.Math.Between(-2750, 3250);

      child.enableBody(true, x, y, true, true);

      child.setVelocityX(Phaser.Math.Between(-50, 50));
      child.setVelocityY(Phaser.Math.Between(-50, 50));

      child.setAngularVelocity(Phaser.Math.Between(-100, 100));
    });
  }
}

function getBiscuit(player, biscuit) {
  this.score++;
  this.registry.set("score", this.score);
  this.biscuitText.setText("Biscuits: " + this.score);
  console.log("Player Hit the Biscuit");
  biscuit.disableBody(true, true);

  if (this.biscuit.countActive(true) === 0) {
    //  A new batch of biscuit to collect
    this.biscuit.children.iterate(function (child) {
      child.enableBody(true, child.x, 0, true, true);
    });
  }
}

export default GameScene;
