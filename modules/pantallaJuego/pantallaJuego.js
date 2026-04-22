class PantallaJuego {
  constructor() {
    this.canvas = document.getElementById("miCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.nave = null;
    this.controlador = null;
    this.particulasController = null;
    this.balaController = null;
    this.score = null;
    this.intervaloGeneracion = null;
  }

  intentarGenerarAsteroide(probabilidad) {
    if (probabilidad < 0.5) return;

    if (Math.random() < 0.5) {
      this.controlador.crearAsteroide1();
    } else {
      this.controlador.crearAsteroide2();
    }
  }

  iniciarJuego() {
    this.particulasController = new ParticulasController(this.ctx, this.canvas);
    this.controlador = new AsteroideController(this.ctx, this.canvas, this.particulasController);
    this.balaController = new BalaController(this.ctx, this.canvas);
    this.score = new Score();
    this.nave = new NaveController(this.ctx, this.canvas, this.balaController);

    this.intervaloGeneracion = setInterval(() => {
      this.intentarGenerarAsteroide(Math.random());
    }, 500);

    this.bucleJuego();
  }

  bucleJuego() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.nave.moverNave();
    this.nave.nave.dibujar();
    this.balaController.moverBalas();
    const balasDisponibles = this.balaController.balas.length - this.balaController.contarBalas();
    // Actualizar barras de munición
    for (let i = 1; i <= this.balaController.balas.length; i++) {
      const barElement = document.getElementById(`ammo-${i}`);
      if (i <= balasDisponibles) {
        barElement.classList.add('active');
      } else {
        barElement.classList.remove('active');
      }
    }
    this.controlador.moverAsteroides();
    this.verificarColisiones();
    this.particulasController.moverParticulas();
    requestAnimationFrame(() => this.bucleJuego());
  }

  verificarColisiones() {
    for (let i = 0; i < this.balaController.balas.length; i++) {
      const bala = this.balaController.balas[i];
      if (!bala) continue;

      for (let j = this.controlador.asteroides.length - 1; j >= 0; j--) {
        const ast = this.controlador.asteroides[j];
        if (ast) {
          const dx = bala.x - ast.x;
          const dy = bala.y - ast.y;
          if (dx * dx + dy * dy < ast.radio * ast.radio) {
            for (let k = 0; k < 10; k++) {
              const velocidad = 50 + Math.random() * 100;
              this.particulasController.crearParticulaRectangular(ast.x, ast.y, velocidad, ast.escala);
            }
            for (let k = 0; k < 10; k++) {
              const velocidad = 50 + Math.random() * 100;
              this.particulasController.crearParticulaRedonda(ast.x, ast.y, velocidad, ast.escala);
            }
            this.controlador.eliminarAsteroide(j);
            this.balaController.balas[i] = null;
            if (this.score) {
              this.score.incrementar();
            }
            break;
          }
        }
      }
    }
  }

  detenerJuego() {
    clearInterval(this.intervaloGeneracion);
  }
}
