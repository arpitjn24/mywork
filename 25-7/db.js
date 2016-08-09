/**
 * Created by arpit on 6/8/16.
 */
var mysql=require('mysql');

let connection={};
var createconnection=function () {


 connection=mysql.createConnection({
     user:'todouser',
     host:'localhost',
     database:'tododb'
 });
    return connection;
}

module.exports={
    add:function (data) {
        conn=createconnection();
        conn.connect();
      conn.query('insert into chat values(? ,? ,?);', [ data.id,data.chat,data.user ] , function (err,result) {
          if(err)
              throw err;
          console.log(result);
      })
    },
    show:function (data) {
        conn=createconnection();
        conn.connect();
        var chat=[];
        console.log(data);
        conn.query('select user,data from chat order by id;',function (err,rows,fields) {
            if(err)
                throw err;
            console.log(rows);
            data(rows);
            // for(row of rows){
            //     chat.push({
            //         user:row.user,
            //         msg:row.msg
            //     })
            // }
            // console.log(rows);
            // console.log(chat.msg);
            // data(chat);
            //console.log(result);
        })
    }
}

