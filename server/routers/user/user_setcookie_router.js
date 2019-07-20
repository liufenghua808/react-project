const express = require('express');
const router = express.Router();


//找cookie
router.get('/',(req,res)=>{
    let obj = req.Session.find(item=>item.user === req.cookies.name);
    //{maxAge: 12000}
    if(obj){
        res.json({code:0,msg:obj})
    }else{
        res.json({code:1,msg:'请登录'})
       
    }
}





// (req, res, next) => {
//     let cookie = req.cookies.user;
//     let obj = {};
//     if (!cookie) {
//         res.json({ code: 5, msg: '未登录过' });
//     } else {
//         obj.code = 0;
//         obj.msg = '登录成功';
//         let u = UserModel.find(item => item.user === cookie)
//         obj.data = {
//             user: u.user,
//             type: u.type,
//         }
//         res.json(obj);
//     }
// }
)

module.exports = router;