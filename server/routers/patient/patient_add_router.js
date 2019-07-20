const express = require('express');
const router = express.Router();

const PatientModel = require('../../models/patient_model');


//获取病人数据
router.post('/', (req, res) => {
    let { name, age, email } = req.body;
    console.log(name, age, email);

    PatientModel.findOne({ name, age, email }, (error, data) => {
        //console.log(data)
        if (error) {
            res.json(
                {
                    code: 0,
                    msg: '失败'
                });
        }

        if (data === null) {
            ; (async function () {
                const d = await PatientModel.create({ name, age, email });
                console.log(d);
                res.json({ code: 0, msg: d });
            })().catch((err)=>{
                res.json({ code: 0, msg: err });
            });
        }

    });


})

module.exports = router;