const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Session = [];
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./www'));


const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/lfh-db', {
    useNewUrlParser: true
})





//连接数据库
// mongoose.connect('mongodb://127.0.0.1:27017/lfh-db', {
//     useNewUrlParser: true
// })

// mongoose.connection.once('open', () => {
//     console.log('数据库连接成功');

//     app.listen(80, () => {
//                  console.log('服务器连接成功')
//            });
// })

//连接数据库
conn.on('connected', () => {
    console.log('数据库连接成功');

    
//用户注册登陆
app.use('*', (req, res, next) => {
    req.Session = Session;
    next();
})
//找cookie
// app.use('/setcookie', require('./routers/user/user_setcookie_router'));
app.get('/setcookie', (req, res) => {
    let obj = req.Session.find(item => item.user === req.cookies.user);
    console.log(obj)
    if (obj) {
        res.json({ code: 0, msg: '您目前已经处于登陆状态：' })
    } else {
        res.json({ code: 1, msg: '请前往登录' })
    }
})


// 用户登陆接口 /login
app.use('/login', require('./routers/user/user_login_router'));

//用户注册接口
app.use('/signup', require('./routers/user/user_signup_router'));

//===========病人管理模块================================
//获取病人信息
app.use('/patient/list', require('./routers/patient/patient_list_router'));

//添加病人信息
app.use('/patient/add', require('./routers/patient/patient_add_router'));

//删除病人信息
app.use('/patient/delete', require('./routers/patient/patient_delete_router'));


    app.listen(80, () => {
        console.log('服务器连接成功')
    });
})






