class Asteroide2SVG {
  constructor(ctx) {
    this.ctx = ctx;
  }

  dibujar(model) {
    const { ctx } = this;
    const { escala, x, y } = model;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);
    ctx.rotate((model.rotacion * Math.PI) / 180);

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

    ctx.restore();
  }
}
