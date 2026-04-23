class ParticulaRectangularSVG {
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
    ctx.rect(-10, -10, 20, 20);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}