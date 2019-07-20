const express = require('express');
const router = express.Router();

const UserModel = require('../../models/uesr_model');

//     //用户操作

//登陆接口
router.post('/', (req, res) => {
    let { user, pass } = req.body;
    console.log(UserModel)
    UserModel.findOne({ user, pass }, { pass: 0 }, (err, data) => {
       
        if (err) {
            res.json({
                code: 1,
                msg :'用户不存在'
            })
            return;
        };
        console.log(data);
        if (data) {
            //设置session
            res.cookie("user", data.user, { maxAge: 1000000 });
            req.Session.push({
                user: data.user,
                level: data.level,
                id: data._id
            });
            res.json({
                code:0,
                data,
                msg:'登陆成功'
            })
        } else {
            res.json({
                code:2,
                msg: '用户名或密码错误'
            })
        }

    })

})

module.exports = router;