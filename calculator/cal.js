var arg1,arg2="",arg3="",arg4="";


function myc(el){
  console.log(el);
  console.log(typeof el);
if(el=='=')
{//console.log('equal found');
arg2=document.getElementById('k').value;
//console.log(arg2);
len=arg2.length;
//console.log(len);
for(i=0;i<len;i++)
{//console.log(arg2[i]);
if(arg2[i]=='+' || arg2[i]=='-' || arg2[i]=='*' || arg2[i]=='/')
{  arg4=i;
//  console.log(arg4);
}
}
arg3=arg2.split(arg2[arg4]);
console.log(arg2[arg4]);
arg3=arg2.split(arg2[arg4]);
arg3[0]=Number(arg3[0]);
arg3[1]=Number(arg3[1]);
operator=arg2[arg4];
console.log(operator);
var answerbox ;
switch(operator)
  {
    case "*" : {
         answerbox = arg3[0]*arg3[1] ;
         break;
     }
      case "+" : {
         answerbox = arg3[0]+arg3[1] ;
         break;
     }
       case "/" : {
         answerbox = arg3[0]/arg3[1] ;
         break;
     }
       case "-" : {
         answerbox = arg3[0]-arg3[1] ;
         break;
     }
  }
answerbox=answerbox.toFixed(2);
  answerbox=answerbox*100;
    answerbox=Math.round(answerbox);
    answerbox=answerbox/100;
document.getElementById('k').value=answerbox;

}
else if (el=='C') {
document.getElementById('k').value="";
}
else  {
  document.getElementById('k').value+=el;
}
};
