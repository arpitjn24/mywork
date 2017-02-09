/**
 * Created by arpit on 8/2/17.
 */
console.log(1);
console.log(window.innerWidth);
// for(j=0;j<10;j++)
// {for(i=0;i<10;i++)
//     document.getElementById('box').innerHTML+='<div  id="'+i+'"class="'+j+'" style="width: 5px;height: 25px;background-color: aqua"' +
//         'onclick="color('+i+','+j+')">';
//     document.getElementById('box').innerHTML+='<br><br><br><br><br><br><span></span>';
//
// }
//
// color=function (i,j) {
//    // console.log(1);
//     console.log(i,j);
//     document.getElementById(''+i+'.'+j+'').style.backgroundColor="red";
// }
console.log(innerWidth)
var flag=0;
for(i=0;i<window.innerWidth;i++)
{   document.getElementById('box').innerHTML+='<div  ' +
    'id="'+i+'" style="width: 1px;height: 45px;background-color: aqua"' +
       'onmousedown="col('+i+') " onmousemove="color('+i+') " onmouseup="cool('+i+')">';
//  
    
}

cool=function () {
    flag=0;
}
col=function (i) {
    flag=1;

}

color=function (i) {
    console.log(i);
    if(flag)
    document.getElementById(''+i+'').style.backgroundColor="red";
}