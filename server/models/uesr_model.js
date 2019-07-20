const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/lfh-db', {
    useNewUrlParser: true
})

//基于骨架创建模型，通过模型就可以造数据
const UserModel = conn.model('user', require('../schemas/uesr_schema'));

module.exports=UserModel;