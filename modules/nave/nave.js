class Nave {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.ajustarPantalla();
        this.teclas = {};
        this.movimiento = 8;
        this.angulo = 0;
        this.velocidadGiro = 0.5;
        window.addEventListener("resize", () => this.ajustarPantalla());
        window.addEventListener("keydown", (e) => this.teclas[e.key] = true);
        window.addEventListener("keyup", (e) => this.teclas[e.key] = false);

    }
    ajustarPantalla() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cx = this.canvas.width  / 2;
        this.cy = this.canvas.height / 2;
    }
    actualizar(){
        if(this.teclas["ArrowUp"] || this.teclas["W"] || this.teclas["w"]){
            this.cx += Math.sin(this.angulo) * this.movimiento;
            this.cy -= Math.cos(this.angulo) * this.movimiento;
        }
        if(this.teclas["ArrowDown"] || this.teclas["S"] || this.teclas["s"]){
            this.cx -= Math.sin(this.angulo) * this.movimiento;
            this.cy += Math.cos(this.angulo) * this.movimiento;
        }
        if(this.teclas["ArrowLeft"] || this.teclas["A"] || this.teclas["a"]){
            this.angulo -= this.velocidadGiro * (Math.PI / 180)
        }
        if(this.teclas["ArrowRight"] || this.teclas["D"] || this.teclas["d"]){
            this.angulo += this.velocidadGiro * (Math.PI / 180);
        }
    }

    

    dibujar() {
        const ctx = this.ctx;
        const s   = 0.3; 

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.save();
        ctx.translate(this.cx, this.cy);
        ctx.rotate(this.angulo);
        ctx.strokeStyle = "white";
        

        ctx.beginPath();
        ctx.moveTo(0,    -60*s);
        ctx.lineTo(50*s,  60*s);
        ctx.lineTo(0,     40*s);
        ctx.lineTo(-50*s, 60*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-40*s, 20*s);
        ctx.lineTo(-70*s, 90*s);
        ctx.lineTo(-75*s, 50*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40*s, 20*s);
        ctx.lineTo(75*s, 50*s);
        ctx.lineTo(70*s, 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-45*s, 65*s);
        ctx.lineTo(-20*s, 55*s);
        ctx.lineTo(-35*s, 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-15*s, 55*s);
        ctx.lineTo(0,     47*s);
        ctx.lineTo(15*s,  55*s);
        ctx.lineTo(0,     90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(45*s, 65*s);
        ctx.lineTo(20*s, 55*s);
        ctx.lineTo(35*s, 90*s);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(-20*s, -10*s);
        ctx.lineTo(20*s,  -10*s);
        ctx.lineTo(20*s,   40*s);
        ctx.lineTo(-20*s,  40*s);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
    }

    iniciar(){
        const loop = () => {
            this.actualizar();
            this.dibujar();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
