class LeaderboardView {
  _renderizarEn(idLista, puntajes) {
    const lista = document.getElementById(idLista);
    if (!lista) return;
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

  renderizar(puntajes) {
    this._renderizarEn("leaderboard-list", puntajes);
    this._renderizarEn("leaderboard-list-landscape", puntajes);
  }
}