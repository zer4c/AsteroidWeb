class EstrellaSVG {
  constructor(ctx) {
    this.ctx = ctx;
  }

  dibujar(model) {
    const { ctx } = this;
    const { escala, x, y } = model;
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

    ctx.restore();
  }
}
