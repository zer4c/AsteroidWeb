class ScoreModel {
  constructor() {
    this.score = 0;
  }

  incrementar() {
    this.score += 1;
  }

  reiniciar() {
    this.score = 0;
  }

  obtenerValor() {
    return this.score;
  }
}