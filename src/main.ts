import kaboom from "kaboom";

kaboom({
  background: [0, 0, 0],
});

loadSpriteAtlas("/assets/sprites.png", {
  hamburger: {
    x: 0,
    y: 0,
    width: 16,
    height: 16,
  },
  soda: {
    x: 16,
    y: 0,
    width: 16,
    height: 16,
  },
  clover: {
    x: 0,
    y: 16,
    width: 16,
    height: 16,
  },
  coffee: {
    x: 16,
    y: 16,
    width: 16,
    height: 16,
  },
});

const sprites = [
  "hamburger",
  "soda",
  "clover",
  "coffee",
];

loop(0.1, () => {
  add([
    pos(mousePos()),
    sprite(choose(sprites)),
    origin("center"),
    scale(rand(3, 4)),
    area(),
    body({ solid: false }),
    lifespan(1, { fade: 0.5 }),
    move(choose([UP, LEFT, RIGHT]), rand(0, 360)),
  ]);
});

add([
  text("Hello World!"),
  pos(center()),
  origin("center"),
  z(50),
]);

onClick(() => burp());