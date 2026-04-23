class NaveModel {
  constructor(canvas) {
    this.canvas = canvas;
    this.ajustarPantalla();
    this.movimiento = 8;
    this.angulo = 0;
    this.velocidadGiro = 5;
  }

  ajustarPantalla() {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.cx = this.canvas.width / 2;
    this.cy = this.canvas.height / 2;
  }

  mover(teclas) {
    if (teclas["ArrowUp"] || teclas["W"] || teclas["w"]) {
      this.cx += Math.sin(this.angulo) * this.movimiento;
      this.cy -= Math.cos(this.angulo) * this.movimiento;
    }
    if (teclas["ArrowDown"] || teclas["S"] || teclas["s"]) {
      this.cx -= Math.sin(this.angulo) * this.movimiento;
      this.cy += Math.cos(this.angulo) * this.movimiento;
    }
    if (teclas["ArrowLeft"] || teclas["A"] || teclas["a"]) {
      this.angulo -= this.velocidadGiro * (Math.PI / 180);
    }
    if (teclas["ArrowRight"] || teclas["D"] || teclas["d"]) {
      this.angulo += this.velocidadGiro * (Math.PI / 180);
    }
    this.cx = Math.max(0, Math.min(this.canvas.width, this.cx));
    this.cy = Math.max(0, Math.min(this.canvas.height, this.cy));
  }
}
