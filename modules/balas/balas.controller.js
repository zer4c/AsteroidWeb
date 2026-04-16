class BalaController {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.balas = [];
  }

  crearBala(x, y, angulo) {
    const vx = Math.sin(angulo) * 10;
    const vy = -Math.cos(angulo) * 10;
    this.balas.push(new BalaSVG(this.ctx, x, y, vx, vy));
  }

  moverBalas() {
    for (let i = 0; i < this.balas.length; i++) {
        this.balas[i].actualizar();
    }
    let nuevasBalas = [];
    for (let i = 0; i < this.balas.length; i++) {
        let b = this.balas[i];
        if (b.x > -10 && b.x < this.canvas.width + 10 &&
            b.y > -10 && b.y < this.canvas.height + 10) {
            nuevasBalas.push(b);
        }
    }
    this.balas = nuevasBalas;

    for (let i = 0; i < this.balas.length; i++) {
        this.balas[i].dibujar();
    }
  }
}