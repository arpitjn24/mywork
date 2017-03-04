var react=require("react");
var reactdom=require("react-dom");
//import * as react from "react"; //es6 module import
//import * as reactdom from "react-dom";
//create a react component for our hello world

class hellocompoment extends react.Component{
    render(){
        return <div> hello world from react</div>
    }
}


//create an obj of this class
var my_helloworld_obj=<hellocompoment/>;
var node=document.getElementById('app');

reactdom.render(my_helloworld_obj,node);