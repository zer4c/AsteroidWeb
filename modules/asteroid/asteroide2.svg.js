class Asteroide2SVG {
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

  get radio() {
    return this.escala * 30;
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
    ctx.rotate(this.rotacion * Math.PI / 180); 

    ctx.beginPath();
    ctx.moveTo(5, 10);
    ctx.lineTo(-28, -62);
    ctx.lineTo(-17, -55);
    ctx.lineTo(13, -82);
    ctx.lineTo(43, -57);
    ctx.lineTo(62, -45);
    ctx.lineTo(50, -5);
    ctx.lineTo(38, -15);
    ctx.lineTo(25, 13);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-1.2, -15.0);
    ctx.lineTo(38.3, -15.0);
    ctx.lineTo(38.3, -54.5);
    ctx.lineTo(-1.2, -54.5);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}
