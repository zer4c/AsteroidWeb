class BalaSVG {
  constructor(ctx) {
    this.ctx = ctx;
  }

  dibujar(model) {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(model.x - 2, model.y - 2, 4, 4);
  }
}
