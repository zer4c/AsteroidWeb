class Asteroide2SVG {
  constructor(ctx, escala, x, y) {
    this.ctx = ctx;
    this.escala = escala;
    this.x = x;
    this.y = y;
  }

  actualizar(velocidadX, velocidadY) {
    this.x += velocidadX;
    this.y += velocidadY;
  }

  dibujar() {
    const { ctx, escala, x, y } = this;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(escala, escala);

    ctx.beginPath();
    ctx.moveTo(x + 5, y + 10);
    ctx.lineTo(x - 28, y - 62);
    ctx.lineTo(x - 17, y - 55);
    ctx.lineTo(x + 13, y - 82);
    ctx.lineTo(x + 43, y - 57);
    ctx.lineTo(x + 62, y - 45);
    ctx.lineTo(x + 50, y - 5);
    ctx.lineTo(x + 38, y - 15);
    ctx.lineTo(x + 25, y + 13);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - 1.2, y - 15.0); 
    ctx.lineTo(x + 38.3, y - 15.0); 
    ctx.lineTo(x + 38.3, y - 54.5); 
    ctx.lineTo(x - 1.2, y - 54.5); 
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.restore();
  }
}
