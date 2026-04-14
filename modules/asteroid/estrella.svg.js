class Estrella {
  constructor(ctx, escala) {
    this.ctx = ctx;
    this.escala = escala;
  }

  dibujar(x, y) {
    const { ctx, escala } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 20, y - 35);
    ctx.lineTo(x + 10, y - 60);
    ctx.lineTo(x + 45, y - 50);2
    ctx.lineTo(x + 55, y - 35);
    ctx.lineTo(x + 35, y - 20);
    ctx.lineTo(x + 20, y + 10);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}
