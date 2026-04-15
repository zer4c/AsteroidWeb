class PantallaJuego {
  constructor() {
    this.canvas = document.getElementById("miCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.controlador = null;
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
    this.controlador = new AsteroideController(this.ctx, this.canvas);

    this.intervaloGeneracion = setInterval(() => {
      this.intentarGenerarAsteroide(Math.random());
    }, 500);

    this.bucleJuego();
  }

  bucleJuego() {
    this.controlador.moverAsteroides();
    requestAnimationFrame(() => this.bucleJuego());
  }

  detenerJuego() {
    clearInterval(this.intervaloGeneracion);
  }
}
