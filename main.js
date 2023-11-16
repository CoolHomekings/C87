
canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
color="red";

var mouse_x=0;
var mouse_y=0;



function myMouseDown(e)
{
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

console.log("x= "+mouse_x+" y= "+mouse_y);
drawCircle(mouse_x,mouse_y);
}

canvas.addEventListener("mousedown",myMouseDown);

function drawCircle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();
}