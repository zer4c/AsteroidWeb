class NaveController {
  constructor(ctx, canvas, balaController) {
    this.balaController = balaController;
    this.model = new NaveModel(canvas);
    this.view = new NaveSVG(ctx);
    this.vidas = 3;
    this.teclas = {};
    this.puedeDisparar = true;
    this.resetearCorazones();

    window.addEventListener("keydown", (e) => {
      this.teclas[e.key] = true;
      if (e.key === " ") {
        e.preventDefault();
        if (this.puedeDisparar) {
          this.disparar();
          this.puedeDisparar = false;
        }
      }
    });

    window.addEventListener("keyup", (e) => {
      this.teclas[e.key] = false;
      if (e.key === " ") {
        this.puedeDisparar = true;
      }
    });
  }

  resetearCorazones() {
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`heart-${i}`);
      if (el) el.classList.remove("perdido");
    }
  }

  moverNave() {
    let moviendoAdelante = false;
    if (this.teclas["ArrowUp"] || this.teclas["W"] || this.teclas["w"]) {
      moviendoAdelante = true;
    }
    this.model.mover(this.teclas);
    return moviendoAdelante;
  }

  dibujar(moviendoAdelante) {
    this.view.dibujar(this.model, moviendoAdelante);
  }

  disparar() {
    this.balaController.crearBala(
      this.model.cx,
      this.model.cy,
      this.model.angulo,
    );
  }

  reducirVidas() {
    if (this.vidas > 0) {
      this.vidas--;
      this.actualizarCorazones();
    }
    return this.vidas;
  }

  actualizarCorazones() {
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`heart-${i}`);
      if (el) {
        el.classList.toggle("perdido", i > this.vidas);
      }
    }
  }
}
