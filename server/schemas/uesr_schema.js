const mongoose = require('mongoose');

//创建骨架
const UserSchema = new mongoose.Schema({
    num: {
        //required: true,
        type: String
    },
    user: {
        required: true,
        type: String
    },
    pass: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    level: {
        default: 0,
        type: Number
    }
});

module.exports = UserSchema;
