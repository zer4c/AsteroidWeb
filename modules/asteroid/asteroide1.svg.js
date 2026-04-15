class AsteroideSVG {
  constructor(ctx, escala, x, y, rotacion) {
    this.ctx = ctx;
    this.escala = escala;
    this._x = x;
    this._y = y;
    this.rotacion = rotacion;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  actualizar(velocidadX, velocidadY) {
    this._x += velocidadX;
    this._y += velocidadY;
  }

  dibujar() {
    const { ctx, escala, x, y } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);
    ctx.rotate(this.rotacion * Math.PI / 180); // Aplicar rotación en radianes

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-20, -35);
    ctx.lineTo(10, -60);
    ctx.lineTo(45, -50);
    ctx.lineTo(55, -35);
    ctx.lineTo(35, -20);
    ctx.lineTo(20, 10);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0.1, -13.2);
    ctx.lineTo(31.6, -13.2);
    ctx.lineTo(31.6, -44.7);
    ctx.lineTo(0.1, -44.7);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}
