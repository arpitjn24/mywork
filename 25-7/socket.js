/**
 * Created by arpit on 25/7/16.
 */
var k=220;
const express=require('express');
const http=require('http')
const socketio=require('socket.io');

const app=express();
const server=http.Server(app);
const db=require('./db');
const io=socketio(server);
const user=[];
console.log('4')
io.on('connection',function (socket) {
    user.push({'user':socket})
    console.log('a user is connected');
    socket.on('chat',function (data) {
        console.log(data.msg);
        //socket.broadcast.emit('chat',data);
        //for also seeing himself
        //    io.emit('chat',data)
db.add({
    id:k,
    chat:data.msg,
    user:data.user
},function () {
    
})
        db.show(function (baat) {
            k++;
            console.log('sockets',baat);
            io.emit('chat',baat)


        })

        });
        
    //     k++;
    //     io.emit('chat',data)
    //     console.log('5')
    // })
    socket.on('disconnect',function () {
console.log('a user is disconnected');
    })
})





app.use('/',express.static(__dirname+'/public'));




server.listen(9000);