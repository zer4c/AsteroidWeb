class PantallaJuegoModel {
  constructor() {
    this.juegoIniciado = false;
    this.animFrameId = null;
    this.intervaloGeneracion = null;
  }

  marcarIniciado() {
    this.juegoIniciado = true;
  }

  estaIniciado() {
    return this.juegoIniciado;
  }
}
