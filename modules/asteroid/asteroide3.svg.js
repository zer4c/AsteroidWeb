const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(295, 280);    
ctx.lineTo(330, 310);
ctx.lineTo(350, 350);
ctx.lineTo(375, 325);
ctx.lineTo(400, 350);
ctx.lineTo(425, 310);
ctx.lineTo(450, 300);
ctx.lineTo(400, 275);
ctx.lineTo(375, 230);    
ctx.lineTo(350, 275);    
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();
