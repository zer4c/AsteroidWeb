const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(205, 210);
ctx.lineTo(172, 138);
ctx.lineTo(183, 145);
ctx.lineTo(213, 118);
ctx.lineTo(243, 143);
ctx.lineTo(262, 155);
ctx.lineTo(250, 195);
ctx.lineTo(238, 185);
ctx.lineTo(225, 213);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();
