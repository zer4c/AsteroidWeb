class ParticulaRedondaSVG {
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
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }

  estaViva() {
    return this.tiempoVida > 0;
  }
}