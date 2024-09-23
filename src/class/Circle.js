export default class Circle {
    constructor({
        radius = 100,
        color = 'red',
        x = 0,
        y = 0,
        speed = 100,
        dir = 0
    } = {}) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.dir = dir;
    }

    move(dt) {
        const dx = Math.cos(this.dir) * this.speed * dt / 1000;
        const dy = Math.sin(this.dir) * this.speed * dt / 1000;
        this.x += dx;
        this.y += dy;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    compareTo(otherCircle) {
        return this.radius - otherCircle.radius;
    }
}