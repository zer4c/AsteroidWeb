class AsteroideModel {
  constructor(escala, x, y, rotacion) {
    this.escala = escala;
    this._x = x;
    this._y = y;
    this.rotacion = rotacion;
    this.vx = 0;
    this.vy = 0;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get radio() {
    return this.escala * 40;
  }

  actualizar(velocidadX, velocidadY) {
    this._x += velocidadX;
    this._y += velocidadY;
  }
}
