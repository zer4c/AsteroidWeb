class BalaModel {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  actualizar() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
