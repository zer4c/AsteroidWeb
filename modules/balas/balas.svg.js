class BalaSVG {
  constructor(ctx, x, y, vx, vy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  actualizar() {
    this.x += this.vx;
    this.y += this.vy;
  }

  dibujar() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
  }
}