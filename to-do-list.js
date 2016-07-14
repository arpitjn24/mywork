/*var v1 = [];
var i=0;
function add() {
console.log(typeof v1);
    if(document.getElementById('text').value=="")
        return;
    v1.push({
        item : document.getElementById('text').value,
        check : "false"
    });
    
document.getElementById('list').innerHTML+='<li id="'+i+'"><input type="checkbox" onclick="del(i)"> ' +v1[i].item+'</li>';
 document.getElementById('text').value="";
    console.log(v1);
i++;
}
function display() {
    document.getElementById('list').innerHTML="";
  for(j=0;j<v1.length;j++){
      if(v1.check =="false"){
document.getElementById('list').innerHTML+= '<li id="'+j+'"><input type="checkbox" onclick="del(j)">"+v1[j].item+"</li>';
 }
    console.log(v1);
  }
}
function del(k){
    console.log(k);
    console.log(v1[k].item);
    console.log(v1[k].check);
    console.log('delete');
    v1[k].check="true";
}
*/
var store = [];
var i = 0;

function add() {
    var a = document.getElementById('text').value;
    document.getElementById('text').value = "";
    if (a.length == "") return;
    var curr = document.getElementById('list').innerHTML;
    store.push({
        "text": a
        , "val": false
    });
    document.getElementById('list').innerHTML = curr + makeit(i);
    i++;
}

function makeit(arg) {
    return "<li id='item" + arg + "'><input type='checkbox' onclick='check(" + arg + ")'>" + store[arg].text + "</li>"
}

function check(k) {
    if (store[k].value == true) document.getElementById("item" + k).setAttribute("class", "notchecked")
    else document.getElementById("item" + k).setAttribute("class", "checked")
};

function del(){
    for(j=0;j<i;j++)
        {console.log(j);
         console.log(store[j].getAttribute("class"));
         
            if(store[j].getAttribute("class") == "checked")
            {
        store.splice(j,1);
                i--;
                j--;
            }
        }
    rebuild();
}
function rebuild(){
document.getElementById('list').innerHTML="";
    for(m=0;m<i;m++)
        {
            var prev=document.getElementById('list').innerHTML;
            document.getElementById('list').innerHTML=prev+makeit(m);
        }
    
    
}

