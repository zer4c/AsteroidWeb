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

    const vx = x < mitadX ? Math.random() * 5 : Math.random() * -5;
    const vy = y <= mitadY ? Math.random() * 5 : Math.random() * -5;

    return { x, y, vx, vy };
  }

  crearAsteroide1() {
    const indice = this.asteroides.indexOf(null);
    if (indice === -1) return false;

    const { x, y, vx, vy } = this.parametrosAleatorios();
    const asteroide = new AsteroideSVG(
      this.ctx,
      Math.random() * 0.5 + 0.5,
      x,
      y,
    );
    asteroide.vx = vx;
    asteroide.vy = vy;
    this.asteroides[indice] = asteroide;
    return true;
  }

  crearAsteroide2() {
    const indice = this.asteroides.indexOf(null);
    if (indice === -1) return false;

    const { x, y, vx, vy } = this.parametrosAleatorios();
    const asteroide = new Asteroide2SVG(
      this.ctx,
      Math.random() * 0.5 + 0.5,
      x,
      y,
    );
    asteroide.vx = vx;
    asteroide.vy = vy;
    this.asteroides[indice] = asteroide;
    return true;
  }

  eliminarAsteroide(indice) {
    if (indice < 0 || indice >= this.asteroides.length) return false;
    this.asteroides[indice] = null;
    return true;
  }

  moverAsteroides() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.asteroides.forEach((asteroide) => {
      if (asteroide === null) return;
      asteroide.actualizar(asteroide.vx, asteroide.vy);
      asteroide.dibujar();
    });
  }
}
