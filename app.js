const express = require('express');
const mongodb = require('mongodb');

const dbheader = require('./dbheader');

let app = express();
const path=require('path')
let MongoClient =mongodb.MongoClient;//开启服务
let Url = 'mongodb://localhost:27017/my_info';//存储url  ==》用于链接池
app.use(express.static(path.join(__dirname,'../zhouche')))

//验证码
app.get('/AdminLoginHandler',function(req,res){
    var actions=req.query.action
    switch(action){
        case "veri":
        var random=function(min,max){
            return Math.floor(Math.random()*(max-min)+min)
        }
        var lastStr=""
        var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        for(var i=0;i<4;i++){
            var code=str[random(0,str.length)]
            lastStr+=code
        }
        var newUser=new userInfo({
            username:"",
            password:"",
            id:"",
            veri:lastStr
        })
        req.session.veri=newUser.veri
        console.log(req.session)
        res.send({
            "success":"验证码获取成功",
            "data":lastStr
        })
        break;

    }
})


app.listen(3000, function () {
    console.log('server is running 3000')
})
