class LeaderboardModel {
  constructor() {
    this.storageKey = "asteroides_top10";
  }

  obtenerPuntajes() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  guardarPuntaje(puntaje) {
    if (puntaje <= 0) return;
    const puntajes = this.obtenerPuntajes();
    puntajes.push(puntaje);
    puntajes.sort((a, b) => b - a);
    const top10 = puntajes.slice(0, 10);
    localStorage.setItem(this.storageKey, JSON.stringify(top10));
  }
}