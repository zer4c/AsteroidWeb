class AsteroideSVG {
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

    ctx.restore();
  }
}
