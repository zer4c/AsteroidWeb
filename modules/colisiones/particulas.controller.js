class ParticulasController {
  constructor(ctx, canvas) {
    this.particulas = new Array(10).fill(null);
    this.ctx = ctx;
    this.canvas = canvas;
    this.ultimoTiempo = Date.now();
  }

  crearParticulaRectangular(x, y, velocidad, escala) {
    const indice = this.particulas.indexOf(null);
    if (indice === -1) return false;

    const angulo = Math.random() * 2 * Math.PI;
    const vx = Math.cos(angulo) * velocidad;
    const vy = Math.sin(angulo) * velocidad;
    const tiempoVida = 0.5;

    this.particulas[indice] = new ParticulaRectangularSVG(this.ctx, escala, x, y, vx, vy, tiempoVida);
    return true;
  }

  crearParticulaRedonda(x, y, velocidad, escala) {
    const indice = this.particulas.indexOf(null);
    if (indice === -1) return false;

    const angulo = Math.random() * 2 * Math.PI;
    const vx = Math.cos(angulo) * velocidad;
    const vy = Math.sin(angulo) * velocidad;
    const tiempoVida = 0.5;

    this.particulas[indice] = new ParticulaRedondaSVG(this.ctx, escala, x, y, vx, vy, tiempoVida);
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

      particula.dibujar();
    });
  }
}