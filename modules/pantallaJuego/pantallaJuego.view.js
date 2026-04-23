class PantallaJuegoView {
  mostrarJuego() {
    document.getElementById("game-inicio").classList.add("oculto");
  }

  mostrarGameOver() {
    document.getElementById("overlay-gameover").classList.remove("oculto");
  }

  ocultarGameOver() {
    document.getElementById("overlay-gameover").classList.add("oculto");
  }

  actualizarBalasUI(balas, total) {
    const disponibles = total - balas;
    for (let i = 1; i <= total; i++) {
      const el = document.getElementById(`balas-${i}`);
      if (el) el.classList.toggle("active", i <= disponibles);
      const hud = document.getElementById(`hud-bala-${i}`);
      if (hud) hud.classList.toggle("active", i <= disponibles);
    }
  }

  actualizarScoreUI(valor) {
    const el = document.getElementById("score-value");
    if (el) el.textContent = valor;
    const hud = document.getElementById("hud-score");
    if (hud) hud.textContent = valor;
  }

  actualizarCorazonesUI(vidas) {
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`heart-${i}`);
      if (el) el.classList.toggle("perdido", i > vidas);
      const hud = document.getElementById(`hud-heart-${i}`);
      if (hud) hud.classList.toggle("perdido", i > vidas);
    }
  }
}
