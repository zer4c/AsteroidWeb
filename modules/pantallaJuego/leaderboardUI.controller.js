class LeaderboardUIController {
  constructor(leaderboardModel, leaderboardView) {
    this.leaderboardModel = leaderboardModel;
    this.leaderboardView = leaderboardView;
    this._iniciarEventos();
  }

  _iniciarEventos() {
    const overlayLb = document.getElementById("overlay-leaderboard");
    const btnLb = document.getElementById("m-lb");
    const btnCerrar = document.getElementById("btn-cerrar-lb");

    if (btnLb) {
      btnLb.addEventListener("click", () => {
        this.leaderboardView.renderizar(
          this.leaderboardModel.obtenerPuntajes(),
        );
        overlayLb.classList.remove("oculto");
      });
    }

    if (btnCerrar) {
      btnCerrar.addEventListener("click", () => {
        overlayLb.classList.add("oculto");
      });
    }
  }

  guardarYRenderizar(valor) {
    this.leaderboardModel.guardarPuntaje(valor);
    this.leaderboardView.renderizar(this.leaderboardModel.obtenerPuntajes());
  }
}
