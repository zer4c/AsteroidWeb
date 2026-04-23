class Leaderboard {
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

  renderizar() {
    const lista = document.getElementById("leaderboard-list");
    if (!lista) return;
    const puntajes = this.obtenerPuntajes();
    lista.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      const entry = document.createElement("div");
      entry.classList.add("lb-entry");
      if (puntajes[i] !== undefined) {
        entry.innerHTML = `<span class="lb-rank">#${i + 1}</span><span class="lb-score">${puntajes[i]}</span>`;
      } else {
        entry.innerHTML = `<span class="lb-rank">#${i + 1}</span><span class="lb-score lb-empty">---</span>`;
      }
      lista.appendChild(entry);
    }
  }
}
