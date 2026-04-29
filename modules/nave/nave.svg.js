class NaveSVG {
  constructor(ctx) {
    this.ctx = ctx;
  }

  dibujar(model, moviendoAdelante) {
    if (moviendoAdelante === undefined) {
      moviendoAdelante = false;
    }

    const ctx = this.ctx;
    const s = 0.2;

    ctx.save();
    ctx.translate(model.cx, model.cy);
    ctx.rotate(model.angulo);
    ctx.strokeStyle = "white";

    ctx.beginPath();
    ctx.moveTo(0, -60 * s);
    ctx.lineTo(50 * s, 60 * s);
    ctx.lineTo(0, 40 * s);
    ctx.lineTo(-50 * s, 60 * s);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-40 * s, 20 * s);
    ctx.lineTo(-70 * s, 90 * s);
    ctx.lineTo(-75 * s, 50 * s);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40 * s, 20 * s);
    ctx.lineTo(75 * s, 50 * s);
    ctx.lineTo(70 * s, 90 * s);
    ctx.closePath();
    ctx.stroke();

    const flameLength = moviendoAdelante ? 105 * s : 90 * s;

    ctx.beginPath();
    ctx.moveTo(-45 * s, 65 * s);
    ctx.lineTo(-20 * s, 55 * s);
    ctx.lineTo(-35 * s, flameLength);
    ctx.closePath();
    ctx.strokeStyle = moviendoAdelante ? "orange" : "white";
    ctx.lineWidth = moviendoAdelante ? 1.5 : 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-15 * s, 55 * s);
    ctx.lineTo(0, 47 * s);
    ctx.lineTo(15 * s, 55 * s);
    ctx.lineTo(0, flameLength);
    ctx.closePath();
    ctx.strokeStyle = moviendoAdelante ? "red" : "white";
    ctx.lineWidth = moviendoAdelante ? 1.5 : 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(45 * s, 65 * s);
    ctx.lineTo(20 * s, 55 * s);
    ctx.lineTo(35 * s, flameLength);
    ctx.closePath();
    ctx.strokeStyle = moviendoAdelante ? "orange" : "white";
    ctx.lineWidth = moviendoAdelante ? 1.5 : 1;
    ctx.stroke();

    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(-20 * s, -10 * s);
    ctx.lineTo(20 * s, -10 * s);
    ctx.lineTo(20 * s, 40 * s);
    ctx.lineTo(-20 * s, 40 * s);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }
}
