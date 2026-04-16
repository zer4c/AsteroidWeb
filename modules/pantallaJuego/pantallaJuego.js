class PantallaJuego {
  constructor() {
    this.canvas = document.getElementById("miCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.nave = null;
    this.controlador = null;
    this.particulasController = null;
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
    this.nave = new Nave(this.ctx, this.canvas);
    this.particulasController = new ParticulasController(this.ctx, this.canvas);
    this.controlador = new AsteroideController(this.ctx, this.canvas, this.particulasController);

    this.intervaloGeneracion = setInterval(() => {
      this.intentarGenerarAsteroide(Math.random());
    }, 500);

    this.bucleJuego();
  }

  bucleJuego() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.nave.actualizar();
    this.nave.dibujar();
    this.controlador.moverAsteroides();
    this.particulasController.moverParticulas();
    requestAnimationFrame(() => this.bucleJuego());
  }

  detenerJuego() {
    clearInterval(this.intervaloGeneracion);
  }
}
