class NaveController {
    constructor(ctx, canvas, balaController) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.balaController = balaController;
        this.nave = new NaveSVG(ctx, canvas);

        this.teclas = {};
        this.puedeDisparar = true;
        window.addEventListener("keydown", (e) => {
            this.teclas[e.key] = true;
            if (e.key === " ") {
                e.preventDefault();
                if (this.puedeDisparar) {
                    this.disparar();
                    this.puedeDisparar = false;
                }
            }
        });
        window.addEventListener("keyup", (e) => {
            this.teclas[e.key] = false;
            if (e.key === " ") {
                this.puedeDisparar = true;
            }
        });
    }

    moverNave() {
        this.nave.moverNave(this.teclas);
    }

    disparar() {
        this.balaController.crearBala(this.nave.cx, this.nave.cy, this.nave.angulo);
    }
}