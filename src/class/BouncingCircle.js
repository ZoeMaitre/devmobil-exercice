import Circle from './Circle.js';

class BouncingCircle extends Circle {
    // Surcharge de la méthode move pour gérer les rebonds contre les bords
    move(dt, ctx) {
        // Calcul de la nouvelle position
        super.move(dt);

        // Inverser la direction si le cercle touche le bord droit ou gauche
        if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
            this.dir = Math.PI - this.dir;  // Inversion horizontale
        }

        // Inverser la direction si le cercle touche le bord haut ou bas
        if (this.y + this.radius > ctx.canvas.height || this.y - this.radius < 0) {
            this.dir = -this.dir;  // Inversion verticale
        }
    }
}

export default BouncingCircle;
