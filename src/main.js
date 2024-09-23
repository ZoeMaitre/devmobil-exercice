import BouncingCircle from "./class/BouncingCircle";
import { TAU } from "./utils/math";

const ctx = document.querySelector('canvas').getContext('2d');

// set canvas size to match the parent container
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

const circles = [];
for (let i = 0; i < 150; i++) {
  const radius = Math.pow(Math.random(), 2) * 80 + 10;
  const speed = radius * 2;

  const x = Math.random() * (ctx.canvas.width - 2 * radius) + radius;  // Entre radius et (canvas.width - radius)
  const y = Math.random() * (ctx.canvas.height - 2 * radius) + radius; // Entre radius et (canvas.height - radius)

  circles.push(new BouncingCircle({
    radius: radius,
    x: x,
    y: y,
    speed: speed,
    dir: Math.random() * TAU,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  }));
}

circles.sort((a, b) => a.compareTo(b));

// raf loop
function tick(timestamp) {
  const dt = timestamp - lastTick;
  lastTick = timestamp;
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;

  for (const circle of circles) {
    circle.move(dt, ctx);  // Passe ctx comme argument à la méthode move
    circle.draw(ctx);
  }

  requestAnimationFrame(tick);
}
let lastTick = 0;
requestAnimationFrame(tick);
