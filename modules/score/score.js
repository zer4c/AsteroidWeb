class Score{
  constructor() {
    this.score = 0;
  }

  incrementar() {
    this.score += 1;
    document.getElementById("score-value").textContent = this.score;
  }

  reiniciar() {
    this.score = 0;
    this.updateDom();
  }
}
