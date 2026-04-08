const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(200, 80);  
ctx.lineTo(250, 200); 
ctx.lineTo(200, 180);
ctx.lineTo(150, 200);
ctx.closePath();       
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 170);
ctx.lineTo(140, 220);
ctx.lineTo(130, 190);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 170);
ctx.lineTo(270, 190);
ctx.lineTo(260, 220);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 205);
ctx.lineTo(180, 195);
ctx.lineTo(170, 230);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(185, 195);
ctx.lineTo(200, 190);
ctx.lineTo(215, 195);
ctx.lineTo(200, 230);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 205);
ctx.lineTo(220, 195);
ctx.lineTo(230, 230);
ctx.closePath();
ctx.strokeStyle = "white";
ctx.stroke();