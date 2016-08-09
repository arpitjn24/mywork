/**
 * Created by arpit on 25/7/16.
 */

var socket=io();


$(function () {


    const username=prompt("enter username");
    //socket.user=username;
    $('#submitchat').click(function () {
        console.log('1')
        socket.emit('chat',{

            user:username,
            msg:$('#chatmsg').val()})
    })
    $("#chatmsg").val('');
    //console.log(chat);
    socket.on('chat',function (datas) {
        document.getElementById("chatbox").innerHTML="";
        console.log('3',datas)
        for(chat of datas)
        $('#chatbox').append(chat.user+':'+ chat.data+'<br>');
    })
})