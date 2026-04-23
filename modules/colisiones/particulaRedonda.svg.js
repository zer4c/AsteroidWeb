class ParticulaRedondaSVG {
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
    ctx.arc(0, 0, 15, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}