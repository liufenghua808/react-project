// //病人数据
// let patientSchema = [
//     {
//         id: '0',
// name: 'zhangsan',
// age: '40',
// telephone: '15811453475',
// lastvisit: '2019-6-2',
// newstatus: 0,
// checked: false
//     },
//     {
//         id: '1',
//         name: 'lisi',
//         age: '40',
//         telephone: '15811453475',
//         lastvisit: '2019-6-2',
//         newstatus: 1,
//         checked: false
//     },
//     {
//         id: '2',
//         name: 'wangwu',
//         age: '40',
//         telephone: '15811453475',
//         lastvisit: '2019-6-2',
//         newstatus: 2,
//         checked: false
//     },
//     {
//         id: '3',
//         name: 'wangwu',
//         age: '23',
//         telephone: '15811453475',
//         lastvisit: '2019-6-2',
//         newstatus: 2,
//         checked: false
//     },
//     {
//         id: '4',
//         name: 'wangwu',
//         age: '34',
//         telephone: '15811453475',
//         lastvisit: '2019-6-2',
//         newstatus: 2,
//         checked: false
//     },
//     {
//         id: '5',
//         name: 'wangwu',
//         age: '12',
//         telephone: '15811453475',
//         lastvisit: '2019-6-2',
//         newstatus: 2,
//         checked: false
//     },
// ]


const mongoose = require('mongoose');

//创建骨架
const patientSchema = new mongoose.Schema({
    num: {
        //required: true,
        type: String
    },
    name: {
        default:true,
        type: String
    },
    age: {
        default:false,
        type: String
    },
    birthday: {
        default: false,
        type: String
    },
    sex:{
        default: false,
        type: String
    }
    ,
    telephone: {
        default: false,
        type: String
    },
    email: {
        default: false,
        type: String
    },
    address: {
        default: false,
        type: String
    },
    file: {
        default: false,
        type: String
    },
    // lastvisit: {
    //     default: false,
    //     type: String
    // },
    newstatus: {
        default: false,
        type: Number
    },
    checked: {
        default: false,
        type: Boolean
    }
});

module.exports = patientSchema;
