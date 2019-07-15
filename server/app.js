const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

let patientSql=[
    {
        id:'0',
        name:'zhangsan',
        age:'40',
        telephone:'15811453475',
        lastvisit:'2019-6-2',
        newstatus:0
    },
    {
        id:'1',
        name:'lisi',
        age:'40',
        telephone:'15811453475',
        lastvisit:'2019-6-2',
        newstatus:1
    },
    {
        id:'2',
        name:'wangwu',
        age:'40',
        telephone:'15811453475',
        lastvisit:'2019-6-2',
        newstatus:2
    },
]

//获取病人数据
app.get('/patient/list',(req,res)=>{
    res.json({
        code:0,
        msg:patientSql
    })
})


//用户操作
const userSql = [
    //超级管理员 type=0
    {
        id: 0,
        user: 'liufenghua',
        pass: '123456',
        email:'liufenghua@163.com',
        type: 0,
    },
    //普通用户  type=1
    {
        id: 1,
        user: 'zhangsan',
        pass: 123456,
        email:'zhangsan@163.com',
        type: 1,
    },
    {
        id: 2,
        user: 'lisi',
        pass: 123456,
        email:'lisi@163.com',
        type: 1,
    }
]

// app.use('/get', (req, res, next) => {
//     let cookie = req.cookies.user;
//     let obj = {};
//     if (!cookie) {
//         res.json({ code: 5, msg: '未登录' });
//     } else {
//         obj.code = 0;
//         obj.msg = '登录成功';
//         let u = userSql.find(item => item.user === cookie)
//         obj.data = {
//             user: u.user,
//             pic: u.pic,
//             type: u.type,
//             sex: u.sex
//         }
//         res.json(obj);
//     }
// });


// 登陆接口 /login
app.post('/login', (req, res) => {
    let obj = {};
    let { user, pass } = req.body;
    console.log(user, pass);
    // console.log( req );
    let u = userSql.find(item => item.user === user);
    if (u) {
        if (u.pass == pass) {
            obj.code = 0;
            obj.msg = '登录成功';
            obj.data = {
                user: u.user,
                type: u.type,
            }
        } else {
            obj.code = 2;
            obj.msg = '用户名或密码错误';
        }
    } else {
        obj.code = 1;
        obj.msg = '用户不存在';
    }

    if (obj.code === 0) {
        res.cookie("user", obj.data.user, { maxAge: 100000 });
    }
    console.log(obj)
    res.json(obj);

});




app.listen(80);