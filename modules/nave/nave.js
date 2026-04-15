class Nave {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.ajustarPantalla();

        window.addEventListener("resize", () => {
            this.ajustarPantalla();
            this.dibujar();
        });
    }

    ajustarPantalla() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cx = this.canvas.width  / 2;
        this.cy = this.canvas.height / 2;
    }

    dibujar() {
        const ctx = this.ctx;
        const cx  = this.cx;
        const cy  = this.cy;
        const s   = 0.5; 

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.strokeStyle = "white";

        ctx.beginPath();
        ctx.moveTo(cx,           cy - 60*s);
        ctx.lineTo(cx + 50*s,    cy + 60*s);
        ctx.lineTo(cx,           cy + 40*s);
        ctx.lineTo(cx - 50*s,    cy + 60*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 40*s,    cy + 20*s);
        ctx.lineTo(cx - 70*s,    cy + 90*s);
        ctx.lineTo(cx - 75*s,    cy + 50*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx + 40*s,    cy + 20*s);
        ctx.lineTo(cx + 75*s,    cy + 50*s);
        ctx.lineTo(cx + 70*s,    cy + 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 45*s,    cy + 65*s);
        ctx.lineTo(cx - 20*s,    cy + 55*s);
        ctx.lineTo(cx - 35*s,    cy + 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - 15*s,    cy + 55*s);
        ctx.lineTo(cx,           cy + 47*s);
        ctx.lineTo(cx + 15*s,    cy + 55*s);
        ctx.lineTo(cx,           cy + 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx + 45*s,    cy + 65*s);
        ctx.lineTo(cx + 20*s,    cy + 55*s);
        ctx.lineTo(cx + 35*s,    cy + 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(cx - 20*s, cy - 10*s);
        ctx.lineTo(cx + 20*s, cy - 10*s);
        ctx.lineTo(cx + 20*s, cy + 40*s);
        ctx.lineTo(cx - 20*s, cy + 40*s);
        ctx.closePath();
        ctx.stroke();
    }
}

const nave =  new Nave("miCanvas");
nave.dibujar();