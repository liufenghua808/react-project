const express = require('express');
const router = express.Router();

const PatientModel = require('../../models/patient_model');


//添加病人数据
router.post('/', (req, res) => {
    let {  name, birthday, age, sex, email, telephone, address, file } = req.body;
            
    ;(async function () {
                const d = await PatientModel.create({ name, birthday, age, sex, email, telephone, address, file });
         
                res.json({ code: 0, msg: "病人信息添加成功" });
            })();

    });



module.exports = router;