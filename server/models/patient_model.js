const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/lfh-db', {
    useNewUrlParser: true
})

//基于骨架创建模型，通过模型就可以造数据
const PatientModel = conn.model('patient', require('../schemas/patient_schema'));

module.exports=PatientModel;

// let arr = [];
// for(let i=0;i<10;i++){
//     arr.push({
//         name: '张三',
//         age: '23'+i,
//         birthday: '1956-3-5',
//         sex:'男',
//         telephone: '12343456567',
//         email: '163@com',
//         address:'北京',
//         file: false,        
//         newstatus: 2,
//     })
// }
// PatientModel.create(arr,(err,data)=>{
//     console.log(data);
// });
