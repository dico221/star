/** @type {HTMLCanvasElement} */

let c = document.getElementById("star");
let ctx = c.getContext("2d");
ctx.strokeStyle = "red";
ctx.fillStyle = "#F9F6EE"
ctx.beginPath();
ctx.arc(250,250,250,0,2*Math.PI);
ctx.stroke();
ctx.fill()
//Math.sin(18)*250,Math.cos(18)*250
//Math.sin(54)*250,500-Math.cos(54)*250
/*
x1=Math.sin(18)*250
y1=Math.cos(18)*250
x2 = Math.sin(54)*250
y2 = 500-Math.cos(54)*250
//stella nel cerchio
*/



let pos = [
    {
        x: 1.59, //in basso a destra
        y: 1.81
    },
    {
        x: 1,  //in alto al centro
        y: 0
    },
    {
        x: 0.41, // in basso a sinistra
        y: 1.81
    },
    {
        x: 1.95, //alto a destra
        y: 0.69
    },
    {
        x: 0.05,   //alto a sinistra
        y: 0.69
    }
]
ctx.lineWidth = 1.5;
ctx.moveTo(pos[0].x*250,pos[0].y*250);
ctx.lineTo(pos[1].x*250,pos[1].y*250);
ctx.lineTo(pos[2].x*250,pos[2].y*250);
ctx.lineTo(pos[3].x*250,pos[3].y*250);
ctx.lineTo(pos[4].x*250,pos[4].y*250);
ctx.lineTo(pos[0].x*250,pos[0].y*250);

ctx.stroke();
