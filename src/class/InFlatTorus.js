import Circle from './Circle.js';

class InFlatTorus extends Circle {
    // Surcharge de la méthode move pour créer l'effet de tore
    move(dt, ctx) {
        // Appeler la méthode move de la classe parent pour mettre à jour la position
        super.move(dt);

        // Gestion des bords du canvas (tore plat) en tenant compte du rayon
        if (this.x - this.radius > ctx.canvas.width) {
            this.x = -this.radius;
        } else if (this.x + this.radius < 0) {
            this.x = ctx.canvas.width + this.radius;
        }

        if (this.y - this.radius > ctx.canvas.height) {
            this.y = -this.radius;
        } else if (this.y + this.radius < 0) {
            this.y = ctx.canvas.height + this.radius;
        }
    }
}

export default InFlatTorus;
