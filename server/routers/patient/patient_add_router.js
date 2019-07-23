const express = require('express');
const router = express.Router();

const PatientModel = require('../../models/patient_model');


//添加病人数据
router.post('/', (req, res) => {
    let { name, birthday, age, sex, email, telephone, newstatus, address, file } = req.body;

    ; (async function () {
        const d = await PatientModel.create({ name, birthday, age, sex, email, telephone, newstatus, address, file });
        console.log(d)
        if (d) {
            res.json({ code: 0, msg: "病人信息添加成功" });
        }else{
            res.json({code:0,msg:'病人信息添加失败'})
        }

    })();

});



module.exports = router;