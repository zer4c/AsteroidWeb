class ParticulaModel {
  constructor(escala, x, y, vx, vy, tiempoVida) {
    this.escala = escala;
    this._x = x;
    this._y = y;
    this.vx = vx;
    this.vy = vy;
    this.tiempoVida = tiempoVida;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  actualizar(deltaTime) {
    this._x += this.vx * deltaTime;
    this._y += this.vy * deltaTime;
    this.tiempoVida -= deltaTime;
  }

  estaViva() {
    return this.tiempoVida > 0;
  }
}