class ColisionesController {
  constructor(
    balaController,
    asteroidController,
    particulasController,
    scoreModel,
    view,
    onGameOver,
  ) {
    this.balaController = balaController;
    this.asteroidController = asteroidController;
    this.particulasController = particulasController;
    this.scoreModel = scoreModel;
    this.view = view;
    this.onGameOver = onGameOver;
  }

  verificarBalaAsteroide() {
    for (let i = 0; i < this.balaController.balas.length; i++) {
      const bala = this.balaController.balas[i];
      if (!bala) continue;
      for (let j = this.asteroidController.asteroides.length - 1; j >= 0; j--) {
        const ast = this.asteroidController.asteroides[j];
        if (!ast) continue;
        const dx = bala.x - ast.x;
        const dy = bala.y - ast.y;
        if (dx * dx + dy * dy < ast.radio * ast.radio) {
          for (let k = 0; k < 10; k++) {
            this.particulasController.crearParticulaRectangular(
              ast.x,
              ast.y,
              50 + Math.random() * 100,
              ast.escala,
            );
          }
          for (let k = 0; k < 10; k++) {
            this.particulasController.crearParticulaRedonda(
              ast.x,
              ast.y,
              50 + Math.random() * 100,
              ast.escala,
            );
          }
          this.asteroidController.eliminarAsteroide(j);
          this.balaController.balas[i] = null;
          this.scoreModel.incrementar();
          this.view.actualizarScoreUI(this.scoreModel.obtenerValor());
          break;
        }
      }
    }
  }

  verificarNaveAsteroide(naveModel, naveController) {
    const radioNave = 15;
    for (let j = this.asteroidController.asteroides.length - 1; j >= 0; j--) {
      const ast = this.asteroidController.asteroides[j];
      if (!ast) continue;
      const dx = naveModel.cx - ast.x;
      const dy = naveModel.cy - ast.y;
      if (
        dx * dx + dy * dy <
        (radioNave + ast.radio) * (radioNave + ast.radio)
      ) {
        this.asteroidController.eliminarAsteroide(j);
        const vidas = naveController.reducirVidas();
        this.view.actualizarCorazonesUI(vidas);
        if (vidas <= 0) this.onGameOver();
      }
    }
  }
}
