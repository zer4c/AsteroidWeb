class ParticulaRectangularSVG {
  constructor(ctx, escala, x, y, vx, vy, tiempoVida) {
    this.ctx = ctx;
    this.escala = escala;
    this._x = x;
    this._y = y;
    this.vx = vx;
    this.vy = vy;
    this.tiempoVida = tiempoVida;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  actualizar(deltaTime) {
    this._x += this.vx * deltaTime;
    this._y += this.vy * deltaTime;
    this.tiempoVida -= deltaTime;
  }

  dibujar() {
    const { ctx, escala, x, y } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);

    ctx.beginPath();
    ctx.rect(-10, -10, 20, 20);
    ctx.strokeStyle = "yellow";
    ctx.stroke();

    ctx.restore();
  }

  estaViva() {
    return this.tiempoVida > 0;
  }
}