class ParticulasController {
  constructor(ctx, canvas) {
    this.particulas = new Array(50).fill(null);
    this.canvas = canvas;
    this.ultimoTiempo = Date.now();
    this.viewRectangular = new ParticulaRectangularSVG(ctx);
    this.viewRedonda = new ParticulaRedondaSVG(ctx);
  }

  crearParticulaRectangular(x, y, velocidad, escala) {
    const indice = this.particulas.indexOf(null);
    if (indice === -1) return false;

    const angulo = Math.random() * 2 * Math.PI;
    const vx = Math.cos(angulo) * velocidad;
    const vy = Math.sin(angulo) * velocidad;
    const tiempoVida = 0.5;

    const model = new ParticulaModel(escala, x, y, vx, vy, tiempoVida);
    model._view = this.viewRectangular;
    this.particulas[indice] = model;
    return true;
  }

  crearParticulaRedonda(x, y, velocidad, escala) {
    const indice = this.particulas.indexOf(null);
    if (indice === -1) return false;

    const angulo = Math.random() * 2 * Math.PI;
    const vx = Math.cos(angulo) * velocidad;
    const vy = Math.sin(angulo) * velocidad;
    const tiempoVida = 1;

    const model = new ParticulaModel(escala, x, y, vx, vy, tiempoVida);
    model._view = this.viewRedonda;
    this.particulas[indice] = model;
    return true;
  }

  eliminarParticula(indice) {
    if (indice < 0 || indice >= this.particulas.length) return false;
    this.particulas[indice] = null;
    return true;
  }

  moverParticulas() {
    const ahora = Date.now();
    const deltaTime = (ahora - this.ultimoTiempo) / 1000;
    this.ultimoTiempo = ahora;

    this.particulas.forEach((particula, indice) => {
      if (particula === null) return;

      particula.actualizar(deltaTime);
      if (!particula.estaViva()) {
        this.eliminarParticula(indice);
        return;
      }

      particula._view.dibujar(particula);
    });
  }
}
