class AsteroideSVG {
  constructor(ctx, escala, x, y) {
    this.ctx = ctx;
    this.escala = escala;
    this.x = x;
    this.y = y;
  }

  actualizar(velocidadX, velocidadY) {
    this.x += velocidadX;
    this.y += velocidadY;
  }

  dibujar() {
    const { ctx, escala, x, y } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y - 35);
    ctx.lineTo(x + 10, y - 60);
    ctx.lineTo(x + 45, y - 50);
    ctx.lineTo(x + 55, y - 35);
    ctx.lineTo(x + 35, y - 20);
    ctx.lineTo(x + 20, y + 10);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 0.1, y - 13.2);
    ctx.lineTo(x + 31.6, y - 13.2);
    ctx.lineTo(x + 31.6, y - 44.7);
    ctx.lineTo(x + 0.1, y - 44.7);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}
