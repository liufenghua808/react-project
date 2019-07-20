const express = require('express');
const router = express.Router();

const UserModel = require('../../models/uesr_model');

//注册接口
router.post('/', (req, res) => {

    let {  user, pass,email } = req.body;
    console.log(user, pass,email,);
   
        UserModel.findOne({ user }, (error, data) => {
            console.log(data)
            if (error) {
                res.json({ code: 1, msg: '注册失败' })
                return;
            }
            if (data === null) {
                ; (async function () {
                    const d = await UserModel.create({ email, user, pass });
                    console.log(d);
                    res.json({ code: 0, msg: '恭喜您，账号注册成功,现在可以登陆了！！', user, level: d.level });
                })();
            } else {
                res.json({ code: 2, msg: '用户名已被占用' })
            }

        });

})

module.exports = router;