import React, { useContext, useEffect, createRef } from "react";
import { AppContext } from "../world";
import { Card, Typography, Space, Collapse, Button } from "antd";

import Phaser from "phaser";
import { getPhaser, defaultConfig } from "../../utils/phaser/get-phaser";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const canvasRef = createRef();

export default function PhaserTest() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const config = defaultConfig;
    defaultConfig.scene = {
      preload,
      create,
      update,
    };

    let platforms;
    let player;
    let cursors;
    let stars;
    let bombs;

    let score = 0;
    let scoreText;

    let gameOver = false;

    function preload() {
      this.load.image("sky", "assets/sky.png");
      this.load.image("ground", "assets/platform.png");
      this.load.image("star", "assets/star.png");
      this.load.image("bomb", "assets/bomb.png");
      this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }

    function collectStar(player, star) {
      star.disableBody(true, true);

      score += 10;
      scoreText.setText("Score: " + score);

      if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {
          child.enableBody(true, child.x, 0, true, true);
        });

        const x =
          player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400);

        const bomb = bombs.create(x, 16, "bomb");
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      }
    }

    function hitBomb(player, bomb) {
      this.physics.pause();

      player.setTint(0xffffff);

      player.anims.play("turn");

      gameOver = true;
    }

    function create() {
      this.add.image(400, 300, "sky");

      platforms = this.physics.add.staticGroup();

      platforms.create(400, 568, "ground").setScale(2).refreshBody();

      platforms.create(600, 400, "ground");
      platforms.create(50, 250, "ground");
      platforms.create(750, 220, "ground");

      player = this.physics.add.sprite(100, 450, "dude");

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 4 }],
        frameRate: 20,
      });

      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
      });

      this.physics.add.collider(player, platforms);

      cursors = this.input.keyboard.createCursorKeys();

      stars = this.physics.add.group({
        key: "star",
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 },
      });

      stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });

      this.physics.add.collider(stars, platforms);

      this.physics.add.overlap(player, stars, collectStar, null, this);

      scoreText = this.add.text(16, 16, "Score: 0", {
        fontSize: "32px",
        fill: "#000",
      });

      bombs = this.physics.add.group();
      this.physics.add.collider(bombs, platforms);
      this.physics.add.collider(player, bombs, hitBomb, null, this);
    }

    function update() {
      if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play("right", true);
      } else {
        player.setVelocityX(0);

        player.anims.play("turn");
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
      }
    }

    getPhaser(canvasRef.current, config);
  });

  return <canvas ref={canvasRef} id="Phaser" />;
}
PhaserTest.displayName = "Phaser Test";
