class AsteroideController {
  constructor(ctx, canvas, particulasController) {
    this.asteroides = new Array(10).fill(null);
    this.canvas = canvas;
    this.particulasController = particulasController;
    this.view1 = new AsteroideSVG(ctx);
    this.view2 = new Asteroide2SVG(ctx);
  }

  parametrosAleatorios() {
    const margen = 0.1;
    const minX = this.canvas.width * margen;
    const maxX = this.canvas.width * (1 - margen);
    const minY = this.canvas.height * margen;
    const maxY = this.canvas.height * (1 - margen);

    let x;
    let y;
    if (Math.random() < 0.5) {
      x =
        Math.random() < 0.5
          ? Math.random() * minX
          : maxX + Math.random() * (this.canvas.width - maxX);
      y = Math.random() * this.canvas.height;
    } else {
      x = Math.random() * this.canvas.width;
      y =
        Math.random() < 0.5
          ? Math.random() * minY
          : maxY + Math.random() * (this.canvas.height - maxY);
    }

    const vx =
      x < this.canvas.width / 2 ? Math.random() * 5 : Math.random() * -5;
    const vy =
      y <= this.canvas.height / 2 ? Math.random() * 5 : Math.random() * -5;

    return { x, y, vx, vy };
  }

  crearAsteroide1() {
    const indice = this.asteroides.indexOf(null);
    if (indice === -1) return false;

    const { x, y, vx, vy } = this.parametrosAleatorios();
    const rotacion = Math.random() * 360;
    const model = new AsteroideModel(Math.random() * 0.5 + 0.5, x, y, rotacion);
    model.vx = vx;
    model.vy = vy;
    model._view = this.view1;
    this.asteroides[indice] = model;
    return true;
  }

  crearAsteroide2() {
    const indice = this.asteroides.indexOf(null);
    if (indice === -1) return false;

    const { x, y, vx, vy } = this.parametrosAleatorios();
    const rotacion = Math.random() * 360;
    const model = new AsteroideModel(Math.random() * 0.5 + 0.5, x, y, rotacion);
    model.vx = vx;
    model.vy = vy;
    model._view = this.view2;
    this.asteroides[indice] = model;
    return true;
  }

  eliminarAsteroide(indice) {
    if (indice < 0 || indice >= this.asteroides.length) return false;
    this.asteroides[indice] = null;
    return true;
  }

  estaFueraPantalla(asteroide) {
    const margen = 100;
    return (
      asteroide.x < -margen ||
      asteroide.x > this.canvas.width + margen ||
      asteroide.y < -margen ||
      asteroide.y > this.canvas.height + margen
    );
  }

  generarParticulas(asteroide) {
    for (let i = 0; i < 5; i++) {
      const velocidad = 100 + Math.random() * 100;
      this.particulasController.crearParticulaRectangular(
        asteroide.x,
        asteroide.y,
        velocidad,
        asteroide.escala,
      );
    }
    for (let i = 0; i < 5; i++) {
      const velocidad = 100 + Math.random() * 100;
      this.particulasController.crearParticulaRedonda(
        asteroide.x,
        asteroide.y,
        velocidad,
        asteroide.escala,
      );
    }
  }

  moverAsteroides() {
    this.asteroides.forEach((asteroide, indice) => {
      if (asteroide === null) return;

      asteroide.actualizar(asteroide.vx, asteroide.vy);
      if (this.estaFueraPantalla(asteroide)) {
        this.generarParticulas(asteroide);
        this.eliminarAsteroide(indice);
        return;
      }

      asteroide._view.dibujar(asteroide);
    });
  }
}
