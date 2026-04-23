class ControlesMovilController {
  constructor(onDisparar) {
    this.onDisparar = onDisparar;
    this.teclas = {};
  }

  iniciar(naveControllerRef) {
    this._naveRef = naveControllerRef;

    const press = (key) => {
      if (this._naveRef) this._naveRef.teclas[key] = true;
    };
    const release = (key) => {
      if (this._naveRef) this._naveRef.teclas[key] = false;
    };

    const addHold = (id, key) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          press(key);
        },
        { passive: false },
      );
      btn.addEventListener(
        "touchend",
        (e) => {
          e.preventDefault();
          release(key);
        },
        { passive: false },
      );
      btn.addEventListener(
        "touchcancel",
        (e) => {
          e.preventDefault();
          release(key);
        },
        { passive: false },
      );
      btn.addEventListener("mousedown", () => press(key));
      btn.addEventListener("mouseup", () => release(key));
      btn.addEventListener("mouseleave", () => release(key));
    };

    addHold("m-izq", "ArrowLeft");
    addHold("m-der", "ArrowRight");
    addHold("m-up", "ArrowUp");
    addHold("m-down", "ArrowDown");

    const disparar = () => {
      if (this._naveRef && this._naveRef.puedeDisparar) {
        this.onDisparar();
        this._naveRef.puedeDisparar = false;
        setTimeout(() => {
          if (this._naveRef) this._naveRef.puedeDisparar = true;
        }, 300);
      }
    };

    const btnFire = document.getElementById("m-fire");
    if (btnFire) {
      btnFire.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          disparar();
        },
        { passive: false },
      );
      btnFire.addEventListener("mousedown", () => disparar());
    }
  }
}
