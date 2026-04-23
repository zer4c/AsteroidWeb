class PantallaJuego {
  constructor() {
    this.canvas = document.getElementById("miCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.model = new PantallaJuegoModel();
    this.view = new PantallaJuegoView();

    this.scoreModel = null;
    this.scoreView = new ScoreView();
    this.leaderboardModel = new LeaderboardModel();
    this.leaderboardView = new LeaderboardView();
    this.leaderboardUI = new LeaderboardUIController(
      this.leaderboardModel,
      this.leaderboardView,
    );

    this.naveController = null;
    this.asteroidController = null;
    this.particulasController = null;
    this.balaController = null;
    this.colisionesController = null;
    this.controlesMovil = new ControlesMovilController(() => {
      if (this.naveController) this.naveController.disparar();
    });

    this.leaderboardView.renderizar(this.leaderboardModel.obtenerPuntajes());
    this._iniciarEventos();
  }

  _iniciarEventos() {

    const iniciarJuegoHandler = (e) => {
      if (e) e.preventDefault();

      if (!this.model.estaIniciado()) {
        this.model.marcarIniciado();
        this.view.mostrarJuego();
        this.iniciarJuego();

        const audio = document.getElementById("bg-music");

        if (audio) {
          audio.muted = false;
          audio.volume = 0.4;
          audio.play().catch(err => console.log("Error audio:", err));
        } else {
          console.log("No se encontró el audio");
        }
      }
    };

    const btn = document.getElementById("btn-iniciar");

    btn.addEventListener("click", iniciarJuegoHandler);
    btn.addEventListener("touchstart", iniciarJuegoHandler, { passive: false });


    document.getElementById("btn-reiniciar").addEventListener("click", () => {
      if (this.scoreModel)
        this.leaderboardUI.guardarYRenderizar(this.scoreModel.obtenerValor());
      this.reiniciarJuego();
    });

    document
      .getElementById("btn-reiniciar-gameover")
      .addEventListener("click", () => {
        this.view.ocultarGameOver();
        this.reiniciarJuego();
      });
  }
  iniciarJuego() {
    this.particulasController = new ParticulasController(this.ctx, this.canvas);
    this.asteroidController = new AsteroideController(
      this.ctx,
      this.canvas,
      this.particulasController,
    );
    this.balaController = new BalaController(this.ctx, this.canvas);
    this.scoreModel = new ScoreModel();
    this.naveController = new NaveController(
      this.ctx,
      this.canvas,
      this.balaController,
    );
    this.colisionesController = new ColisionesController(
      this.balaController,
      this.asteroidController,
      this.particulasController,
      this.scoreModel,
      this.view,
      () => this.gameOver(),
    );

    this.controlesMovil.iniciar(this.naveController);
    this.view.actualizarScoreUI(this.scoreModel.obtenerValor());

    this.model.intervaloGeneracion = setInterval(() => {
      if (Math.random() >= 0.5) {
        Math.random() < 0.5
          ? this.asteroidController.crearAsteroide1()
          : this.asteroidController.crearAsteroide2();
      }
    }, 500);

    this.bucleJuego();
  }

  reiniciarJuego() {
    cancelAnimationFrame(this.model.animFrameId);
    clearInterval(this.model.intervaloGeneracion);
    this.view.ocultarGameOver();
    this.naveController = null;
    this.asteroidController = null;
    this.particulasController = null;
    this.balaController = null;
    this.scoreModel = null;
    this.colisionesController = null;
    this.iniciarJuego();
  }

  bucleJuego() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const moviendoAdelante = this.naveController.moverNave();
    this.naveController.dibujar(moviendoAdelante);

    this.balaController.moverBalas();
    this.view.actualizarBalasUI(
      this.balaController.contarBalas(),
      this.balaController.balas.length,
    );

    this.asteroidController.moverAsteroides();
    this.colisionesController.verificarBalaAsteroide();
    this.colisionesController.verificarNaveAsteroide(
      this.naveController.model,
      this.naveController,
    );
    this.particulasController.moverParticulas();

    this.model.animFrameId = requestAnimationFrame(() => this.bucleJuego());
  }

  gameOver() {
    clearInterval(this.model.intervaloGeneracion);
    cancelAnimationFrame(this.model.animFrameId);
    if (this.scoreModel)
      this.leaderboardUI.guardarYRenderizar(this.scoreModel.obtenerValor());
    this.view.mostrarGameOver();
  }
}
