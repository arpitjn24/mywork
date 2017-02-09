 var flag=0;
var canvas = document.getElementById('box');
const rect = canvas.getBoundingClientRect();
let prevPos = {
  x : 0,
  y : 0
}

function getMousePos(canvas, evt) {
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var context = canvas.getContext('2d');
 canvas.addEventListener('mousemove',apply,false);
 canvas.addEventListener('touchmove',apply,false);
// canvas.addEventListener('mousemove', function(evt)
 function apply(evt) {
    setTimeout( function () {
      if (flag)
     {   
         var mousePos = getMousePos(canvas, evt);
         context.fillStyle="blue";
         context.beginPath();
         context.moveTo(mousePos.x,mousePos.y);
         context.lineTo(prevPos.x,prevPos.y);
         context.stroke();
         prevPos = mousePos;
      }
    } , 0 );   // defer the 
   
}
var p=document.getElementById('box');
 p.addEventListener('mouseup',cool,false);
 p.addEventListener('touchend',cool,false);
function  cool () {
    flag=0;
}
p.addEventListener('mousedown',col,false);
p.addEventListener('touchstart',col,false);
function  col(evt) {
  prevPos = getMousePos(canvas,evt);
    flag=1;

}
