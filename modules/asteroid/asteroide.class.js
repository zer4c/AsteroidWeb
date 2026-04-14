class AsteroideController {
  constructor(ctx, canvas) {
    this.asteroides = new Array(10).fill(null);
    this.ctx = ctx;
    this.canvas = canvas;
  }

  parametrosAleatorios() {
    const mitadX = this.canvas.width / 2;
    const mitadY = this.canvas.height / 2;

    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;

    const vx = x < mitadX ? Math.random() * 20 : Math.random() * -20;
    const vy = y <= mitadY ? Math.random() * 20 : Math.random() * -20;

    return { x, y, vx, vy };
  }

  crearAsteroide() {
    const indice = this.asteroides.indexOf(null);
    if (indice === -1) return false;

    const { x, y, vx, vy } = this.parametrosAleatorios();
    this.asteroides[indice] = new Asteroide(this.ctx, x, y, vx, vy);
    return true;
  }

  eliminarAsteroide(indice) {
    if (indice < 0 || indice >= this.asteroides.length) return false;
    this.asteroides[indice] = null;
    return true;
  }
  moverAsteroides() {
    this.asteroides.forEach((asteroide) => {
      if (asteroide === null) return;
      asteroide.actualizar();
      asteroide.dibujar();
    });
  }
}
