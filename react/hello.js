/**
 * Created by arpit on 3/3/17.
 */
var express=require("express");

const app=express();

app.use( express.static("static"));


app.listen(3000,function () {
    console.log("port 3000");
})