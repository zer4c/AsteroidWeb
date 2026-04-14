const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(80, 65);
ctx.lineTo(110, 40);
ctx.lineTo(145, 50);
ctx.lineTo(155, 65);
ctx.lineTo(135, 80);
ctx.lineTo(120, 110);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();
