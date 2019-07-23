const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/lfh-db', {
    useNewUrlParser: true
})

//基于骨架创建模型，通过模型就可以造数据
const UserModel = conn.model('user', require('../schemas/uesr_schema'));

module.exports=UserModel;

// let user = new UserModel({
//     // num: {
//     //     //required: true,
//     //     type: String
//     // },
//     user: 'lhp',
//     pass: '123456',
//     email: '123@123',
//     level: 0
// })


//批量添加
// let arr = [];
// for(let i=0;i<100;i++){
//     arr.push({
//         user:'zf'+i,
//         pass:123,
//         email:123+i,
//         level:0
//     })
// }
// UserModel.create(arr,(err,data)=>{
//     console.log(data);
// });




// const UserModel = mongoose.model('user', require('../schemas/uesr_schema'));
// module.exports = UserModel;