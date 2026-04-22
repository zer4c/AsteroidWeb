class BalaController {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.balas = new Array(10).fill(null);
  }

  crearBala(x, y, angulo) {
    const indice = this.balas.indexOf(null);
    if (indice === -1) return false;

    const vx = Math.sin(angulo) * 10;
    const vy = -Math.cos(angulo) * 10;
    this.balas[indice] = new BalaSVG(this.ctx, x, y, vx, vy);
    return true;
  }

  moverBalas() {
    for (let i = 0; i < this.balas.length; i++) {
      if (this.balas[i] === null) continue;

      this.balas[i].actualizar();

      if (
        this.balas[i].x < 0 ||
        this.balas[i].x > this.canvas.width||
        this.balas[i].y < 0 ||
        this.balas[i].y > this.canvas.height 
      ) {
        this.balas[i] = null;
      } else {
        this.balas[i].dibujar();
      }
    }
  }
}