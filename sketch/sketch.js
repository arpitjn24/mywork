 var flag=0;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var canvas = document.getElementById('box');
var context = canvas.getContext('2d');
 canvas.addEventListener('mousemove', function(evt) {
     if (flag)
     {       var mousePos = getMousePos(canvas, evt);
     console.log(mousePos.x, mousePos.y);
         context.rect(mousePos.x,mousePos.y,2,2)
         context.fillStyle="blue";
         context.fill();
 }
}, false);

cool=function () {
    flag=0;
}
col=function () {
    flag=1;

}
