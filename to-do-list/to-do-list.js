var todolist=[];
window.onload=function(){
    var recieve=localStorage.getItem('todo');
    if(recieve!=null)
        {
            showtodo();
        }
}
function add(){
    var curr=document.getElementById('text').value;
  document.getElementById('text').value="";
    if(curr=="")
        return;
    todolist.push({"item":curr,"check":false})
    savetodo();
    showtodo();
    
}
function savetodo(){
    var storetodo=JSON.stringify(todolist);
    localStorage.setItem('todo',storetodo);
    
}
function showtodo(){
    var tododata=localStorage.getItem('todo');
    todolist=JSON.parse(tododata);
    var todoshow="";
    for(i=0;i<todolist.length;i++)
        {
            if(todolist[i].check)
            {todoshow+='<li id="'+i+'" onclick="delc(id)"><input type="checkbox" checked >'+todolist[i].item+'</li>';
            console.log(i);}
            else
            {
                todoshow+='<li id="'+i+'" onclick="delu(id)"><input type="checkbox" >'+todolist[i].item+'</li>';
             console.log(i);
            }
        }
    document.getElementById('list').innerHTML=todoshow;
}
function delc(arg){
    todolist[arg].check=false;
    savetodo();
    showtodo();
}
function delu(arg){
    console.log(arg);
    todolist[arg].check=true;
    savetodo();
    showtodo();
}
function del(){
    for(j=0;j<todolist.length;j++)
        {
            if(todolist[j].check)
                {
                    todolist.splice(j,1);
                    j--;
                }
            
        }
    savetodo();
    showtodo();
}